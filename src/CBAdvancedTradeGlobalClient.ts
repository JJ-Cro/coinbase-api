import { AxiosRequestConfig } from 'axios';

import { BaseRestClient } from './lib/BaseRestClient.js';
import {
  REST_CLIENT_TYPE_ENUM,
  RestClientOptions,
  RestClientType,
} from './lib/requestUtils.js';
import {
  AdvTradeGlobalAuthRequest,
  AdvTradeGlobalCancelAllByCurrencyPairRequest,
  AdvTradeGlobalCancelAllByCurrencyRequest,
  AdvTradeGlobalCancelAllByInstrumentRequest,
  AdvTradeGlobalCancelAllByKindOrTypeRequest,
  AdvTradeGlobalCancelAllRequest,
  AdvTradeGlobalCancelByLabelRequest,
  AdvTradeGlobalCancelRequest,
  AdvTradeGlobalChangeMarginModelRequest,
  AdvTradeGlobalClosePositionRequest,
  AdvTradeGlobalCreateComboRequest,
  AdvTradeGlobalDisableCancelOnDisconnectRequest,
  AdvTradeGlobalEditByLabelRequest,
  AdvTradeGlobalEditRequest,
  AdvTradeGlobalEnableCancelOnDisconnectRequest,
  AdvTradeGlobalGetAccessLogRequest,
  AdvTradeGlobalGetAccountSummariesRequest,
  AdvTradeGlobalGetAccountSummaryRequest,
  AdvTradeGlobalGetAnnouncementsRequest,
  AdvTradeGlobalGetBookSummaryByCurrencyRequest,
  AdvTradeGlobalGetBookSummaryByInstrumentRequest,
  AdvTradeGlobalGetCancelOnDisconnectRequest,
  AdvTradeGlobalGetComboDetailsRequest,
  AdvTradeGlobalGetComboIdsRequest,
  AdvTradeGlobalGetCombosRequest,
  AdvTradeGlobalGetContractSizeRequest,
  AdvTradeGlobalGetDeliveryPricesRequest,
  AdvTradeGlobalGetExpirationsRequest,
  AdvTradeGlobalGetFundingChartDataRequest,
  AdvTradeGlobalGetFundingRateHistoryRequest,
  AdvTradeGlobalGetFundingRateValueRequest,
  AdvTradeGlobalGetHistoricalVolatilityRequest,
  AdvTradeGlobalGetIndexChartDataRequest,
  AdvTradeGlobalGetIndexPriceNamesRequest,
  AdvTradeGlobalGetIndexPriceRequest,
  AdvTradeGlobalGetInstrumentRequest,
  AdvTradeGlobalGetInstrumentsRequest,
  AdvTradeGlobalGetLastSettlementsByCurrencyRequest,
  AdvTradeGlobalGetLastSettlementsByInstrumentRequest,
  AdvTradeGlobalGetLastTradesByCurrencyAndTimeRequest,
  AdvTradeGlobalGetLastTradesByCurrencyRequest,
  AdvTradeGlobalGetLastTradesByInstrumentAndTimeRequest,
  AdvTradeGlobalGetLastTradesByInstrumentRequest,
  AdvTradeGlobalGetLegPricesRequest,
  AdvTradeGlobalGetMarginsRequest,
  AdvTradeGlobalGetMarkPriceHistoryRequest,
  AdvTradeGlobalGetOpenOrdersByCurrencyRequest,
  AdvTradeGlobalGetOpenOrdersByInstrumentRequest,
  AdvTradeGlobalGetOpenOrdersByLabelRequest,
  AdvTradeGlobalGetOpenOrdersRequest,
  AdvTradeGlobalGetOrderBookByInstrumentIdRequest,
  AdvTradeGlobalGetOrderBookRequest,
  AdvTradeGlobalGetOrderHistoryByCurrencyRequest,
  AdvTradeGlobalGetOrderHistoryByInstrumentRequest,
  AdvTradeGlobalGetOrderMarginByIdsRequest,
  AdvTradeGlobalGetOrderStateByLabelRequest,
  AdvTradeGlobalGetOrderStateRequest,
  AdvTradeGlobalGetPositionRequest,
  AdvTradeGlobalGetPositionsRequest,
  AdvTradeGlobalGetSettlementHistoryByCurrencyRequest,
  AdvTradeGlobalGetSettlementHistoryByInstrumentRequest,
  AdvTradeGlobalGetSupportedIndexNamesRequest,
  AdvTradeGlobalGetTickerRequest,
  AdvTradeGlobalGetTradeVolumesRequest,
  AdvTradeGlobalGetTradingviewChartDataRequest,
  AdvTradeGlobalGetTransactionLogRequest,
  AdvTradeGlobalGetTriggerOrderHistoryRequest,
  AdvTradeGlobalGetUserTradesByCurrencyAndTimeRequest,
  AdvTradeGlobalGetUserTradesByCurrencyRequest,
  AdvTradeGlobalGetUserTradesByInstrumentAndTimeRequest,
  AdvTradeGlobalGetUserTradesByInstrumentRequest,
  AdvTradeGlobalGetUserTradesByOrderRequest,
  AdvTradeGlobalGetVolatilityIndexDataRequest,
  AdvTradeGlobalPlaceOrderRequest,
  AdvTradeGlobalSimulatePmeRequest,
  AdvTradeGlobalSimulatePortfolioRequest,
  AdvTradeGlobalTestRequest,
} from './types/request/advanced-trade-global-client.js';

