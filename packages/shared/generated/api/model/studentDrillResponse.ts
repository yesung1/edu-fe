/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */
import type { StudentDrillContent } from "./studentDrillContent";

export interface StudentDrillResponse {
  /** 배정된 드릴 콘텐츠 수 */
  assignedCount: number;
  /** 완료한 드릴 콘텐츠 수 */
  completedCount: number;
  details: StudentDrillContent[];
  /** 드릴 목표 메시지 */
  goalMessage: string;
  /** 드릴 회차 */
  round: number;
}
