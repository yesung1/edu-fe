/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */

export interface PaymentFailureNotificationRequest {
  /** 실패 사유 */
  failReason: string;
  /** 거래 고유번호 */
  impUid: string;
  /** 주문번호 */
  orderId: string;
}
