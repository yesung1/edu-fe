/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */

/**
 * 간편 결제 종류(간편결제만 해당)
 */
export type StudentRefundDetailPaymentInfoResponseEasyPaymentType =
  (typeof StudentRefundDetailPaymentInfoResponseEasyPaymentType)[keyof typeof StudentRefundDetailPaymentInfoResponseEasyPaymentType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const StudentRefundDetailPaymentInfoResponseEasyPaymentType = {
  kakaopay: "kakaopay",
  naverpay: "naverpay",
  naverpay_card: "naverpay_card",
  naverpay_point: "naverpay_point",
  payco: "payco",
  lpay: "lpay",
} as const;
