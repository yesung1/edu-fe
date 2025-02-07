/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */
import type { StudentRefundResponseRefundStatus } from "./studentRefundResponseRefundStatus";

export interface StudentRefundResponse {
  /** 주문번호 */
  orderNumber?: string;
  /** 상품명 (복수개일 경우 최상단 상품 명 외 n건으로 표기)  */
  productName: string;
  /** 환불일시 */
  refundedDate?: string;
  /** 환불ID */
  refundId: string;
  /** 환불금액 */
  refundPrice?: number;
  /** 환불상태 */
  refundStatus: StudentRefundResponseRefundStatus;
}
