/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */
import type { StudentSimpleDrillContentContentType } from "./studentSimpleDrillContentContentType";

/**
 * 해당 회차의 드릴 상세 정보 목록
 */
export interface StudentSimpleDrillContent {
  /** 드릴 콘텐츠 유형 */
  contentType: StudentSimpleDrillContentContentType;
  /** 드릴 콘텐츠 ID */
  drillContentId?: string;
  /** 해당 드릴 콘텐츠 완료 여부 */
  isCompleted: boolean;
  /** 드릴 콘텐츠 제목 */
  title: string;
}
