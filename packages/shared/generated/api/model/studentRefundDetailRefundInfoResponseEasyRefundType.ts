/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */

/**
 * 간편 환불 종류(간편결제만 해당)
 */
export type StudentRefundDetailRefundInfoResponseEasyRefundType =
  (typeof StudentRefundDetailRefundInfoResponseEasyRefundType)[keyof typeof StudentRefundDetailRefundInfoResponseEasyRefundType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const StudentRefundDetailRefundInfoResponseEasyRefundType = {
  kakaopay: "kakaopay",
  naverpay: "naverpay",
  naverpay_card: "naverpay_card",
  naverpay_point: "naverpay_point",
  payco: "payco",
  lpay: "lpay",
} as const;
