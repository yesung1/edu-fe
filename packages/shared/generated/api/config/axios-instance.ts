import Axios, { AxiosError, AxiosRequestConfig } from 'axios'
import qs from 'qs'

const paramsSerializer = (params: any) => qs.stringify(params)

export const AXIOS_INSTANCE = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_HOST,
  paramsSerializer,
})

interface Options {
  accessToken?: string
  headers?: Record<string, any>
}

/**
 * optinos 라는 파라미터를 정의했지만
 * 자동생성 될 때 request라고 orval에서 변경됨
 *
 * @param config
 * @param options
 */
export const axiosInstance = async <T>(
  config: AxiosRequestConfig,
  options?: Options,
): Promise<T> => {
  config.headers = {
    ...config.headers,
    ...options?.headers,
  }

  if (options?.accessToken) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${options?.accessToken}`,
    }
  }

  const promise = AXIOS_INSTANCE({ ...config }).then(({ data }) => data)
  return promise
}

export default AXIOS_INSTANCE
export type ErrorType<Error> = AxiosError<Error>
