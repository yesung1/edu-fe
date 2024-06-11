/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */
import type { StudentRefundDetailPaymentInfoResponse } from "./studentRefundDetailPaymentInfoResponse";
import type { StudentRefundDetailProductResponse } from "./studentRefundDetailProductResponse";
import type { StudentRefundDetailRefundInfoResponse } from "./studentRefundDetailRefundInfoResponse";

export interface StudentRefundDetailResponse {
  payment: StudentRefundDetailPaymentInfoResponse;
  products: StudentRefundDetailProductResponse[];
  refund: StudentRefundDetailRefundInfoResponse;
  /** 환불ID */
  refundId: string;
}
