/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */
import type { UserResponseUserType } from "./userResponseUserType";

/**
 * 작성자 정보
 */
export interface UserResponse {
  /** 유저 이름 */
  name: string;
  /** 유저 ID */
  userId: string;
  /** 유저 타입 */
  userType: UserResponseUserType;
}
