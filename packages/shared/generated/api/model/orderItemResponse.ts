/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * CLUS API
 * CLUS Backend API Spec
 * OpenAPI spec version: v1.0.0
 */
import type { ClinicItem } from "./clinicItem";
import type { WorkbookItem } from "./workbookItem";

export interface OrderItemResponse {
  clinicItems: ClinicItem[];
  workbookItems: WorkbookItem[];
}
