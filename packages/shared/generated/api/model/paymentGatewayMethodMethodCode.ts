/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */

/**
 * 결제 수단 코드
 */
export type PaymentGatewayMethodMethodCode =
  (typeof PaymentGatewayMethodMethodCode)[keyof typeof PaymentGatewayMethodMethodCode];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PaymentGatewayMethodMethodCode = {
  card: "card",
  trans: "trans",
  vbank: "vbank",
  kakaopay: "kakaopay",
  naverpay: "naverpay",
  payco: "payco",
} as const;
