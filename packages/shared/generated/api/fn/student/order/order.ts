/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */
import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  IdResponse,
  OrderCreationRequest,
  OrderItemResponse,
  OrderItemSavingRequest,
  PathApiError,
  PaymentFailureNotificationRequest,
  Unit,
} from "../../../model";
import { axiosInstance } from "../../../config/axios-instance";
import type { ErrorType } from "../../../config/axios-instance";

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary 결제 실패 알림
 */
export const sendPaymentFailureNotificationToSlack = (
  paymentFailureNotificationRequest: PaymentFailureNotificationRequest,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<Unit>(
    {
      url: `/clus/port-one/payment/notify/failure`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: paymentFailureNotificationRequest,
    },
    options
  );
};

export const getSendPaymentFailureNotificationToSlackMutationOptions = <
  TError = ErrorType<PathApiError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof sendPaymentFailureNotificationToSlack>>,
    TError,
    { data: PaymentFailureNotificationRequest },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof sendPaymentFailureNotificationToSlack>>,
  TError,
  { data: PaymentFailureNotificationRequest },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof sendPaymentFailureNotificationToSlack>>,
    { data: PaymentFailureNotificationRequest }
  > = (props) => {
    const { data } = props ?? {};

    return sendPaymentFailureNotificationToSlack(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type SendPaymentFailureNotificationToSlackMutationResult = NonNullable<
  Awaited<ReturnType<typeof sendPaymentFailureNotificationToSlack>>
>;
export type SendPaymentFailureNotificationToSlackMutationBody =
  PaymentFailureNotificationRequest;
export type SendPaymentFailureNotificationToSlackMutationError =
  ErrorType<PathApiError>;

/**
 * @summary 결제 실패 알림
 */
export const useSendPaymentFailureNotificationToSlack = <
  TError = ErrorType<PathApiError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof sendPaymentFailureNotificationToSlack>>,
    TError,
    { data: PaymentFailureNotificationRequest },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions =
    getSendPaymentFailureNotificationToSlackMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 주문 생성하기
 */
export const createOrder = (
  orderCreationRequest: OrderCreationRequest,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<IdResponse>(
    {
      url: `/clus/port-one/order`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: orderCreationRequest,
    },
    options
  );
};

export const getCreateOrderMutationOptions = <
  TError = ErrorType<PathApiError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createOrder>>,
    TError,
    { data: OrderCreationRequest },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof createOrder>>,
  TError,
  { data: OrderCreationRequest },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createOrder>>,
    { data: OrderCreationRequest }
  > = (props) => {
    const { data } = props ?? {};

    return createOrder(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreateOrderMutationResult = NonNullable<
  Awaited<ReturnType<typeof createOrder>>
>;
export type CreateOrderMutationBody = OrderCreationRequest;
export type CreateOrderMutationError = ErrorType<PathApiError>;

/**
 * @summary 주문 생성하기
 */
export const useCreateOrder = <
  TError = ErrorType<PathApiError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createOrder>>,
    TError,
    { data: OrderCreationRequest },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getCreateOrderMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 주문 요청 항목 저장하기
 */
export const saveOrderItem = (
  orderItemSavingRequest: OrderItemSavingRequest,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<IdResponse>(
    {
      url: `/clus/order/item`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: orderItemSavingRequest,
    },
    options
  );
};

export const getSaveOrderItemMutationOptions = <
  TError = ErrorType<PathApiError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof saveOrderItem>>,
    TError,
    { data: OrderItemSavingRequest },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof saveOrderItem>>,
  TError,
  { data: OrderItemSavingRequest },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof saveOrderItem>>,
    { data: OrderItemSavingRequest }
  > = (props) => {
    const { data } = props ?? {};

    return saveOrderItem(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type SaveOrderItemMutationResult = NonNullable<
  Awaited<ReturnType<typeof saveOrderItem>>
>;
export type SaveOrderItemMutationBody = OrderItemSavingRequest;
export type SaveOrderItemMutationError = ErrorType<PathApiError>;

/**
 * @summary 주문 요청 항목 저장하기
 */
export const useSaveOrderItem = <
  TError = ErrorType<PathApiError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof saveOrderItem>>,
    TError,
    { data: OrderItemSavingRequest },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions = getSaveOrderItemMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary 결제 ID 가져오기
 */
export const getPaymentId6bSQ990 = (
  orderId: string,
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal
) => {
  return axiosInstance<IdResponse>(
    { url: `/clus/port-one/orders/${orderId}/payment`, method: "GET", signal },
    options
  );
};

export const getGetPaymentId6bSQ990QueryKey = (orderId: string) => {
  return [`/clus/port-one/orders/${orderId}/payment`] as const;
};

export const getGetPaymentId6bSQ990QueryOptions = <
  TData = Awaited<ReturnType<typeof getPaymentId6bSQ990>>,
  TError = ErrorType<PathApiError>
>(
  orderId: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getPaymentId6bSQ990>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof axiosInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetPaymentId6bSQ990QueryKey(orderId);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getPaymentId6bSQ990>>
  > = ({ signal }) => getPaymentId6bSQ990(orderId, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!orderId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getPaymentId6bSQ990>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetPaymentId6bSQ990QueryResult = NonNullable<
  Awaited<ReturnType<typeof getPaymentId6bSQ990>>
>;
export type GetPaymentId6bSQ990QueryError = ErrorType<PathApiError>;

/**
 * @summary 결제 ID 가져오기
 */
export const useGetPaymentId6bSQ990 = <
  TData = Awaited<ReturnType<typeof getPaymentId6bSQ990>>,
  TError = ErrorType<PathApiError>
>(
  orderId: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getPaymentId6bSQ990>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof axiosInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetPaymentId6bSQ990QueryOptions(orderId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary 주문 요청 항목 가져오기
 */
export const getOrderItem = (
  orderItemId: string,
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal
) => {
  return axiosInstance<OrderItemResponse>(
    { url: `/clus/order/items/${orderItemId}`, method: "GET", signal },
    options
  );
};

export const getGetOrderItemQueryKey = (orderItemId: string) => {
  return [`/clus/order/items/${orderItemId}`] as const;
};

export const getGetOrderItemQueryOptions = <
  TData = Awaited<ReturnType<typeof getOrderItem>>,
  TError = ErrorType<PathApiError>
>(
  orderItemId: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getOrderItem>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof axiosInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetOrderItemQueryKey(orderItemId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getOrderItem>>> = ({
    signal,
  }) => getOrderItem(orderItemId, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!orderItemId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getOrderItem>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetOrderItemQueryResult = NonNullable<
  Awaited<ReturnType<typeof getOrderItem>>
>;
export type GetOrderItemQueryError = ErrorType<PathApiError>;

/**
 * @summary 주문 요청 항목 가져오기
 */
export const useGetOrderItem = <
  TData = Awaited<ReturnType<typeof getOrderItem>>,
  TError = ErrorType<PathApiError>
>(
  orderItemId: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getOrderItem>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof axiosInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetOrderItemQueryOptions(orderItemId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary 가상 결제 만료 시키기
 */
export const expireVirtualAccountUVB8jS8 = (
  paymentId: string,
  options?: SecondParameter<typeof axiosInstance>
) => {
  return axiosInstance<Unit>(
    {
      url: `/clus/port-one/payments/${paymentId}/virtual-account`,
      method: "DELETE",
    },
    options
  );
};

export const getExpireVirtualAccountUVB8jS8MutationOptions = <
  TError = ErrorType<PathApiError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof expireVirtualAccountUVB8jS8>>,
    TError,
    { paymentId: string },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof expireVirtualAccountUVB8jS8>>,
  TError,
  { paymentId: string },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof expireVirtualAccountUVB8jS8>>,
    { paymentId: string }
  > = (props) => {
    const { paymentId } = props ?? {};

    return expireVirtualAccountUVB8jS8(paymentId, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type ExpireVirtualAccountUVB8jS8MutationResult = NonNullable<
  Awaited<ReturnType<typeof expireVirtualAccountUVB8jS8>>
>;

export type ExpireVirtualAccountUVB8jS8MutationError = ErrorType<PathApiError>;

/**
 * @summary 가상 결제 만료 시키기
 */
export const useExpireVirtualAccountUVB8jS8 = <
  TError = ErrorType<PathApiError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof expireVirtualAccountUVB8jS8>>,
    TError,
    { paymentId: string },
    TContext
  >;
  request?: SecondParameter<typeof axiosInstance>;
}) => {
  const mutationOptions =
    getExpireVirtualAccountUVB8jS8MutationOptions(options);

  return useMutation(mutationOptions);
};
