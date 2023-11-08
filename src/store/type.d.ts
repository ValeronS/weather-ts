import { AxiosResponse } from 'axios';

type FetchState = 'initial' | 'loading' | 'success' | 'error';
type TypedResponse<T> = AxiosResponse<T>;
export type TypedPromise<T> = Promise<TypedResponse<T>>;

export type { FetchState, TypedResponse };
