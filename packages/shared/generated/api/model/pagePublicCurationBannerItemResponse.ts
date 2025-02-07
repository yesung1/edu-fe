/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */
import type { PublicCurationBannerItemResponse } from "./publicCurationBannerItemResponse";
import type { PageableObject } from "./pageableObject";
import type { SortObject } from "./sortObject";

export interface PagePublicCurationBannerItemResponse {
  content?: PublicCurationBannerItemResponse[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: PageableObject;
  size?: number;
  sort?: SortObject;
  totalElements?: number;
  totalPages?: number;
}