/**
 * REST client for Coinbase's Global Derivatives Advanced Trade API:
 * https://docs.cdp.coinbase.com/coinbase-app/advanced-trade-apis/guides/derivatives/overview
 *
 * Deribit-powered gateway running on the Starbase platform.
 * JSON-RPC 2.0 at https://drb.coinbase.com/api/v2
 */
export class CBAdvancedTradeGlobalClient extends BaseRestClient {
  constructor(
    restClientOptions: RestClientOptions = {},
    requestOptions: AxiosRequestConfig = {},
  ) {
    super(restClientOptions, requestOptions);
    return this;
  }

  getClientType(): RestClientType {
    return REST_CLIENT_TYPE_ENUM.advancedTradeGlobal;
  }

  private rpcId = 0;

  /**
   * JSON-RPC POST to /api/v2. Public methods use post, private methods use postPrivate.
   * Returns the result field. Throws the JSON-RPC error object on error.
   */
  private call(method: string, params?: object): Promise<any> {
    const body: {
      jsonrpc: '2.0';
      id: number;
      method: string;
      params?: object;
    } = {
      jsonrpc: '2.0',
      id: ++this.rpcId,
      method,
    };

    if (params) {
      const cleaned: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(params)) {
        if (typeof value !== 'undefined') {
          cleaned[key] = value;
        }
      }
      if (Object.keys(cleaned).length > 0) {
        body.params = cleaned;
      }
    }

    const pending = method.startsWith('public/')
      ? this.post('/api/v2', { body })
      : this.postPrivate('/api/v2', { body });

