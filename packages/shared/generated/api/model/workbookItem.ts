/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */

/**
 * 주문 요청 교재 리스트
 */
export interface WorkbookItem {
  /** 클리닉 ID */
  clinicId: string;
  /** 클리닉 교재 맵 ID */
  clinicWorkbookMapId: string;
  /** 필수 여부 */
  isRequired: boolean;
  /** 카테고리 명 */
  majorSubject: string;
  /** 판매가 */
  salePrice: number;
  /** 강사 명 */
  teacherName: string;
  /** 교재 ID */
  workbookId: string;
  /** 교재 명 */
  workbookTitle: string;
  /** 교재 권수 */
  workbookVolumeCount: number;
}
