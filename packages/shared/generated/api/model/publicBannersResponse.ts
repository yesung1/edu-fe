/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */
import type { EventModal } from "./eventModal";
import type { StripBanner } from "./stripBanner";

export interface PublicBannersResponse {
  /** 이벤트 모달 정보 - 추후 모달 API 대체 */
  eventModals: EventModal[];
  stripBanner?: StripBanner;
}
