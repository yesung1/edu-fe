/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */
import type { StudentSimpleClinicResponseClinicProgressStep } from "./studentSimpleClinicResponseClinicProgressStep";
import type { CategoryCodeResponse } from "./categoryCodeResponse";

export interface StudentSimpleClinicResponse {
  /** 클리닉 ID */
  clinicId: string;
  /** 클리닉 진행 단계 */
  clinicProgressStep?: StudentSimpleClinicResponseClinicProgressStep;
  majorSubject?: CategoryCodeResponse;
  /** 강사 이름 */
  teacherName: string;
  /** 대표 이미지 URL */
  thumbnailImageUrl: string;
  /** 클리닉 제목 */
  title: string;
}
