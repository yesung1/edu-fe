/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */
import { useQuery } from "@tanstack/react-query";
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { PathApiError, StudentReportResponse } from "../../../model";
import { axiosInstance } from "../../../config/axios-instance";
import type { ErrorType } from "../../../config/axios-instance";

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary 학부모 수강 리포트 조회하기
 */
export const getEnrollmentReportLpHUwE0 = (
  enrollmentId: string,
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal
) => {
  return axiosInstance<StudentReportResponse>(
    {
      url: `/student-parents/clinic-enrollments/${enrollmentId}/report`,
      method: "GET",
      signal,
    },
    options
  );
};

export const getGetEnrollmentReportLpHUwE0QueryKey = (enrollmentId: string) => {
  return [
    `/student-parents/clinic-enrollments/${enrollmentId}/report`,
  ] as const;
};

export const getGetEnrollmentReportLpHUwE0QueryOptions = <
  TData = Awaited<ReturnType<typeof getEnrollmentReportLpHUwE0>>,
  TError = ErrorType<PathApiError>
>(
  enrollmentId: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getEnrollmentReportLpHUwE0>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof axiosInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getGetEnrollmentReportLpHUwE0QueryKey(enrollmentId);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getEnrollmentReportLpHUwE0>>
  > = ({ signal }) =>
    getEnrollmentReportLpHUwE0(enrollmentId, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!enrollmentId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getEnrollmentReportLpHUwE0>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetEnrollmentReportLpHUwE0QueryResult = NonNullable<
  Awaited<ReturnType<typeof getEnrollmentReportLpHUwE0>>
>;
export type GetEnrollmentReportLpHUwE0QueryError = ErrorType<PathApiError>;

/**
 * @summary 학부모 수강 리포트 조회하기
 */
export const useGetEnrollmentReportLpHUwE0 = <
  TData = Awaited<ReturnType<typeof getEnrollmentReportLpHUwE0>>,
  TError = ErrorType<PathApiError>
>(
  enrollmentId: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getEnrollmentReportLpHUwE0>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof axiosInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetEnrollmentReportLpHUwE0QueryOptions(
    enrollmentId,
    options
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};
