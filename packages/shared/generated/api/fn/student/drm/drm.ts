/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */
import { useMutation } from "@tanstack/react-query";
import type {
  MutationFunction,
  UseMutationOptions,
} from "@tanstack/react-query";
import type { PathApiError, PostLicenseDataF75x0kParams } from "../../../model";
import { axiosInstance } from "../../../config/axios-instance";
import type { ErrorType } from "../../../config/axios-instance";

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * 학생이 DRM 영상 재생을 위한 DRM 라이선스를 요청한다
 * @summary 학생 DRM 라이선스 요청
 */
export const postLicenseDataF75x0k = (
  drmType: "WIDEVINE" | "PLAY_READY" | "FAIR_PLAY" | "NCG",
  postLicenseDataF75x0kBody: string,
  params: PostLicenseDataF75x0kParams,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<string>(
    {
      url: `/clus/drm/${drmType}`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: postLicenseDataF75x0kBody,
      params,
    },
    options
  );
};

export const getPostLicenseDataF75x0kMutationOptions = <
  TError = ErrorType<PathApiError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postLicenseDataF75x0k>>,
    TError,
    {
      drmType: "WIDEVINE" | "PLAY_READY" | "FAIR_PLAY" | "NCG";
      data: string;
      params: PostLicenseDataF75x0kParams;
    },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postLicenseDataF75x0k>>,
  TError,
  {
    drmType: "WIDEVINE" | "PLAY_READY" | "FAIR_PLAY" | "NCG";
    data: string;
    params: PostLicenseDataF75x0kParams;
  },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postLicenseDataF75x0k>>,
    {
      drmType: "WIDEVINE" | "PLAY_READY" | "FAIR_PLAY" | "NCG";
      data: string;
      params: PostLicenseDataF75x0kParams;
    }
  > = (props) => {
    const { drmType, data, params } = props ?? {};

    return postLicenseDataF75x0k(drmType, data, params, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostLicenseDataF75x0kMutationResult = NonNullable<
  Awaited<ReturnType<typeof postLicenseDataF75x0k>>
>;
export type PostLicenseDataF75x0kMutationBody = string;
export type PostLicenseDataF75x0kMutationError = ErrorType<PathApiError>;

/**
 * @summary 학생 DRM 라이선스 요청
 */
export const usePostLicenseDataF75x0k = <
  TError = ErrorType<PathApiError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postLicenseDataF75x0k>>,
    TError,
    {
      drmType: "WIDEVINE" | "PLAY_READY" | "FAIR_PLAY" | "NCG";
      data: string;
      params: PostLicenseDataF75x0kParams;
    },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getPostLicenseDataF75x0kMutationOptions(options);

  return useMutation(mutationOptions);
};
