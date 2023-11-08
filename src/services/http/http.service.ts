import axios, { AxiosInstance } from 'axios';
import qs from 'qs';
import { DeepUndefinable } from 'ts-essentials';
import { mapSearchParams } from './http.helpers.ts';
import { TypedResponse } from './type.response.ts';

const axiosInstance: AxiosInstance = <AxiosInstance>axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  proxy: false,
  paramsSerializer: (params) => {
    return qs.stringify(params, {
      arrayFormat: 'comma',
      encode: false,
    });
  },
});

type HttpServiceParams =
  | undefined
  | DeepUndefinable<{ query?: Record<string, unknown> } & Record<string, unknown>>;

const httpService = {
  get: <T>(url: string, p: HttpServiceParams = {}, headers = {}): Promise<TypedResponse<T>> => {
    const { query, ...params } = p;
    const _url = query ? url + '?' + mapSearchParams(query) : url;
    return axiosInstance.get(_url, {
      params: { ...params },
      ...headers,
    });
  },

  post: <T>(url: string, body?: unknown, p: HttpServiceParams = {}): Promise<TypedResponse<T>> => {
    const { query, ...params } = p;
    return axiosInstance.post(url, body, {
      params: query,
      ...params,
      data: body,
    });
  },

  put: <T>(url: string, body?: unknown, p: HttpServiceParams = {}): Promise<TypedResponse<T>> => {
    const { query, ...params } = p;

    return axiosInstance.put(url, body, {
      params: query,
      ...params,
      data: body,
    });
  },

  patch: <T>(url: string, body: unknown, p: HttpServiceParams = {}): Promise<TypedResponse<T>> => {
    const { query, ...params } = p;
    return axiosInstance.patch(url, body, {
      params: query,
      ...params,
      data: body,
    });
  },

  delete: <T>(url: string, p: HttpServiceParams = {}): Promise<TypedResponse<T>> => {
    const { query } = p;
    return axiosInstance.delete(url, { params: query });
  },
};

export { httpService };
