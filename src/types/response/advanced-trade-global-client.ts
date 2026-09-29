/**
 * public/auth result.
 * https://docs.cdp.coinbase.com/coinbase-app/advanced-trade-apis/guides/derivatives/technical
 */
export interface AdvTradeGlobalAuthResult {
  /** Access token sent as Authorization: Bearer on private methods. */
  access_token: string;
  /** Token lifetime in seconds. */
  expires_in: number;
  /** Can be used to request a new token. */
  refresh_token?: string;
  /** Space-separated list of granted scopes. */
  scope: string;
  /** Authorization type, bearer. */
  token_type: 'bearer' | string;
  /** Enabled on-key features. */
  enabled_features?: string[];
  google_login?: boolean;
  mandatory_tfa_status?: string;
  sid?: string;
  state?: string;
}
