/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */

/**
 * 환불상태
 */
export type StudentRefundDetailProductResponseRefundStatus =
  (typeof StudentRefundDetailProductResponseRefundStatus)[keyof typeof StudentRefundDetailProductResponseRefundStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const StudentRefundDetailProductResponseRefundStatus = {
  REFUND_REQUEST: "REFUND_REQUEST",
  REFUND_WAITING: "REFUND_WAITING",
  REFUND_COMPLETION: "REFUND_COMPLETION",
  REFUND_REFUSAL: "REFUND_REFUSAL",
} as const;