    return pending.then((response: any) => {
      if (response?.error) {
        throw response.error;
      }
      return response?.result;
    });
  }

  /**
   *
   * Public
   *
   */

  /**
   * Auth
   *
   * Exchange a CDP JWT for an access token.
   *
   * JSON-RPC: public/auth
   */
  auth(params?: AdvTradeGlobalAuthRequest): Promise<any> {
    return this.call('public/auth', params);
  }

  /**
   * Get Announcements
   *
   * Platform notices.
   *
   * JSON-RPC: public/get_announcements
   */
  getAnnouncements(
    params?: AdvTradeGlobalGetAnnouncementsRequest,
  ): Promise<any> {
    return this.call('public/get_announcements', params);
  }

  /**
   * Get Block RFQ Trades
   *
   * Public Block RFQ trades.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: public/get_block_rfq_trades
   */
  getBlockRfqTrades(params?: any): Promise<any> {
    return this.call('public/get_block_rfq_trades', params);
  }

  /**
   * Get Book Summary By Currency
   *
   * Book summary for a currency.
   *
   * JSON-RPC: public/get_book_summary_by_currency
   */
  getBookSummaryByCurrency(
    params: AdvTradeGlobalGetBookSummaryByCurrencyRequest,
  ): Promise<any> {
    return this.call('public/get_book_summary_by_currency', params);
  }

  /**
   * Get Book Summary By Instrument
   *
   * Book summary for one instrument.
   *
   * JSON-RPC: public/get_book_summary_by_instrument
   */
  getBookSummaryByInstrument(
    params: AdvTradeGlobalGetBookSummaryByInstrumentRequest,
  ): Promise<any> {
    return this.call('public/get_book_summary_by_instrument', params);
  }

  /**
   * Get Combo Details
   *
   * One combo's structure and state.
   *
   * JSON-RPC: public/get_combo_details
   */
  getComboDetails(params: AdvTradeGlobalGetComboDetailsRequest): Promise<any> {
    return this.call('public/get_combo_details', params);
  }

  /**
   * Get Combo Ids
   *
   * Available combo IDs.
   *
   * JSON-RPC: public/get_combo_ids
   */
  getComboIds(params: AdvTradeGlobalGetComboIdsRequest): Promise<any> {
    return this.call('public/get_combo_ids', params);
  }

  /**
   * Get Combos
   *
   * Active combos for a currency.
   *
   * JSON-RPC: public/get_combos
   */
  getCombos(params: AdvTradeGlobalGetCombosRequest): Promise<any> {
    return this.call('public/get_combos', params);
  }

  /**
   * Get Contract Size
   *
   * Contract size for an instrument.
   *
   * JSON-RPC: public/get_contract_size
   */
  getContractSize(params: AdvTradeGlobalGetContractSizeRequest): Promise<any> {
    return this.call('public/get_contract_size', params);
  }

  /**
   * Get Currencies
   *
   * Supported currencies.
   *
   * JSON-RPC: public/get_currencies
   */
  getCurrencies(): Promise<any> {
    return this.call('public/get_currencies');
  }

  /**
   * Get Delivery Prices
   *
   * Historical delivery prices for an index.
   *
   * JSON-RPC: public/get_delivery_prices
   */
  getDeliveryPrices(
    params: AdvTradeGlobalGetDeliveryPricesRequest,
  ): Promise<any> {
    return this.call('public/get_delivery_prices', params);
  }

  /**
   * Get Expirations
   *
   * Expiration timestamps.
   *
   * JSON-RPC: public/get_expirations
   */
  getExpirations(params: AdvTradeGlobalGetExpirationsRequest): Promise<any> {
    return this.call('public/get_expirations', params);
  }

  /**
   * Get Funding Chart Data
   *
   * Funding-rate chart for a perpetual.
   *
   * JSON-RPC: public/get_funding_chart_data
   */
  getFundingChartData(
    params: AdvTradeGlobalGetFundingChartDataRequest,
  ): Promise<any> {
    return this.call('public/get_funding_chart_data', params);
  }

  /**
   * Get Funding Rate History
   *
   * Hourly funding-rate history.
   *
   * JSON-RPC: public/get_funding_rate_history
   */
  getFundingRateHistory(
    params: AdvTradeGlobalGetFundingRateHistoryRequest,
  ): Promise<any> {
    return this.call('public/get_funding_rate_history', params);
  }

  /**
   * Get Funding Rate Value
   *
   * Funding rate over a period.
   *
   * JSON-RPC: public/get_funding_rate_value
   */
  getFundingRateValue(
    params: AdvTradeGlobalGetFundingRateValueRequest,
  ): Promise<any> {
    return this.call('public/get_funding_rate_value', params);
  }

  /**
   * Get Historical Volatility
   *
   * Historical volatility.
   *
   * JSON-RPC: public/get_historical_volatility
   */
  getHistoricalVolatility(
    params: AdvTradeGlobalGetHistoricalVolatilityRequest,
  ): Promise<any> {
    return this.call('public/get_historical_volatility', params);
  }

  /**
   * Get Index Chart Data
   *
   * Index price chart.
   *
   * JSON-RPC: public/get_index_chart_data
   */
  getIndexChartData(
    params: AdvTradeGlobalGetIndexChartDataRequest,
  ): Promise<any> {
    return this.call('public/get_index_chart_data', params);
  }

  /**
   * Get Index Price
   *
   * Current index price.
   *
   * JSON-RPC: public/get_index_price
   */
  getIndexPrice(params: AdvTradeGlobalGetIndexPriceRequest): Promise<any> {
    return this.call('public/get_index_price', params);
  }

  /**
   * Get Index Price Names
   *
   * Index names.
   *
   * JSON-RPC: public/get_index_price_names
   */
  getIndexPriceNames(
    params?: AdvTradeGlobalGetIndexPriceNamesRequest,
  ): Promise<any> {
    return this.call('public/get_index_price_names', params);
  }

  /**
   * Get Instrument
   *
   * One instrument.
   *
   * JSON-RPC: public/get_instrument
   */
  getInstrument(params: AdvTradeGlobalGetInstrumentRequest): Promise<any> {
    return this.call('public/get_instrument', params);
  }

  /**
   * Get Instruments
   *
   * Tradable instruments.
   *
   * Replaces GET /products
   *
   * JSON-RPC: public/get_instruments
   */
  getInstruments(params: AdvTradeGlobalGetInstrumentsRequest): Promise<any> {
    return this.call('public/get_instruments', params);
  }

  /**
   * Get Last Settlements By Currency
   *
   * Settlements for a currency.
   *
   * JSON-RPC: public/get_last_settlements_by_currency
   */
  getLastSettlementsByCurrency(
    params: AdvTradeGlobalGetLastSettlementsByCurrencyRequest,
  ): Promise<any> {
    return this.call('public/get_last_settlements_by_currency', params);
  }

  /**
   * Get Last Settlements By Instrument
   *
   * Settlements for one instrument.
   *
   * JSON-RPC: public/get_last_settlements_by_instrument
   */
  getLastSettlementsByInstrument(
    params: AdvTradeGlobalGetLastSettlementsByInstrumentRequest,
  ): Promise<any> {
    return this.call('public/get_last_settlements_by_instrument', params);
  }

  /**
   * Get Last Trades By Currency
   *
   * Public trades for a currency.
   *
   * JSON-RPC: public/get_last_trades_by_currency
   */
  getLastTradesByCurrency(
    params: AdvTradeGlobalGetLastTradesByCurrencyRequest,
  ): Promise<any> {
    return this.call('public/get_last_trades_by_currency', params);
  }

  /**
   * Get Last Trades By Currency And Time
   *
   * Public trades for a currency, time range.
   *
   * JSON-RPC: public/get_last_trades_by_currency_and_time
   */
  getLastTradesByCurrencyAndTime(
    params: AdvTradeGlobalGetLastTradesByCurrencyAndTimeRequest,
  ): Promise<any> {
    return this.call('public/get_last_trades_by_currency_and_time', params);
  }

  /**
   * Get Last Trades By Instrument
   *
   * Public trades for one instrument.
   *
   * JSON-RPC: public/get_last_trades_by_instrument
   */
  getLastTradesByInstrument(
    params: AdvTradeGlobalGetLastTradesByInstrumentRequest,
  ): Promise<any> {
    return this.call('public/get_last_trades_by_instrument', params);
  }

  /**
   * Get Last Trades By Instrument And Time
   *
   * Public trades for one instrument, time range.
   *
   * JSON-RPC: public/get_last_trades_by_instrument_and_time
   */
  getLastTradesByInstrumentAndTime(
    params: AdvTradeGlobalGetLastTradesByInstrumentAndTimeRequest,
  ): Promise<any> {
    return this.call('public/get_last_trades_by_instrument_and_time', params);
  }

  /**
   * Get Mark Price History
   *
   * 5-minute mark-price history.
   *
   * JSON-RPC: public/get_mark_price_history
   */
  getMarkPriceHistory(
    params: AdvTradeGlobalGetMarkPriceHistoryRequest,
  ): Promise<any> {
    return this.call('public/get_mark_price_history', params);
  }

  /**
   * Get Order Book
   *
   * Order book.
   *
   * Replaces GET /product_book
   *
   * JSON-RPC: public/get_order_book
   */
  getOrderBook(params: AdvTradeGlobalGetOrderBookRequest): Promise<any> {
    return this.call('public/get_order_book', params);
  }

  /**
   * Get Order Book By Instrument Id
   *
   * Order book by instrument ID.
   *
   * JSON-RPC: public/get_order_book_by_instrument_id
   */
  getOrderBookByInstrumentId(
    params: AdvTradeGlobalGetOrderBookByInstrumentIdRequest,
  ): Promise<any> {
    return this.call('public/get_order_book_by_instrument_id', params);
  }

  /**
   * Get Supported Index Names
   *
   * Supported index names.
   *
   * JSON-RPC: public/get_supported_index_names
   */
  getSupportedIndexNames(
    params?: AdvTradeGlobalGetSupportedIndexNamesRequest,
  ): Promise<any> {
    return this.call('public/get_supported_index_names', params);
  }

  /**
   * Get Time
   *
   * Server time.
   *
   * JSON-RPC: public/get_time
   */
  getTime(): Promise<any> {
    return this.call('public/get_time');
  }

  /**
   * Get Trade Volumes
   *
   * 24h trade volumes.
   *
   * JSON-RPC: public/get_trade_volumes
   */
  getTradeVolumes(params?: AdvTradeGlobalGetTradeVolumesRequest): Promise<any> {
    return this.call('public/get_trade_volumes', params);
  }

  /**
   * Get Tradingview Chart Data
   *
   * Candle data.
   *
   * Replaces GET /products/{product_id}/candles
   *
   * JSON-RPC: public/get_tradingview_chart_data
   */
  getTradingviewChartData(
    params: AdvTradeGlobalGetTradingviewChartDataRequest,
  ): Promise<any> {
    return this.call('public/get_tradingview_chart_data', params);
  }

  /**
   * Get Volatility Index Data
   *
   * Volatility-index candles.
   *
   * JSON-RPC: public/get_volatility_index_data
   */
  getVolatilityIndexData(
    params: AdvTradeGlobalGetVolatilityIndexDataRequest,
  ): Promise<any> {
    return this.call('public/get_volatility_index_data', params);
  }

  /**
   * Get Status
   *
   * Locked currencies.
   *
   * JSON-RPC: public/status
   */
  getStatus(): Promise<any> {
    return this.call('public/status');
  }

  /**
   * Test
   *
   * Connection test and server version.
   *
   * JSON-RPC: public/test
   */
  test(params?: AdvTradeGlobalTestRequest): Promise<any> {
    return this.call('public/test', params);
  }

  /**
   * Get Ticker
   *
   * 24h ticker.
   *
   * Replaces GET /best_bid_ask
   *
   * JSON-RPC: public/ticker
   */
  getTicker(params: AdvTradeGlobalGetTickerRequest): Promise<any> {
    return this.call('public/ticker', params);
  }

  /**
   *
   * Private
   *
   */

  /**
   * Buy
   *
   * Place a buy order.
   *
   * Replaces POST /orders. Side is the method.
   *
   * JSON-RPC: private/buy
   */
  buy(params: AdvTradeGlobalPlaceOrderRequest): Promise<any> {
    return this.call('private/buy', params);
  }

  /**
   * Sell
   *
   * Place a sell order.
   *
   * Replaces POST /orders. Side is the method.
   *
   * JSON-RPC: private/sell
   */
  sell(params: AdvTradeGlobalPlaceOrderRequest): Promise<any> {
    return this.call('private/sell', params);
  }

  /**
   * Edit
   *
   * Edit an order.
   *
   * Replaces POST /orders/edit
   *
   * JSON-RPC: private/edit
   */
  edit(params: AdvTradeGlobalEditRequest): Promise<any> {
    return this.call('private/edit', params);
  }

  /**
   * Edit By Label
   *
   * Edit an order by label.
   *
   * Replaces POST /orders/edit
   *
   * JSON-RPC: private/edit_by_label
   */
  editByLabel(params: AdvTradeGlobalEditByLabelRequest): Promise<any> {
    return this.call('private/edit_by_label', params);
  }

  /**
   * Cancel
   *
   * Cancel one order.
   *
   * Replaces POST /orders/batch_cancel
   *
   * JSON-RPC: private/cancel
   */
  cancel(params: AdvTradeGlobalCancelRequest): Promise<any> {
    return this.call('private/cancel', params);
  }

  /**
   * Cancel By Label
   *
   * Cancel orders by label.
   *
   * Replaces POST /orders/batch_cancel
   *
   * JSON-RPC: private/cancel_by_label
   */
  cancelByLabel(params: AdvTradeGlobalCancelByLabelRequest): Promise<any> {
    return this.call('private/cancel_by_label', params);
  }

  /**
   * Cancel All
   *
   * Cancel all open orders.
   *
   * Replaces POST /orders/batch_cancel
   *
   * JSON-RPC: private/cancel_all
   */
  cancelAll(params?: AdvTradeGlobalCancelAllRequest): Promise<any> {
    return this.call('private/cancel_all', params);
  }

  /**
   * Cancel All By Currency
   *
   * Cancel open orders for a currency.
   *
   * Replaces POST /orders/batch_cancel
   *
   * JSON-RPC: private/cancel_all_by_currency
   */
  cancelAllByCurrency(
    params: AdvTradeGlobalCancelAllByCurrencyRequest,
  ): Promise<any> {
    return this.call('private/cancel_all_by_currency', params);
  }

  /**
   * Cancel All By Currency Pair
   *
   * Cancel open orders for a currency pair.
   *
   * Replaces POST /orders/batch_cancel
   *
   * JSON-RPC: private/cancel_all_by_currency_pair
   */
  cancelAllByCurrencyPair(
    params: AdvTradeGlobalCancelAllByCurrencyPairRequest,
  ): Promise<any> {
    return this.call('private/cancel_all_by_currency_pair', params);
  }

  /**
   * Cancel All By Instrument
   *
   * Cancel open orders for an instrument.
   *
   * Replaces POST /orders/batch_cancel
   *
   * JSON-RPC: private/cancel_all_by_instrument
   */
  cancelAllByInstrument(
    params: AdvTradeGlobalCancelAllByInstrumentRequest,
  ): Promise<any> {
    return this.call('private/cancel_all_by_instrument', params);
  }

  /**
   * Cancel All By Kind Or Type
   *
   * Cancel open orders by kind or type.
   *
   * Replaces POST /orders/batch_cancel
   *
   * JSON-RPC: private/cancel_all_by_kind_or_type
   */
  cancelAllByKindOrType(
    params: AdvTradeGlobalCancelAllByKindOrTypeRequest,
  ): Promise<any> {
    return this.call('private/cancel_all_by_kind_or_type', params);
  }

  /**
   * Close Position
   *
   * Close a position.
   *
   * Replaces POST /orders/close_position
   *
   * JSON-RPC: private/close_position
   */
  closePosition(params: AdvTradeGlobalClosePositionRequest): Promise<any> {
    return this.call('private/close_position', params);
  }

  /**
   * Get Open Orders
   *
   * All open orders.
   *
   * JSON-RPC: private/get_open_orders
   */
  getOpenOrders(params?: AdvTradeGlobalGetOpenOrdersRequest): Promise<any> {
    return this.call('private/get_open_orders', params);
  }

  /**
   * Get Open Orders By Currency
   *
   * Open orders for a currency.
   *
   * JSON-RPC: private/get_open_orders_by_currency
   */
  getOpenOrdersByCurrency(
    params: AdvTradeGlobalGetOpenOrdersByCurrencyRequest,
  ): Promise<any> {
    return this.call('private/get_open_orders_by_currency', params);
  }

  /**
   * Get Open Orders By Instrument
   *
   * Open orders for an instrument.
   *
   * JSON-RPC: private/get_open_orders_by_instrument
   */
  getOpenOrdersByInstrument(
    params: AdvTradeGlobalGetOpenOrdersByInstrumentRequest,
  ): Promise<any> {
    return this.call('private/get_open_orders_by_instrument', params);
  }

  /**
   * Get Open Orders By Label
   *
   * Open orders by label.
   *
   * JSON-RPC: private/get_open_orders_by_label
   */
  getOpenOrdersByLabel(
    params: AdvTradeGlobalGetOpenOrdersByLabelRequest,
  ): Promise<any> {
    return this.call('private/get_open_orders_by_label', params);
  }

  /**
   * Get Order State
   *
   * One order.
   *
   * Replaces GET /orders/historical/{order_id}
   *
   * JSON-RPC: private/get_order_state
   */
  getOrderState(params: AdvTradeGlobalGetOrderStateRequest): Promise<any> {
    return this.call('private/get_order_state', params);
  }

  /**
   * Get Order State By Label
   *
   * Recent orders by label.
   *
   * JSON-RPC: private/get_order_state_by_label
   */
  getOrderStateByLabel(
    params: AdvTradeGlobalGetOrderStateByLabelRequest,
  ): Promise<any> {
    return this.call('private/get_order_state_by_label', params);
  }

  /**
   * Get Order History By Currency
   *
   * Order history for a currency.
   *
   * Replaces GET /orders/historical/batch
   *
   * JSON-RPC: private/get_order_history_by_currency
   */
  getOrderHistoryByCurrency(
    params: AdvTradeGlobalGetOrderHistoryByCurrencyRequest,
  ): Promise<any> {
    return this.call('private/get_order_history_by_currency', params);
  }

  /**
   * Get Order History By Instrument
   *
   * Order history for an instrument.
   *
   * Replaces GET /orders/historical/batch
   *
   * JSON-RPC: private/get_order_history_by_instrument
   */
  getOrderHistoryByInstrument(
    params: AdvTradeGlobalGetOrderHistoryByInstrumentRequest,
  ): Promise<any> {
    return this.call('private/get_order_history_by_instrument', params);
  }

  /**
   * Get Order Margin By Ids
   *
   * Initial margin for orders.
   *
   * JSON-RPC: private/get_order_margin_by_ids
   */
  getOrderMarginByIds(
    params: AdvTradeGlobalGetOrderMarginByIdsRequest,
  ): Promise<any> {
    return this.call('private/get_order_margin_by_ids', params);
  }

  /**
   * Get Trigger Order History
   *
   * Trigger-order history.
   *
   * JSON-RPC: private/get_trigger_order_history
   */
  getTriggerOrderHistory(
    params: AdvTradeGlobalGetTriggerOrderHistoryRequest,
  ): Promise<any> {
    return this.call('private/get_trigger_order_history', params);
  }

  /**
   * Get User Trades By Currency
   *
   * Fills for a currency.
   *
   * Replaces GET /orders/historical/fills
   *
   * JSON-RPC: private/get_user_trades_by_currency
   */
  getUserTradesByCurrency(
    params: AdvTradeGlobalGetUserTradesByCurrencyRequest,
  ): Promise<any> {
    return this.call('private/get_user_trades_by_currency', params);
  }

  /**
   * Get User Trades By Currency And Time
   *
   * Fills for a currency, time range.
   *
   * Replaces GET /orders/historical/fills
   *
   * JSON-RPC: private/get_user_trades_by_currency_and_time
   */
  getUserTradesByCurrencyAndTime(
    params: AdvTradeGlobalGetUserTradesByCurrencyAndTimeRequest,
  ): Promise<any> {
    return this.call('private/get_user_trades_by_currency_and_time', params);
  }

  /**
   * Get User Trades By Instrument
   *
   * Fills for an instrument.
   *
   * Replaces GET /orders/historical/fills
   *
   * JSON-RPC: private/get_user_trades_by_instrument
   */
  getUserTradesByInstrument(
    params: AdvTradeGlobalGetUserTradesByInstrumentRequest,
  ): Promise<any> {
    return this.call('private/get_user_trades_by_instrument', params);
  }

  /**
   * Get User Trades By Instrument And Time
   *
   * Fills for an instrument, time range.
   *
   * Replaces GET /orders/historical/fills
   *
   * JSON-RPC: private/get_user_trades_by_instrument_and_time
   */
  getUserTradesByInstrumentAndTime(
    params: AdvTradeGlobalGetUserTradesByInstrumentAndTimeRequest,
  ): Promise<any> {
    return this.call('private/get_user_trades_by_instrument_and_time', params);
  }

  /**
   * Get User Trades By Order
   *
   * Fills for one order.
   *
   * Replaces GET /orders/historical/fills
   *
   * JSON-RPC: private/get_user_trades_by_order
   */
  getUserTradesByOrder(
    params: AdvTradeGlobalGetUserTradesByOrderRequest,
  ): Promise<any> {
    return this.call('private/get_user_trades_by_order', params);
  }

  /**
   * Get Margins
   *
   * Margin for a hypothetical order.
   *
   * JSON-RPC: private/get_margins
   */
  getMargins(params: AdvTradeGlobalGetMarginsRequest): Promise<any> {
    return this.call('private/get_margins', params);
  }

  /**
   * Get Account Summaries
   *
   * Account summaries by currency.
   *
   * JSON-RPC: private/get_account_summaries
   */
  getAccountSummaries(
    params?: AdvTradeGlobalGetAccountSummariesRequest,
  ): Promise<any> {
    return this.call('private/get_account_summaries', params);
  }

  /**
   * Get Account Summary
   *
   * Account summary for one currency.
   *
   * Replaces GET /intx/portfolio/{portfolio_uuid}
   *
   * JSON-RPC: private/get_account_summary
   */
  getAccountSummary(
    params: AdvTradeGlobalGetAccountSummaryRequest,
  ): Promise<any> {
    return this.call('private/get_account_summary', params);
  }

  /**
   * Get Position
   *
   * Position for one instrument.
   *
   * Replaces GET /intx/positions/{portfolio_uuid}/{symbol}
   *
   * JSON-RPC: private/get_position
   */
  getPosition(params: AdvTradeGlobalGetPositionRequest): Promise<any> {
    return this.call('private/get_position', params);
  }

  /**
   * Get Positions
   *
   * All open positions.
   *
   * Replaces GET /intx/positions/{portfolio_uuid}
   *
   * JSON-RPC: private/get_positions
   */
  getPositions(params?: AdvTradeGlobalGetPositionsRequest): Promise<any> {
    return this.call('private/get_positions', params);
  }

  /**
   * Change Margin Model
   *
   * Change the margin model.
   *
   * Replaces POST /intx/multi_asset_collateral
   *
   * JSON-RPC: private/change_margin_model
   */
  changeMarginModel(
    params: AdvTradeGlobalChangeMarginModelRequest,
  ): Promise<any> {
    return this.call('private/change_margin_model', params);
  }

  /**
   * Get Access Log
   *
   * API access log.
   *
   * JSON-RPC: private/get_access_log
   */
  getAccessLog(params?: AdvTradeGlobalGetAccessLogRequest): Promise<any> {
    return this.call('private/get_access_log', params);
  }

  /**
   * Get Transaction Log
   *
   * Transaction log.
   *
   * JSON-RPC: private/get_transaction_log
   */
  getTransactionLog(
    params: AdvTradeGlobalGetTransactionLogRequest,
  ): Promise<any> {
    return this.call('private/get_transaction_log', params);
  }

  /**
   * Get Settlement History By Currency
   *
   * Settlements for a currency.
   *
   * JSON-RPC: private/get_settlement_history_by_currency
   */
  getSettlementHistoryByCurrency(
    params: AdvTradeGlobalGetSettlementHistoryByCurrencyRequest,
  ): Promise<any> {
    return this.call('private/get_settlement_history_by_currency', params);
  }

  /**
   * Get Settlement History By Instrument
   *
   * Settlements for an instrument.
   *
   * JSON-RPC: private/get_settlement_history_by_instrument
   */
  getSettlementHistoryByInstrument(
    params: AdvTradeGlobalGetSettlementHistoryByInstrumentRequest,
  ): Promise<any> {
    return this.call('private/get_settlement_history_by_instrument', params);
  }

  /**
   * Simulate Portfolio
   *
   * Simulated portfolio margin.
   *
   * JSON-RPC: private/simulate_portfolio
   */
  simulatePortfolio(
    params: AdvTradeGlobalSimulatePortfolioRequest,
  ): Promise<any> {
    return this.call('private/simulate_portfolio', params);
  }

  /**
   * Simulate PME
   *
   * Portfolio-margin risk matrix.
   *
   * JSON-RPC: private/pme/simulate
   */
  simulatePme(params: AdvTradeGlobalSimulatePmeRequest): Promise<any> {
    return this.call('private/pme/simulate', params);
  }

  /**
   * Enable Cancel On Disconnect
   *
   * Enable cancel-on-disconnect.
   *
   * JSON-RPC: private/enable_cancel_on_disconnect
   */
  enableCancelOnDisconnect(
    params?: AdvTradeGlobalEnableCancelOnDisconnectRequest,
  ): Promise<any> {
    return this.call('private/enable_cancel_on_disconnect', params);
  }

  /**
   * Disable Cancel On Disconnect
   *
   * Disable cancel-on-disconnect.
   *
   * JSON-RPC: private/disable_cancel_on_disconnect
   */
  disableCancelOnDisconnect(
    params?: AdvTradeGlobalDisableCancelOnDisconnectRequest,
  ): Promise<any> {
    return this.call('private/disable_cancel_on_disconnect', params);
  }

  /**
   * Get Cancel On Disconnect
   *
   * Cancel-on-disconnect setting.
   *
   * JSON-RPC: private/get_cancel_on_disconnect
   */
  getCancelOnDisconnect(
    params?: AdvTradeGlobalGetCancelOnDisconnectRequest,
  ): Promise<any> {
    return this.call('private/get_cancel_on_disconnect', params);
  }

  /**
   * Create Combo
   *
   * Create a combo.
   *
   * JSON-RPC: private/create_combo
   */
  createCombo(params: AdvTradeGlobalCreateComboRequest): Promise<any> {
    return this.call('private/create_combo', params);
  }

  /**
   * Get Leg Prices
   *
   * Prices for each instrument in a combo.
   *
   * JSON-RPC: private/get_leg_prices
   */
  getLegPrices(params: AdvTradeGlobalGetLegPricesRequest): Promise<any> {
    return this.call('private/get_leg_prices', params);
  }

  /**
   * Create Block RFQ
   *
   * Create a Block RFQ.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/create_block_rfq
   */
  createBlockRfq(params?: any): Promise<any> {
    return this.call('private/create_block_rfq', params);
  }

  /**
   * Cancel Block RFQ
   *
   * Cancel a Block RFQ.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/cancel_block_rfq
   */
  cancelBlockRfq(params?: any): Promise<any> {
    return this.call('private/cancel_block_rfq', params);
  }

  /**
   * Accept Block RFQ
   *
   * Accept a Block RFQ quote.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/accept_block_rfq
   */
  acceptBlockRfq(params?: any): Promise<any> {
    return this.call('private/accept_block_rfq', params);
  }

  /**
   * Cancel Block RFQ Trigger
   *
   * Cancel a Block RFQ trigger.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/cancel_block_rfq_trigger
   */
  cancelBlockRfqTrigger(params?: any): Promise<any> {
    return this.call('private/cancel_block_rfq_trigger', params);
  }

  /**
   * Get Block RFQs
   *
   * Block RFQs for the user.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/get_block_rfqs
   */
  getBlockRfqs(params?: any): Promise<any> {
    return this.call('private/get_block_rfqs', params);
  }

  /**
   * Add Block RFQ Quote
   *
   * Quote a Block RFQ.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/add_block_rfq_quote
   */
  addBlockRfqQuote(params?: any): Promise<any> {
    return this.call('private/add_block_rfq_quote', params);
  }

  /**
   * Edit Block RFQ Quote
   *
   * Edit a Block RFQ quote.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/edit_block_rfq_quote
   */
  editBlockRfqQuote(params?: any): Promise<any> {
    return this.call('private/edit_block_rfq_quote', params);
  }

  /**
   * Cancel Block RFQ Quote
   *
   * Cancel a Block RFQ quote.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/cancel_block_rfq_quote
   */
  cancelBlockRfqQuote(params?: any): Promise<any> {
    return this.call('private/cancel_block_rfq_quote', params);
  }

  /**
   * Cancel All Block RFQ Quotes
   *
   * Cancel all Block RFQ quotes.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/cancel_all_block_rfq_quotes
   */
  cancelAllBlockRfqQuotes(params?: any): Promise<any> {
    return this.call('private/cancel_all_block_rfq_quotes', params);
  }

  /**
   * Get Block RFQ Quotes
   *
   * Open Block RFQ quotes.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/get_block_rfq_quotes
   */
  getBlockRfqQuotes(params?: any): Promise<any> {
    return this.call('private/get_block_rfq_quotes', params);
  }

  /**
   * Get Block RFQ Makers
   *
   * Available Block RFQ makers.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/get_block_rfq_makers
   */
  getBlockRfqMakers(params?: any): Promise<any> {
    return this.call('private/get_block_rfq_makers', params);
  }

  /**
   * Get Block RFQ User Info
   *
   * Block RFQ identity and rating.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/get_block_rfq_user_info
   */
  getBlockRfqUserInfo(params?: any): Promise<any> {
    return this.call('private/get_block_rfq_user_info', params);
  }

  /**
   * Execute Block Trade
   *
   * Execute a block trade.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/execute_block_trade
   */
  executeBlockTrade(params?: any): Promise<any> {
    return this.call('private/execute_block_trade', params);
  }

  /**
   * Verify Block Trade
   *
   * Verify a block trade.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/verify_block_trade
   */
  verifyBlockTrade(params?: any): Promise<any> {
    return this.call('private/verify_block_trade', params);
  }

  /**
   * Approve Block Trade
   *
   * Approve a pending block trade.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/approve_block_trade
   */
  approveBlockTrade(params?: any): Promise<any> {
    return this.call('private/approve_block_trade', params);
  }

  /**
   * Reject Block Trade
   *
   * Reject a pending block trade.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/reject_block_trade
   */
  rejectBlockTrade(params?: any): Promise<any> {
    return this.call('private/reject_block_trade', params);
  }

  /**
   * Simulate Block Trade
   *
   * Simulate a block trade.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/simulate_block_trade
   */
  simulateBlockTrade(params?: any): Promise<any> {
    return this.call('private/simulate_block_trade', params);
  }

  /**
   * Invalidate Block Trade Signature
   *
   * Invalidate a block-trade signature.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/invalidate_block_trade_signature
   */
  invalidateBlockTradeSignature(params?: any): Promise<any> {
    return this.call('private/invalidate_block_trade_signature', params);
  }

  /**
   * Get Block Trade
   *
   * One block trade.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/get_block_trade
   */
  getBlockTrade(params?: any): Promise<any> {
    return this.call('private/get_block_trade', params);
  }

  /**
   * Get Block Trades
   *
   * The user's block trades.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/get_block_trades
   */
  getBlockTrades(params?: any): Promise<any> {
    return this.call('private/get_block_trades', params);
  }

  /**
   * Get Block Trade Requests
   *
   * Pending block-trade requests.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/get_block_trade_requests
   */
  getBlockTradeRequests(params?: any): Promise<any> {
    return this.call('private/get_block_trade_requests', params);
  }

  /**
   * Get Broker Trades
   *
   * Broker block trades.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/get_broker_trades
   */
  getBrokerTrades(params?: any): Promise<any> {
    return this.call('private/get_broker_trades', params);
  }

  /**
   * Get Broker Trade Requests
   *
   * Broker block-trade requests.
   *
   * Request parameters are not in the published OpenAPI spec yet.
   *
   * JSON-RPC: private/get_broker_trade_requests
   */
  getBrokerTradeRequests(params?: any): Promise<any> {
    return this.call('private/get_broker_trade_requests', params);
  }
}
