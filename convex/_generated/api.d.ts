/* prettier-ignore-start */

/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as api_email_addresses_create_email_address from "../api/email_addresses/create_email_address.js";
import type * as api_email_addresses_get_email_address from "../api/email_addresses/get_email_address.js";
import type * as api_email_addresses_index from "../api/email_addresses/index.js";
import type * as helper_index from "../helper/index.js";
import type * as helper_zod from "../helper/zod.js";
import type * as tables_email_addresses_table from "../tables/email_addresses_table.js";
import type * as tables_index from "../tables/index.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "api/email_addresses/create_email_address": typeof api_email_addresses_create_email_address;
  "api/email_addresses/get_email_address": typeof api_email_addresses_get_email_address;
  "api/email_addresses/index": typeof api_email_addresses_index;
  "helper/index": typeof helper_index;
  "helper/zod": typeof helper_zod;
  "tables/email_addresses_table": typeof tables_email_addresses_table;
  "tables/index": typeof tables_index;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

/* prettier-ignore-end */
