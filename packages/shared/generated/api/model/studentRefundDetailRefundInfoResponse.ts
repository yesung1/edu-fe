/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */
import type { StudentRefundDetailRefundInfoResponseEasyRefundType } from "./studentRefundDetailRefundInfoResponseEasyRefundType";
import type { StudentRefundDetailRefundInfoResponseRefundType } from "./studentRefundDetailRefundInfoResponseRefundType";

/**
 * 환불 정보
 */
export interface StudentRefundDetailRefundInfoResponse {
  /** 환불 계좌 예금주명(가상계좌 결제유형만 해당) */
  accountHolder?: string;
  /** 환불 계좌 번호(가상계좌 결제유형만 해당) */
  accountNumber?: string;
  /** 첨부파일명 목록(가상계좌 결제유형만 해당) */
  attachedFileNames?: string[];
  /** 환불 계좌 은행명(가상계좌 결제유형만 해당) */
  bankName?: string;
  /** 취소 전표 URL */
  cancellationReceiptUrl?: string;
  /** 카드종류(신용카드만 해당) */
  creditCardType?: string;
  /** 간편 환불 종류(간편결제만 해당) */
  easyRefundType?: StudentRefundDetailRefundInfoResponseEasyRefundType;
  /** 환불 취소 가능 여부 */
  isCancelable: boolean;
  /** 환불 완료 일시 */
  refundCompletedAt?: string;
  /** 환불 사유 */
  refundReason: string;
  /** 환불 불가 안내 */
  refundRefusalGuide?: string;
  /** 환불 신청 일시 */
  refundRequestedAt: string;
  /** 환불 수단 */
  refundType: StudentRefundDetailRefundInfoResponseRefundType;
}
