/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */
import type { UserResponse } from "./userResponse";

export interface PublicEventCommentResponse {
  authorUser: UserResponse;
  /** 댓글 내용 */
  content: string;
  /** 댓글 작성 일시 */
  createdAt: string;
  /** 이벤트 댓글 ID */
  id: string;
}
