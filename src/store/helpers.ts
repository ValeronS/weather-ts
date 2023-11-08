import { FetchState } from './type';

import { ErrorsResponse } from '@/services/weather/models.ts';
import { useModalStore } from '@/store/rootStore';
import { TypedResponse } from '@/store/type';
import { isNetworkError, E_Modals } from '@/utils';

export interface IDoRequestAPI<T> {
  onLoad?: (v: T) => any;
  reqFunc: () => Promise<TypedResponse<T>>;
  onError?: (v: ErrorsResponse) => Promise<any> | any;
  onLoadMessage?: string;
  onLoading?: (v: FetchState) => void;
}

type OnGeneralErrorParams = {
  message: string;
  errors?: Record<string, string[]>;
};
export const onGeneralError = ({ errors, message }: OnGeneralErrorParams) => {
  if (!message && !errors?.length) return;
  const modalStore = useModalStore();
  modalStore.setModal(E_Modals.ERROR);
  const combinedErrors = errors
    ? Object.values(errors)
        .map((errs) => `${errs?.join('\n')}`)
        .join('\n\n')
    : '';
  const errorMessage = message + '\n' + combinedErrors;
  modalStore.setModalText(errorMessage);
};

export const doRequestAPI = async <T>({
  reqFunc,
  onLoad = () => null,
  onError = onGeneralError,
  onLoading = () => null,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
IDoRequestAPI<T>): Promise<{ error?: string; errorStatus?: number }> => {
  let error;
  const _onLoading = (v: FetchState) => onLoading(v);

  _onLoading('loading');
  try {
    const response = await reqFunc();
    console.debug(response, '|||response|||');
    await onLoad(response?.data);

    _onLoading('success');
  } catch (e: any) {
    error = e;
    if (import.meta.env.DEV) {
      console.error(e.response, e);
    }

    _onLoading('error');
    if (isNetworkError(error.toString())) {
      return { error: undefined };
    } else {
      // console.log(error?.response?.data?.errors, 'error?.response?.data?.errors');
      await onError({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        errors: error?.response?.data?.errors ?? [],
        message: error?.response?.data?.message ?? error?.response?.message,
      });
    }
  }
  return { error, errorStatus: error?.response?.status };
};
