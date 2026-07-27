<!-- siebly:metadata
siebly:
  version: 1
  hero:
    headline: Coinbase API JavaScript Tutorial for Node.js
    badges:
      - Advanced Trade
      - Spot
      - US Futures
      - International Perpetuals
      - Public WebSockets
      - Private WebSockets
      - Sandboxes
    summary: Build Coinbase integrations with Advanced Trade REST API calls, public and private WebSocket streams, safe order previews, reconnect recovery, sandbox guidance, and proxy support.
    codeFilename: first-coinbase-api-call.js
    codeStatus: public REST API
    startSectionId: start-building-first-calls
  software:
    description: Node.js and JavaScript SDK for Coinbase Advanced Trade, Coinbase App, Exchange, International Exchange, Prime, and legacy Commerce REST APIs, plus public and private WebSocket streams.
    topics:
      - Coinbase Advanced Trade API
      - Coinbase App API
      - Coinbase Exchange API
      - Coinbase International Exchange API
      - Coinbase Prime API
      - Coinbase Commerce API
      - Public and private WebSockets
      - Order previews
      - Exchange and International sandboxes
      - HTTP and SOCKS proxies
      - Reconnect recovery
  machineCatalog:
    label: Coinbase API JavaScript Tutorial
    topics:
      - Advanced Trade products
      - REST API response shapes
      - public WebSocket streams
      - private WebSocket streams
      - safe order previews
      - client order IDs
      - API clients and environments
      - HTTP and SOCKS proxies
      - reconnect recovery
  sdkPagePromo:
    descriptionBeforePackage: 'A practical JavaScript guide to using '
    descriptionAfterPackage: ' across Coinbase Advanced Trade REST API calls, public and private WebSocket streams, safe order previews, sandboxes, proxies, and reconnect recovery.'
    highlights:
      - Advanced Trade public and private REST API calls
      - Public and private Advanced Trade WebSocket streams
      - Safe Spot order-preview workflow
      - REST API and WebSocket proxy examples
    exampleHref: /examples/Coinbase
    exampleLabel: Coinbase SDK examples
    architectureClientSummary: CBAdvancedTradeClient, WebsocketClient, and specialized Coinbase REST API clients
    architectureApiTitle: Coinbase APIs
    architectureApiSummary: Advanced Trade, Coinbase App, Exchange, International Exchange, Prime, Commerce, and WebSocket streams
  surfaceMap:
    heading: Choose the Coinbase client for the job
    summary: Start with Advanced Trade for retail trading, then use a specialized client only when the account belongs to another Coinbase API product.
    appLabel: Bot, dashboard, worker, tool
    appSummary: Any Node.js or JavaScript-compatible service that needs Coinbase market data, account state, order management, payments, or reconciliation.
    apiLabel: Coinbase APIs
    apiItems:
      - Advanced Trade REST API calls
      - Advanced Trade public and private streams
      - Coinbase App account and transfer calls
      - Exchange and International institutional APIs
      - Prime trading and custody APIs
      - Legacy Commerce APIs
    packageNodes:
      - label: CBAdvancedTradeClient
        summary: Advanced Trade products, accounts, orders, portfolios, derivatives, conversions, fees, and payment methods
      - label: WebsocketClient
        summary: Advanced Trade, Exchange, International, and Prime WebSocket subscriptions
      - label: CBAppClient
        summary: Coinbase App accounts, addresses, transactions, deposits, withdrawals, and public prices
      - label: CBExchangeClient
        summary: Institutional Exchange market data, accounts, orders, profiles, reports, loans, and transfers
      - label: CBInternationalClient
        summary: International instruments, portfolios, orders, positions, loans, and transfers
      - label: CBPrimeClient
        summary: Prime portfolios, balances, orders, activities, allocations, wallets, and transactions
      - label: CBCommerceClient
        summary: Legacy Commerce charges, checkouts, and events
  routing:
    id: coinbase-request-routing
    eyebrow: Request routing
    heading: Product, portfolio, connection, and API family are separate choices
    summary: Keep these values explicit so each request reaches the intended Coinbase product and account.
    rows:
      - eyebrow: Product ID
        code: "product_id: 'BTC-USD'"
        summary: Select an Advanced Trade Spot, futures, or perpetual product.
      - eyebrow: Product metadata
        code: "base_increment and price_increment"
        summary: Apply current size and price rules before an order request.
      - eyebrow: Portfolio
        code: "portfolio_uuid"
        summary: Scope balances, positions, and permissions to the intended portfolio.
      - eyebrow: Client order ID
        code: "client_order_id"
        summary: Give an application-owned order a stable identifier.
      - eyebrow: WebSocket connection
        code: "WS_KEY_MAP.advTradeMarketData"
        summary: Route a subscription to the correct public or private connection.
      - eyebrow: API family
        code: "CBAdvancedTradeClient"
        summary: Select the REST API and authentication model used by the account.
  coverage:
    heading: What to get right in a Coinbase integration
    summary: Start with Advanced Trade public data, then add credentials, private state, streams, safe validation, network configuration, and recovery.
    cards:
      - heading: Advanced Trade REST API calls
        summary: Read endpoint-specific response objects and let the SDK generate JWTs for private requests.
      - heading: Public and private WebSocket streams
        summary: Select the correct connection with WS_KEY_MAP and distinguish acknowledgements from updates.
      - heading: Safe order previews
        summary: Validate a current order configuration without submitting it to the matching engine.
      - heading: API families, sandboxes, and proxies
        summary: Match the client to the Coinbase account, then configure the intended environment and network route.
  snippets:
    heading: First REST API calls, streams, order preview, recovery, and proxies
    summary: Run one focused JavaScript example at a time, then add production controls around the same clients.
    labels:
      public-rest: Public REST API
      private-rest: Private REST API
      public-websocket: Public WebSocket
      private-websocket: Private WebSocket
      spot-order-preview: Spot order preview
      reconnect-recovery: Reconnect recovery
      http-proxy: HTTP or HTTPS proxy
      socks-proxy: SOCKS5 proxy
  workflows:
    heading: REST API, WebSocket, and order-preview workflows
    summary: REST API results, subscription acknowledgements, stream updates, and order previews carry different information.
    diagrams:
      - heading: REST API request flow
        summary: Choose the Advanced Trade method, let the SDK sign private requests, then read the endpoint-specific result.
        steps:
          - label: Choose product and method
            owner: app
          - label: Call the SDK client
            owner: app
          - label: Route and sign if private
            owner: sdk
          - label: Receive endpoint response
            owner: exchange
          - label: Use returned fields
            owner: app
      - heading: WebSocket subscription flow
        summary: Choose a topic and wsKey, let the SDK connect and authenticate when needed, then process acknowledgements and updates separately.
        steps:
          - label: Choose topic and wsKey
            owner: app
          - label: Call subscribe
            owner: app
          - label: Connect and sign if private
            owner: sdk
          - label: Receive subscriptions response
            owner: event
          - label: Process update events
            owner: app
      - heading: Safe order-preview flow
        summary: Read current product rules, preview the order, inspect validation results, and stop without submitting an order.
        steps:
          - label: Read product metadata
            owner: app
          - label: Build order configuration
            owner: app
          - label: Call previewOrder
            owner: app
          - label: Inspect errors and totals
            owner: exchange
          - label: Stop before submission
            owner: app
  production:
    heading: Before a Coinbase integration trades unattended
    summary: Credentials, product rules, response handling, WebSocket continuity, recovery, and network behavior must all be predictable.
    items:
      - Keep API keys server-side and grant only the permissions each process needs.
      - Keep product ID, portfolio, API family, and wsKey explicit in code and logs.
      - Set client_order_id on application-owned orders so retries and restarts can reconcile them.
      - Read product increments, minimum sizes, status flags, and venue before validating an order.
      - Check both HTTP errors and operation-level success fields on order-management responses.
      - Treat an accepted write as pending until a private stream or REST API query confirms state.
      - Subscribe to heartbeats and reload private state after stream gaps.
      - Keep the system clock synchronized and respect current Coinbase rate limits.
      - Monitor proxy reachability, latency, and egress IP when a proxy is enabled.
  journeys:
    eyebrow: Choose your path
    heading: Jump to the Coinbase workflow you are building
    actionLabel: Open section
    cards:
      - heading: Start with REST API calls
        summary: Make public market calls, add credentials, then inspect accounts and order state.
        href: "#start-building-first-calls"
      - heading: Stream live data
        summary: Subscribe to public ticker data and private Advanced Trade order updates.
        href: "#websocket-streams"
      - heading: Understand order management
        summary: Preview an order safely, then learn how submission, lookup, cancellation, and confirmation fit together.
        href: "#order-management"
      - heading: Configure connectivity
        summary: Match the client to the Coinbase environment, then add an HTTP or SOCKS proxy when required.
        href: "#api-hosts"
  article:
    heading: Build around Coinbase products and account state
    summary: "This tutorial covers the Coinbase API pieces developers usually need first: Advanced Trade REST API calls, public and private streams, safe order previews, API environments, proxies, and reconnect recovery."
  related:
    cards:
      - heading: Coinbase SDK page
        summary: Return to installation, examples, endpoint maps, and package links.
        href: /sdk/coinbase/javascript
      - heading: Coinbase examples
        summary: Browse runnable REST API and WebSocket examples.
        href: /examples/Coinbase
      - heading: Endpoint map
        summary: Find the SDK method for each supported Coinbase endpoint.
        href: https://github.com/tiagosiebler/coinbase-api/blob/master/docs/endpointFunctionList.md
      - heading: Source repository
        summary: Browse SDK source, releases, issues, and endpoint coverage on GitHub.
        href: https://github.com/tiagosiebler/coinbase-api
-->

# Coinbase API JavaScript Tutorial for Node.js

<!-- siebly:website-omit:start -->

> [!TIP]
> Read this guide in tutorial format on the Siebly website: [Coinbase JavaScript REST API and WebSocket Tutorial](https://siebly.io/sdk/coinbase/javascript/tutorial)

<!-- siebly:website-omit:end -->

This tutorial uses [`coinbase-api`](https://www.npmjs.com/package/coinbase-api), Siebly's Node.js and JavaScript SDK for Coinbase. This guide will primarily walk you through using the Coinbase Advanced Trade APIs & WebSockets for public market data, authenticated account access, WebSocket streams, and safe order previews.

The SDK handles REST API authentication, short-lived JWT creation, product-specific WebSocket routing, private subscription signing, reconnects, and resubscriptions. It also provides focused clients for Coinbase App, Exchange, International Exchange, Prime, and legacy Commerce APIs.

**Key links**

- Coinbase JavaScript SDK by Siebly: [`coinbase-api`](https://siebly.io/sdk/coinbase/javascript)
- npm package: [`coinbase-api`](https://www.npmjs.com/package/coinbase-api)
- GitHub repository: [`tiagosiebler/coinbase-api`](https://github.com/tiagosiebler/coinbase-api)
- SDK examples: [Coinbase SDK examples](https://siebly.io/examples/Coinbase)
- SDK endpoint map: [Coinbase JavaScript endpoint reference](./endpointFunctionList.md)
- Official documentation: [Coinbase Developer Documentation](https://docs.cdp.coinbase.com/)
- Advanced Trade REST API: [Advanced Trade API endpoints](https://docs.cdp.coinbase.com/coinbase-app/advanced-trade-apis/rest-api)
- Advanced Trade WebSockets: [WebSocket overview](https://docs.cdp.coinbase.com/coinbase-app/advanced-trade-apis/websocket/websocket-overview)
- API authentication: [Coinbase App API key authentication](https://docs.cdp.coinbase.com/coinbase-app/authentication-authorization/api-key-authentication)
- Trading-system terms: [Siebly glossary](https://siebly.io/reference/glossary)
- More JavaScript SDKs: [Siebly.io](https://siebly.io)

## Why use `coinbase-api`?

Private Advanced Trade REST API requests use short-lived JSON Web Tokens signed with a Coinbase Developer Platform API key. Private WebSocket subscriptions also need a fresh JWT, and each subscription must reach the correct Coinbase connection.

`coinbase-api` handles those mechanics and provides a focused client for each API family, so you can focus on your integration without excessive plumbing efforts:

| Client                  | Use it for                                                                             |
| ----------------------- | -------------------------------------------------------------------------------------- |
| `CBAdvancedTradeClient` | Advanced Trade products, accounts, orders, portfolios, derivatives, fees, and converts |
| `WebsocketClient`       | Advanced Trade, Exchange, International, and Prime WebSocket streams                   |
| `CBAppClient`           | Coinbase App accounts, addresses, transactions, deposits, withdrawals, and prices      |
| `CBExchangeClient`      | Institutional Exchange market data, trading, profiles, reports, loans, and transfers   |
| `CBInternationalClient` | International instruments, portfolios, orders, positions, loans, and transfers         |
| `CBPrimeClient`         | Prime portfolios, balances, orders, activities, allocations, wallets, and transactions |
| `CBCommerceClient`      | Legacy Commerce charges, checkouts, and events                                         |

The Advanced Trade product group is the right starting point for most developers automating their own Coinbase trading account. The other REST API clients use different account products, credentials, permissions, and sometimes an API passphrase. These are typically catered more towards institutional users.

## Install the SDK

```bash
npm install coinbase-api
```

The examples use standard ES module imports. The package also supports CommonJS projects.

## Create Coinbase API keys

Public Advanced Trade REST API calls and public WebSocket streams do not need credentials. Private calls and the private `user` stream need a Coinbase Developer Platform secret API key.

Store the key name and private key in environment variables:

```bash
COINBASE_API_KEY_NAME
COINBASE_API_PRIVATE_KEY
```

The key name is the API key identifier returned by Coinbase. For ECDSA keys it normally has the form `organizations/{organization_id}/apiKeys/{key_id}`. The private key is the secret signing key, not a Coinbase account password.

`coinbase-api` accepts the current ECDSA PEM and base64 Ed25519 key formats and detects the signing algorithm automatically. Preserve the private key exactly, including PEM boundaries and line breaks when using an ECDSA key.

When creating a key:

- Grant `view` permission for private account reads and order previews.
- Grant `trade` only to a process that will place or manage orders.
- Grant `transfer` or `receive` only when the process genuinely needs those actions.
- Restrict the key to the intended portfolio.
- Add an IP allowlist when the process has stable outbound addresses.
- Keep the private key in a server-side secret store and never send it to browser code.

Nothing executable in this tutorial needs transfer or withdrawal access. The order example uses `previewOrder()` and does not submit an order.

Advanced Trade and Coinbase App keys do not use an API passphrase. Coinbase Exchange, International Exchange, and Prime credentials use a separate API key, secret, and passphrase.

## Coinbase products and request vocabulary

Several values determine which market, account, and connection a request uses:

| Field or value         | Example                                    | Meaning                                                                                   |
| ---------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| Product ID             | `BTC-USD`                                  | Hyphen-separated trading product with BTC as the base and USD as the quote currency       |
| `base_increment`       | Product metadata                           | Smallest supported change to a base-currency size                                         |
| `quote_increment`      | Product metadata                           | Smallest supported change to a quote-currency size                                        |
| `price_increment`      | Product metadata                           | Smallest supported change to an order price                                               |
| `base_min_size`        | Product metadata                           | Minimum supported base-currency size                                                      |
| `quote_min_size`       | Product metadata                           | Minimum supported quote-currency size                                                     |
| Product status flags   | `status`, `trading_disabled`, `limit_only` | Current restrictions that affect valid order requests                                     |
| Product type and venue | `product_type`, `product_venue`            | Distinguish Spot, US futures, and International perpetual products                        |
| Portfolio ID           | `portfolio_uuid`                           | Portfolio that owns balances, permissions, orders, or derivative positions                |
| Client order ID        | `client_order_id`                          | Application-owned [custom order ID](https://siebly.io/reference/glossary#custom-order-id) |
| Order configuration    | `market_market_ioc`, `limit_limit_gtc`     | Order type, size, time in force, price, and post-only behavior                            |
| WebSocket key          | `WS_KEY_MAP.advTradeMarketData`            | [WebSocket key](https://siebly.io/reference/glossary#ws-key) selecting the connection     |

Advanced Trade REST API methods return the endpoint body directly. There is no shared success envelope. Products are objects, accounts and orders are arrays nested inside response objects, and candles are objects inside a `candles` array.

<!-- siebly:section id="start-building-first-calls" -->

## Start building: first calls and streams

Run each example on its own. Start with public market data, then add credentials, private state, streams, and an order preview.

### 1. Make public REST API calls

Public calls need no API key.

<!-- siebly:snippet id="public-rest" -->

```javascript
import { CBAdvancedTradeClient } from 'coinbase-api';

const client = new CBAdvancedTradeClient();

async function main() {
  try {
    const serverTime = await client.getServerTime();
    console.log('Server time:', serverTime.iso);
  } catch (error) {
    console.error('Server time request failed:', error);
  }

  try {
    const product = await client.getPublicProduct({
      product_id: 'BTC-USD',
    });
    console.log('BTC-USD price:', product.price);
    console.log('Base increment:', product.base_increment);
    console.log('Price increment:', product.price_increment);
  } catch (error) {
    console.error('Product request failed:', error);
  }

  try {
    const orderBook = await client.getPublicProductBook({
      product_id: 'BTC-USD',
      limit: 5,
    });
    console.log('Best bid:', orderBook.pricebook.bids[0]);
    console.log('Best ask:', orderBook.pricebook.asks[0]);
  } catch (error) {
    console.error('Order book request failed:', error);
  }

  const end = Math.floor(Date.now() / 1000);
  const start = end - 60 * 60;

  try {
    const candles = await client.getPublicProductCandles({
      product_id: 'BTC-USD',
      start: String(start),
      end: String(end),
      granularity: 'FIVE_MINUTE',
      limit: 12,
    });
    console.log('Latest candle:', candles.candles[0]);
  } catch (error) {
    console.error('Candles request failed:', error);
  }

  try {
    const marketTrades = await client.getPublicMarketTrades({
      product_id: 'BTC-USD',
      limit: 10,
    });
    console.log('Latest trade:', marketTrades.trades[0]);
    console.log('Best bid:', marketTrades.best_bid);
    console.log('Best ask:', marketTrades.best_ask);
  } catch (error) {
    console.error('Market trades request failed:', error);
  }
}

main();
```

The methods return different object shapes:

| Method                      | Successful result                                                                        |
| --------------------------- | ---------------------------------------------------------------------------------------- |
| `getServerTime()`           | Object containing `iso`, `epochSeconds`, and `epochMillis`                               |
| `getPublicProduct()`        | One product object                                                                       |
| `getPublicProductBook()`    | Object containing `pricebook`, whose `bids` and `asks` are arrays of price-level objects |
| `getPublicProductCandles()` | Object containing a `candles` array                                                      |
| `getPublicMarketTrades()`   | Object containing `trades`, `best_bid`, and `best_ask`                                   |

Each candle has named `start`, `low`, `high`, `open`, `close`, and `volume` fields. Prices, quantities, increments, and timestamps are commonly strings. Keep exchange values as strings until a calculation requires a deliberate conversion.

### 2. Make private REST API calls

The private client uses the same Advanced Trade class with a key name and private key. The SDK creates and signs a new JWT for each private request.

<!-- siebly:snippet id="private-rest" -->

```javascript
import { CBAdvancedTradeClient } from 'coinbase-api';

async function main() {
  if (
    !process.env.COINBASE_API_KEY_NAME ||
    !process.env.COINBASE_API_PRIVATE_KEY
  ) {
    console.error('Set COINBASE_API_KEY_NAME and COINBASE_API_PRIVATE_KEY.');
    return;
  }

  const client = new CBAdvancedTradeClient({
    apiKey: process.env.COINBASE_API_KEY_NAME,
    apiSecret: process.env.COINBASE_API_PRIVATE_KEY,
  });

  try {
    const permissions = await client.getApiKeyPermissions();
    console.log('Can view:', permissions.can_view);
    console.log('Can trade:', permissions.can_trade);
    console.log('Can transfer:', permissions.can_transfer);
    console.log('Portfolio:', permissions.portfolio_uuid);
  } catch (error) {
    console.error('Permission request failed:', error);
  }

  try {
    const accounts = await client.getAccounts({
      limit: 10,
    });
    console.log('Accounts:', accounts.accounts);
    console.log('More accounts available:', accounts.has_next);
  } catch (error) {
    console.error('Account request failed:', error);
  }

  try {
    const openOrders = await client.getOrders({
      order_status: ['OPEN'],
      limit: 20,
    });
    console.log('Open orders:', openOrders.orders);
    console.log('More orders available:', openOrders.has_next);
  } catch (error) {
    console.error('Open-order request failed:', error);
  }

  try {
    const fills = await client.getFills({
      product_ids: ['BTC-USD'],
      limit: 20,
    });
    console.log('Recent BTC-USD fills:', fills.fills);
    console.log('Next cursor:', fills.cursor);
  } catch (error) {
    console.error('Fill request failed:', error);
  }
}

main();
```

`getAccounts()` and `getOrders()` expose pagination fields alongside their arrays. `getFills()` returns its `fills` array and an optional cursor. Follow the returned cursor when the application needs more than one page.

HTTP failures are rejected as parsed errors containing the status, response body, headers, and request context. Credentials are omitted from those parsed error objects. Order-management methods can also return a successful HTTP response whose operation-level `success` field is `false`, so both layers must be checked.

### 3. Subscribe to public Advanced Trade WebSocket streams

Use the Advanced Trade market-data connection for public channels. Subscribe to `heartbeats` alongside the ticker so the connection remains active when another channel has no updates.

<!-- siebly:snippet id="public-websocket" -->

```javascript
import { WebsocketClient, WS_KEY_MAP } from 'coinbase-api';

function main() {
  const ws = new WebsocketClient();

  ws.on('open', ({ wsKey }) => {
    console.log('WebSocket opened:', wsKey);
  });

  ws.on('response', (response) => {
    console.log(
      'WebSocket response:',
      response.wsKey,
      response.channel,
      response.events,
    );
  });

  ws.on('update', (update) => {
    console.log(
      'WebSocket update:',
      update.wsKey,
      update.channel,
      update.events,
    );
  });

  ws.on('reconnect', ({ wsKey }) => {
    console.log('Reconnecting:', wsKey);
  });

  ws.on('reconnected', ({ wsKey }) => {
    console.log('Reconnected:', wsKey);
  });

  ws.on('close', ({ wsKey }) => {
    console.log('WebSocket closed:', wsKey);
  });

  ws.on('exception', (error) => {
    console.error('WebSocket exception:', error);
  });

  ws.subscribe(
    {
      topic: 'ticker',
      payload: {
        product_ids: ['BTC-USD'],
      },
    },
    WS_KEY_MAP.advTradeMarketData,
  );

  ws.subscribe('heartbeats', WS_KEY_MAP.advTradeMarketData);

  process.once('SIGINT', () => {
    ws.closeAll();
  });
}

main();
```

A message whose `channel` is `subscriptions` is the [subscription acknowledgement](https://siebly.io/reference/glossary#subscription-acknowledgement). Market snapshots and later changes arrive through `update`, where each event has a channel-specific shape and a `type` such as `snapshot` or `update`.

The SDK adds `wsKey` to emitted events so one handler can identify the source connection. After an unexpected disconnect, it reconnects and restores tracked subscriptions.

### 4. Subscribe to the private Advanced Trade user stream

The private user-data connection provides order and position updates for the authenticated account. The SDK signs each subscription with a fresh JWT.

<!-- siebly:snippet id="private-websocket" -->

```javascript
import { WebsocketClient, WS_KEY_MAP } from 'coinbase-api';

function main() {
  if (
    !process.env.COINBASE_API_KEY_NAME ||
    !process.env.COINBASE_API_PRIVATE_KEY
  ) {
    console.error('Set COINBASE_API_KEY_NAME and COINBASE_API_PRIVATE_KEY.');
    return;
  }

  const ws = new WebsocketClient({
    apiKey: process.env.COINBASE_API_KEY_NAME,
    apiSecret: process.env.COINBASE_API_PRIVATE_KEY,
  });

  ws.on('open', ({ wsKey }) => {
    console.log('Private WebSocket opened:', wsKey);
  });

  ws.on('response', (response) => {
    console.log(
      'Private WebSocket response:',
      response.wsKey,
      response.channel,
      response.events,
    );
  });

  ws.on('update', (update) => {
    console.log('Private update:', update.wsKey, update.channel, update.events);
  });

  ws.on('reconnect', ({ wsKey }) => {
    console.log('Private WebSocket reconnecting:', wsKey);
  });

  ws.on('reconnected', ({ wsKey }) => {
    console.log('Private WebSocket reconnected:', wsKey);
  });

  ws.on('close', ({ wsKey }) => {
    console.log('Private WebSocket closed:', wsKey);
  });

  ws.on('exception', (error) => {
    console.error('Private WebSocket exception:', error);
  });

  ws.subscribe(
    {
      topic: 'user',
      payload: {
        product_ids: ['BTC-USD'],
      },
    },
    WS_KEY_MAP.advTradeUserData,
  );

  ws.subscribe('heartbeats', WS_KEY_MAP.advTradeUserData);

  process.once('SIGINT', () => {
    ws.closeAll();
  });
}

main();
```

The first `user` messages contain the account's current open orders, followed by later order changes. Coinbase can split a large initial snapshot across multiple messages. Preserve the event type and sequence information when building local [account state](https://siebly.io/reference/glossary#accountstate).

An eligible derivatives account can also subscribe to `futures_balance_summary` through `WS_KEY_MAP.advTradeUserData`. Keep that subscription separate from `user` because Coinbase requires one channel per subscription request.

Private order updates provide [private stream confirmation](https://siebly.io/reference/glossary#private-stream-confirmation) after a write. A subscription acknowledgement only confirms the stream subscription, not an order state.

### 5. Preview a Spot order with the REST API

`previewOrder()` validates an order configuration and returns estimated totals, commission, market prices, warnings, and validation errors. It does not submit an order to the matching engine.

This example reads the current `BTC-USD` minimum quote size and uses it for a market-buy preview.

<!-- siebly:snippet id="spot-order-preview" -->

```javascript
import { CBAdvancedTradeClient } from 'coinbase-api';

async function main() {
  if (
    !process.env.COINBASE_API_KEY_NAME ||
    !process.env.COINBASE_API_PRIVATE_KEY
  ) {
    console.error('Set COINBASE_API_KEY_NAME and COINBASE_API_PRIVATE_KEY.');
    return;
  }

  const client = new CBAdvancedTradeClient({
    apiKey: process.env.COINBASE_API_KEY_NAME,
    apiSecret: process.env.COINBASE_API_PRIVATE_KEY,
  });

  let product;

  try {
    product = await client.getPublicProduct({
      product_id: 'BTC-USD',
    });
    console.log('Minimum quote size:', product.quote_min_size);
  } catch (error) {
    console.error('Product request failed:', error);
    return;
  }

  if (
    !product.quote_min_size ||
    !Number.isFinite(Number(product.quote_min_size)) ||
    Number(product.quote_min_size) <= 0
  ) {
    console.error('BTC-USD returned an invalid quote_min_size.');
    return;
  }

  try {
    const preview = await client.previewOrder({
      product_id: 'BTC-USD',
      side: 'BUY',
      order_configuration: {
        market_market_ioc: {
          quote_size: product.quote_min_size,
        },
      },
    });

    console.log('Validation errors:', preview.errs);
    console.log('Warnings:', preview.warning);
    console.log('Order total:', preview.order_total);
    console.log('Commission total:', preview.commission_total);
    console.log('Best bid:', preview.best_bid);
    console.log('Best ask:', preview.best_ask);
    console.log('Preview ID:', preview.preview_id);
  } catch (error) {
    console.error('Order preview failed:', error);
  }
}

main();
```

The preview endpoint needs `view` permission. Check `errs` before using any estimate. Warnings may describe conditions that do not make the request invalid, while an error means the configuration cannot currently be accepted.

`preview_id` identifies this preview result. Passing it to a later order request does not remove the need to validate current product rules and check the order response. This tutorial stops after the preview and never calls `submitOrder()`.

<!-- siebly:section id="rest-api" -->

## Work with the Advanced Trade REST API

### Understand response shapes

Advanced Trade REST API methods return the endpoint body. The top-level shape depends on the method:

| Operation       | Main response fields                                                   |
| --------------- | ---------------------------------------------------------------------- |
| List accounts   | `accounts`, `has_next`, `cursor`, `size`                               |
| List orders     | `orders`, `has_next`, optional `cursor` and `sequence`                 |
| List fills      | `fills`, optional `cursor`                                             |
| Product book    | `pricebook`, with `bids`, `asks`, and `time`                           |
| Product candles | `candles`                                                              |
| Market trades   | `trades`, `best_bid`, `best_ask`                                       |
| Submit order    | `success`, `success_response`, `error_response`, `order_configuration` |
| Cancel orders   | `results`, with one result for each requested order ID                 |
| Preview order   | `errs`, `warning`, totals, sizes, market prices, and `preview_id`      |

Do not assume that a successful HTTP status means an order-management operation succeeded. For example, `submitOrder()` can return `success: false` with details under `error_response`.

### Read account and order state

The private methods used most often for account state are:

| Method                    | Purpose                                                         |
| ------------------------- | --------------------------------------------------------------- |
| `getApiKeyPermissions()`  | Read the key's current permissions and portfolio scope          |
| `getAccounts()`           | List currency accounts, available balances, and holds           |
| `getAccount()`            | Read one currency account                                       |
| `getOrders()`             | List orders using product, status, side, type, and time filters |
| `getOrder()`              | Read one order by exchange order ID                             |
| `getFills()`              | List fills by product, order, trade, time, or cursor            |
| `getTransactionSummary()` | Read current volume and fee-tier information                    |

Use cursors until the required history window is complete. Keep product IDs, order IDs, client order IDs, and cursor values with the data they identify.

<!-- siebly:section id="order-management" -->

## Understand Advanced Trade order management

Advanced Trade order commands use `CBAdvancedTradeClient`. The `WebsocketClient` provides streams and does not send order commands.

### Choose an order configuration

The request's `order_configuration` contains one order type. Common configurations include:

| Configuration                   | Use                                                                   |
| ------------------------------- | --------------------------------------------------------------------- |
| `market_market_ioc`             | Market order using a base or quote size                               |
| `limit_limit_gtc`               | Limit order that remains active until filled or cancelled             |
| `limit_limit_gtd`               | Limit order with an expiry time                                       |
| `limit_limit_fok`               | Limit order that must fill completely and immediately or be cancelled |
| `sor_limit_ioc`                 | Smart order-router limit order with immediate-or-cancel behavior      |
| Stop and bracket configurations | Conditional exits and attached risk controls                          |

A `limit_limit_gtc` configuration can set `post_only: true`. A post-only order is rejected or cancelled rather than immediately taking liquidity. It can still fill after resting on the book, so it is not a risk-free live test.

Always apply current `base_increment`, `quote_increment`, `price_increment`, minimum sizes, maximum sizes, and product status flags. Derivative products add contract, margin, session, and eligibility rules.

### Use client order IDs

Call `client.generateNewOrderId()` when an application will submit an order. The SDK generates an identifier with its required `cbnode` prefix. If a supplied `client_order_id` does not have that prefix, the SDK adds it and logs a warning.

Persist both the [custom order ID](https://siebly.io/reference/glossary#custom-order-id) and Coinbase order ID. The client order ID lets a process reconcile an uncertain request after a timeout or restart.

### Follow the order lifecycle

The main REST API methods are:

| Method                 | Operation                                            |
| ---------------------- | ---------------------------------------------------- |
| `previewOrder()`       | Validate and estimate an order without submitting it |
| `submitOrder()`        | Submit a new order                                   |
| `getOrder()`           | Query one order                                      |
| `getOrders()`          | List matching orders                                 |
| `updateOrderPreview()` | Preview an order edit                                |
| `updateOrder()`        | Edit an eligible order                               |
| `cancelOrders()`       | Request cancellation for one or more order IDs       |

For a submitted order:

1. Check the HTTP request outcome.
2. Check the returned `success` field.
3. Read the Coinbase order ID from `success_response` only when `success` is `true`.
4. Treat the result as [pending confirmation](https://siebly.io/reference/glossary#pending-confirmation).
5. Confirm the final state through the private `user` stream or `getOrder()`.

If a write times out without a clear result, query by the known Coinbase order ID or reconcile the client order ID before retrying. Blindly submitting the same intent again can create a second live order.

### Know what WebSockets do

`coinbase-api` does not expose a `WebsocketAPIClient` for Coinbase because its supported Coinbase WebSocket interfaces are subscription feeds. Use:

- `WebsocketClient` for market and account updates.
- `CBAdvancedTradeClient` for preview, submit, edit, query, and cancel commands.

A subscription response acknowledges a channel. It is not an order acknowledgement and does not confirm account state.

### Explore other Advanced Trade groups

The Advanced Trade client covers more than Spot orders:

| Group                     | Representative methods                                                                   |
| ------------------------- | ---------------------------------------------------------------------------------------- |
| Authenticated market data | `getProducts()`, `getProduct()`, `getBestBidAsk()`, `getProductBook()`                   |
| Portfolios                | `getPortfolios()`, `getPortfolioBreakdown()`, `createPortfolio()`, `updatePortfolio()`   |
| Fees                      | `getTransactionSummary()`                                                                |
| Converts                  | `submitConvertQuote()`, `getConvertTrade()`, `commitConvertTrade()`                      |
| Payment methods           | `getPaymentMethods()`, `getPaymentMethod()`                                              |
| US futures                | `getFuturesBalanceSummary()`, `getFuturesPositions()`, `getFuturesSweeps()`              |
| Futures margin            | `getIntradayMarginSetting()`, `getCurrentMarginWindow()`                                 |
| International perpetuals  | `getPerpetualsPortfolioSummary()`, `getPerpetualsPositions()`, `getPortfoliosBalances()` |
| International collateral  | `allocatePortfolio()`, `updateMultiAssetCollateral()`                                    |

US futures and International perpetual products are available only to eligible accounts and jurisdictions. Read product metadata and account state rather than assuming that a product visible in public data is tradable by the authenticated portfolio.

For the full method-to-endpoint map, use the [Coinbase SDK endpoint reference](./endpointFunctionList.md).

<!-- siebly:section id="websocket-streams" -->

## Build with Coinbase WebSocket streams

### Choose the correct WebSocket key

Each `wsKey` identifies one Coinbase WebSocket connection:

| WebSocket key                         | Authentication | Use                                                         |
| ------------------------------------- | -------------- | ----------------------------------------------------------- |
| `WS_KEY_MAP.advTradeMarketData`       | Public         | Advanced Trade ticker, level 2, trades, candles, and status |
| `WS_KEY_MAP.advTradeUserData`         | Required       | Advanced Trade user orders and futures balance summaries    |
| `WS_KEY_MAP.exchangeMarketData`       | Public         | Coinbase Exchange market-data feed                          |
| `WS_KEY_MAP.exchangeDirectMarketData` | Required       | Coinbase Exchange direct market-data feed                   |
| `WS_KEY_MAP.internationalMarketData`  | Required       | Coinbase International market-data feed                     |
| `WS_KEY_MAP.primeMarketData`          | Required       | Coinbase Prime market-data feed                             |

Pass `WS_KEY_MAP` values explicitly. This keeps connection routing visible and prevents a topic from reaching the wrong API family.

### Use the Advanced Trade channels

| Channel                   | Authentication | Main use                                                   |
| ------------------------- | -------------- | ---------------------------------------------------------- |
| `heartbeats`              | Public channel | Keep subscriptions open and detect missed heartbeat counts. On `advTradeUserData`, the SDK still signs the subscription JWT |
| `ticker`                  | Public         | Price, volume, and best bid or ask changes                 |
| `ticker_batch`            | Public         | Batched ticker changes                                     |
| `market_trades`           | Public         | Recent trade updates                                       |
| `level2`                  | Public         | Order-book snapshots and updates                           |
| `candles`                 | Public         | Five-minute candle updates                                 |
| `status`                  | Public         | Product and currency status                                |
| `user`                    | Required       | Current open orders and later order or position changes    |
| `futures_balance_summary` | Required       | Futures balance changes for eligible accounts              |

Coinbase requires one channel per Advanced Trade subscription request. Send separate `subscribe()` calls when a process needs ticker and heartbeat data.

### Treat responses and updates differently

The SDK emits:

- `open` when a connection is ready.
- `response` for subscription responses and exchange errors.
- `update` for snapshots and later channel data.
- `reconnect` when it begins restoring a dropped connection.
- `reconnected` after the replacement connection opens.
- `close` when a connection closes.
- `exception` for connection, parsing, signing, or subscription failures.

`subscribe()` is synchronous. JWT signing and send happen asynchronously, so handle those failures on `exception` rather than wrapping `subscribe()` in `try`/`catch`.

Keep each event's `wsKey`, `channel`, `sequence_num`, and event `type`. A `subscriptions` response confirms the requested channel is active. It does not replace the initial channel snapshot or later updates.

<!-- siebly:section id="reconnect-recovery" -->

## Recover private state after a reconnect

Automatic reconnection restores the socket and cached subscriptions. It cannot prove that every private event was received before or during the gap. Rebuild the affected [account state](https://siebly.io/reference/glossary#accountstate) through the REST API after `advTradeUserData` reconnects.

This example reloads accounts, open orders, and recent `BTC-USD` fills sequentially. It replaces local state only when all three reads succeed.

<!-- siebly:snippet id="reconnect-recovery" -->

```javascript
import {
  CBAdvancedTradeClient,
  WebsocketClient,
  WS_KEY_MAP,
} from 'coinbase-api';

async function main() {
  if (
    !process.env.COINBASE_API_KEY_NAME ||
    !process.env.COINBASE_API_PRIVATE_KEY
  ) {
    console.error('Set COINBASE_API_KEY_NAME and COINBASE_API_PRIVATE_KEY.');
    return;
  }

  const credentials = {
    apiKey: process.env.COINBASE_API_KEY_NAME,
    apiSecret: process.env.COINBASE_API_PRIVATE_KEY,
  };

  const rest = new CBAdvancedTradeClient(credentials);
  const ws = new WebsocketClient(credentials);

  let accountState;

  ws.on('update', (update) => {
    console.log('Private update:', update.channel, update.events);
  });

  ws.on('reconnected', async ({ wsKey }) => {
    if (wsKey !== WS_KEY_MAP.advTradeUserData) {
      return;
    }

    let accountsResponse;
    let ordersResponse;
    let fillsResponse;

    try {
      accountsResponse = await rest.getAccounts({
        limit: 250,
      });
    } catch (error) {
      console.error('Account recovery failed:', error);
      return;
    }

    try {
      ordersResponse = await rest.getOrders({
        order_status: ['OPEN'],
        limit: 250,
      });
    } catch (error) {
      console.error('Open-order recovery failed:', error);
      return;
    }

    try {
      fillsResponse = await rest.getFills({
        product_ids: ['BTC-USD'],
        limit: 100,
      });
    } catch (error) {
      console.error('Fill recovery failed:', error);
      return;
    }

    const replacement = {
      accounts: accountsResponse.accounts,
      openOrders: ordersResponse.orders,
      recentFills: fillsResponse.fills,
      recoveredAt: new Date().toISOString(),
    };

    accountState = replacement;
    console.log('Private state recovered:', accountState.recoveredAt);
  });

  ws.on('exception', (error) => {
    console.error('WebSocket exception:', error);
  });

  ws.subscribe(
    {
      topic: 'user',
      payload: {
        product_ids: ['BTC-USD'],
      },
    },
    WS_KEY_MAP.advTradeUserData,
  );

  ws.subscribe('heartbeats', WS_KEY_MAP.advTradeUserData);

  process.once('SIGINT', () => {
    ws.closeAll();
  });
}

main();
```

For a complete implementation, paginate until the required recovery window is covered. A production state owner should also buffer new private updates while recovery is running, apply the replacement snapshot, and then replay updates newer than the snapshot boundary.

See:

- [Exchange State](https://siebly.io/reference/exchange-state)
- [REST API Hydration](https://siebly.io/reference/glossary#rest-hydration)
- [Scoped Recovery](https://siebly.io/reference/glossary#scoped-recovery)
- [Runtime Workflows](https://siebly.io/reference/runtime-workflows)

## Choose the Coinbase API family

The package covers several Coinbase products. Their credentials and account models are not interchangeable.

| Client                  | Representative coverage                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------- |
| `CBAdvancedTradeClient` | Retail trading, portfolios, Spot, US futures, International perpetuals, fees, and converts        |
| `CBAppClient`           | Coinbase App accounts, addresses, transactions, deposits, withdrawals, and public prices          |
| `CBExchangeClient`      | Institutional Exchange products, accounts, orders, fills, profiles, reports, loans, and transfers |
| `CBInternationalClient` | International instruments, portfolios, balances, positions, orders, fills, loans, and transfers   |
| `CBPrimeClient`         | Prime portfolios, balances, orders, allocations, activities, wallets, and transactions            |
| `CBCommerceClient`      | Legacy Commerce charges, checkouts, and events                                                    |

Use Advanced Trade for a normal Coinbase retail trading account. Coinbase Exchange, International Exchange, and Prime require the matching institutional account and credentials.

`CBCommerceClient` maps the legacy `api.commerce.coinbase.com` charge and checkout endpoints. Coinbase now directs new payment integrations toward Coinbase Business Checkouts. Review the official [Commerce-to-Checkouts migration guide](https://docs.cdp.coinbase.com/coinbase-business/checkout-apis/migrate-from-commerce/api-schema-mapping) before starting a new payments integration.

<!-- siebly:section id="api-hosts" -->

## Connect to live APIs and sandboxes

Each Coinbase client has its own default REST API host. The WebSocket client selects a host from the requested `wsKey`.

| API or environment             | REST API host                                      | WebSocket host or guidance                                                      |
| ------------------------------ | -------------------------------------------------- | ------------------------------------------------------------------------------- |
| Advanced Trade live            | `https://api.coinbase.com`                         | `wss://advanced-trade-ws.coinbase.com` for market data                          |
| Advanced Trade private stream  | `https://api.coinbase.com`                         | `wss://advanced-trade-ws-user.coinbase.com`                                     |
| Advanced Trade static sandbox  | `https://api-sandbox.coinbase.com` via explicit `baseUrl` | No Advanced Trade sandbox WebSocket; SDK does not wire this through `useSandbox` |
| Coinbase App live              | `https://api.coinbase.com`                         | No Coinbase App stream in this SDK                                              |
| Coinbase Exchange live         | `https://api.exchange.coinbase.com`                | `wss://ws-feed.exchange.coinbase.com` or the authenticated direct feed          |
| Coinbase Exchange sandbox      | `https://api-public.sandbox.exchange.coinbase.com` | `wss://ws-feed-public.sandbox.exchange.coinbase.com` or its direct sandbox feed |
| International Exchange live    | `https://api.international.coinbase.com`           | `wss://ws-md.international.coinbase.com`                                        |
| International Exchange sandbox | `https://api-n5e1.coinbase.com`                    | `wss://ws-md.n5e2.coinbase.com`                                                 |
| Coinbase Prime live            | `https://api.prime.coinbase.com`                   | `wss://ws-feed.prime.coinbase.com`                                              |
| Legacy Commerce live           | `https://api.commerce.coinbase.com`                | No Commerce stream in this SDK                                                  |

The [Advanced Trade static sandbox](https://docs.cdp.coinbase.com/coinbase-app/advanced-trade-apis/sandbox) returns predefined mock responses for a limited set of account and order endpoints. It does not run a matching engine and is not a funded trading environment. This SDK maps Advanced Trade `useSandbox: true` to an unavailable sandbox URL stub (`NoSandboxAvailable`). To call that Coinbase static sandbox host from `CBAdvancedTradeClient`, set `baseUrl: 'https://api-sandbox.coinbase.com'` explicitly.

`useSandbox: true` is supported by `CBExchangeClient` and `CBInternationalClient`, and by the matching Exchange or International WebSocket connections. On `WebsocketClient`, `useSandbox` is client-wide: it applies to every `wsKey` on that instance. Sandbox credentials are separate from production credentials.

Do not set `useSandbox: true` on `CBAdvancedTradeClient` or an Advanced Trade WebSocket connection. Use public live data and `previewOrder()` for the safe Advanced Trade workflow in this tutorial.

Official environment references:

- [Advanced Trade sandbox](https://docs.cdp.coinbase.com/coinbase-app/advanced-trade-apis/sandbox)
- [Coinbase Exchange sandbox](https://docs.cdp.coinbase.com/exchange/introduction/sandbox)
- [Coinbase International Exchange sandbox](https://docs.cdp.coinbase.com/international-exchange/introduction/sandbox)
- [Coinbase Prime systems and operations](https://docs.cdp.coinbase.com/prime/introduction/systems-operations)

Coinbase does not expose one generic region switch for every API family. Account type, portfolio access, jurisdiction, and product eligibility determine the available APIs and products. A proxy does not change those rules.

<!-- siebly:section id="proxies" -->

## Use a proxy with the REST API and WebSockets

A proxy can provide a stable egress IP, an approved corporate network route, or controlled network failover. It changes the network path to Coinbase, not the selected API family, account permissions, jurisdiction, or product eligibility.

See [Using a proxy with Siebly SDKs](https://siebly.io/blog/using-proxy-with-siebly-sdks) for the general networking pattern.

### HTTP or HTTPS proxy

Install the proxy agent:

```bash
npm install coinbase-api https-proxy-agent
```

Pass the agent through the second REST API client argument and through `wsOptions.agent` for WebSockets.

<!-- siebly:snippet id="http-proxy" -->

```javascript
import { HttpsProxyAgent } from 'https-proxy-agent';
import {
  CBAdvancedTradeClient,
  WebsocketClient,
  WS_KEY_MAP,
} from 'coinbase-api';

async function main() {
  if (!process.env.COINBASE_PROXY_URL) {
    console.error('Set COINBASE_PROXY_URL.');
    return;
  }

  const proxyAgent = new HttpsProxyAgent(process.env.COINBASE_PROXY_URL);

  const rest = new CBAdvancedTradeClient(
    {},
    {
      httpsAgent: proxyAgent,
      proxy: false,
    },
  );

  const ws = new WebsocketClient({
    wsOptions: {
      agent: proxyAgent,
    },
  });

  try {
    const serverTime = await rest.getServerTime();
    console.log('REST API through proxy:', serverTime.iso);
  } catch (error) {
    console.error('Proxied REST API request failed:', error);
  }

  ws.on('open', ({ wsKey }) => {
    console.log('Proxied WebSocket opened:', wsKey);
  });

  ws.on('response', (response) => {
    console.log(
      'Proxied WebSocket response:',
      response.wsKey,
      response.channel,
    );
  });

  ws.on('update', (update) => {
    console.log(
      'Proxied WebSocket update:',
      update.wsKey,
      update.channel,
      update.events,
    );
  });

  ws.on('exception', (error) => {
    console.error('Proxied WebSocket exception:', error);
  });

  ws.subscribe(
    {
      topic: 'ticker',
      payload: {
        product_ids: ['BTC-USD'],
      },
    },
    WS_KEY_MAP.advTradeMarketData,
  );

  ws.subscribe('heartbeats', WS_KEY_MAP.advTradeMarketData);

  process.once('SIGINT', () => {
    ws.closeAll();
  });
}

main();
```

`httpsAgent` carries HTTPS REST API requests through the proxy. `proxy: false` prevents Axios from adding a second proxy layer. `HttpsProxyAgent` accepts both HTTP and HTTPS proxy URLs.

For authenticated traffic, add credentials to the same constructors:

```javascript
import { HttpsProxyAgent } from 'https-proxy-agent';
import { CBAdvancedTradeClient, WebsocketClient } from 'coinbase-api';

function main() {
  if (
    !process.env.COINBASE_PROXY_URL ||
    !process.env.COINBASE_API_KEY_NAME ||
    !process.env.COINBASE_API_PRIVATE_KEY
  ) {
    console.error(
      'Set COINBASE_PROXY_URL, COINBASE_API_KEY_NAME, and COINBASE_API_PRIVATE_KEY.',
    );
    return;
  }

  const proxyAgent = new HttpsProxyAgent(process.env.COINBASE_PROXY_URL);

  const privateRest = new CBAdvancedTradeClient(
    {
      apiKey: process.env.COINBASE_API_KEY_NAME,
      apiSecret: process.env.COINBASE_API_PRIVATE_KEY,
    },
    {
      httpsAgent: proxyAgent,
      proxy: false,
    },
  );

  const privateWs = new WebsocketClient({
    apiKey: process.env.COINBASE_API_KEY_NAME,
    apiSecret: process.env.COINBASE_API_PRIVATE_KEY,
    wsOptions: {
      agent: proxyAgent,
    },
  });

  console.log(
    'Private REST API and WebSocket clients are configured:',
    Boolean(privateRest),
    Boolean(privateWs),
  );
}

main();
```

This only constructs the authenticated clients. It does not make a private request, open a private stream, or submit an order.

### SOCKS5 proxy

Install:

```bash
npm install coinbase-api socks-proxy-agent
```

Use the same constructor positions with `SocksProxyAgent`.

<!-- siebly:snippet id="socks-proxy" -->

```javascript
import { SocksProxyAgent } from 'socks-proxy-agent';
import {
  CBAdvancedTradeClient,
  WebsocketClient,
  WS_KEY_MAP,
} from 'coinbase-api';

async function main() {
  if (!process.env.COINBASE_SOCKS_PROXY_URL) {
    console.error('Set COINBASE_SOCKS_PROXY_URL.');
    return;
  }

  const proxyAgent = new SocksProxyAgent(process.env.COINBASE_SOCKS_PROXY_URL);

  const rest = new CBAdvancedTradeClient(
    {},
    {
      httpsAgent: proxyAgent,
      proxy: false,
    },
  );

  const ws = new WebsocketClient({
    wsOptions: {
      agent: proxyAgent,
    },
  });

  try {
    const serverTime = await rest.getServerTime();
    console.log('REST API through SOCKS5:', serverTime.iso);
  } catch (error) {
    console.error('SOCKS5 REST API request failed:', error);
  }

  ws.on('open', ({ wsKey }) => {
    console.log('SOCKS5 WebSocket opened:', wsKey);
  });

  ws.on('response', (response) => {
    console.log('SOCKS5 WebSocket response:', response.wsKey, response.channel);
  });

  ws.on('update', (update) => {
    console.log(
      'SOCKS5 WebSocket update:',
      update.wsKey,
      update.channel,
      update.events,
    );
  });

  ws.on('exception', (error) => {
    console.error('SOCKS5 WebSocket exception:', error);
  });

  ws.subscribe(
    {
      topic: 'ticker',
      payload: {
        product_ids: ['BTC-USD'],
      },
    },
    WS_KEY_MAP.advTradeMarketData,
  );

  ws.subscribe('heartbeats', WS_KEY_MAP.advTradeMarketData);

  process.once('SIGINT', () => {
    ws.closeAll();
  });
}

main();
```

### Proxy checks

- Keep proxy URLs and credentials in environment variables or a secret manager.
- URL-encode proxy usernames and passwords when composing a URL from separate values.
- Make sure the proxy egress IP matches the API key's IP allowlist.
- Test a public REST API request and public WebSocket subscription before private authentication.
- Monitor REST API latency, WebSocket connection time, and reconnect frequency.
- Treat HTTP 407 responses, TLS failures, and repeated reconnects as network faults.
- Do not log complete proxy URLs because they may contain credentials.
- Keep the host clock synchronized because private request JWTs are time-sensitive.
- The SDK does not rotate proxy endpoints.

<!-- siebly:section id="production" -->

## Production checklist

### Keep request time accurate

Advanced Trade JWTs are short-lived. Keep the host clock synchronized and alert on clock drift before it causes authentication failures.

### Respect rate limits and caching

Coinbase applies REST API, WebSocket connection, and message limits. Public Advanced Trade REST API endpoints can also use a short cache. Use WebSockets for continuously changing prices and books, follow current response headers, and back off after rate-limit responses.

### Apply current product rules

Read product metadata before validating an order. Apply the current increments, minimum and maximum sizes, trading status, venue, product type, session details, and account eligibility.

Do not assume that the rules for `BTC-USD` apply to another Spot, futures, or perpetual product.

### Use client order IDs

Generate and persist a unique `client_order_id` for each application-owned order. Store it with the Coinbase order ID, product, side, configuration, requested size, and creation time.

### Confirm final state

An accepted write is not proof of a fill, cancellation, or final order status. Confirm through the private `user` stream or a REST API query.

After an uncertain timeout, reconcile known identifiers before retrying.

### Keep WebSocket streams healthy

Subscribe to `heartbeats` alongside other Advanced Trade channels. Monitor sequence numbers, heartbeat counters, exceptions, reconnects, and time since the last update.

Reload the affected account state after a private stream gap.

### Scope credentials and network access

Keep API keys and proxy credentials out of source control, browser bundles, logs, and error reporting. Grant only the required permissions and portfolio access. Use stable allowlisted egress IPs where practical.

API keys in this guide are for a server acting on its own Coinbase account. An application acting for other Coinbase users should use Coinbase's current OAuth flow rather than collecting users' private API keys.

### Shut down connections

Call `closeAll()` during controlled process shutdown. Use `unsubscribe()` only when a long-running process should stop selected topics while keeping a connection active.

## FAQ

### Does `coinbase-api` work with plain JavaScript?

Yes. Every example in this tutorial is plain JavaScript. The package also publishes TypeScript declarations for projects that use them.

### Which REST API client should I use?

Use `CBAdvancedTradeClient` for a normal Coinbase retail trading account. Use the App, Exchange, International, Prime, or Commerce client only when the Coinbase account and workflow belong to that API family.

### What are `COINBASE_API_KEY_NAME` and `COINBASE_API_PRIVATE_KEY`?

The key name identifies a Coinbase Developer Platform secret API key. The private key signs requests and subscriptions. It is not the Coinbase account password.

### Does Advanced Trade use an API passphrase?

No. Advanced Trade and Coinbase App use a key name and private signing key. Exchange, International Exchange, and Prime credentials include a separate API passphrase.

### Can I use ECDSA and Ed25519 keys?

`coinbase-api` supports both current Coinbase key formats and detects the signing algorithm from the private key. Preserve the complete ECDSA PEM or base64 Ed25519 value.

### Why do Advanced Trade REST API responses have different shapes?

The SDK returns each endpoint body directly. A product is one object, accounts are under `accounts`, orders are under `orders`, candles are under `candles`, and trades are under `trades`.

### Why can an order response fail with an HTTP success status?

Some order-management endpoints report operation-level success inside the response body. Check `success`, then read `success_response` or `error_response` as appropriate.

### What is the difference between Advanced Trade and Coinbase Exchange?

Advanced Trade is the normal Coinbase trading API for retail users. Coinbase Exchange is an institutional API product with separate accounts, credentials, permissions, hosts, and market structure.

### Does Advanced Trade have a sandbox?

Coinbase provides a static Advanced Trade sandbox with predefined mock responses for selected account and order endpoints. It does not run a matching engine. `CBAdvancedTradeClient` accepts `useSandbox`, but for Advanced Trade the SDK resolves it to an unavailable sandbox URL stub. Use an explicit `baseUrl: 'https://api-sandbox.coinbase.com'` only when you intentionally need that static sandbox host.

### Does `previewOrder()` place an order?

No. It validates and estimates the request but does not submit it to the matching engine. Check `errs` and `warning` before using its estimates.

### Why is there no Coinbase `WebsocketAPIClient`?

The Coinbase WebSocket interfaces supported by this SDK are subscription feeds. Use `WebsocketClient` for streams and the matching REST API client for order commands.

### What does the first private `user` update contain?

Coinbase sends current open-order snapshots before later changes. Large snapshots can be split across multiple messages, so process event types and sequence information rather than treating the first message as complete.

### Why should I subscribe to `heartbeats`?

Heartbeats keep quiet Advanced Trade subscriptions open and expose a counter that can help detect missed messages.

### What should happen after a private WebSocket reconnect?

Restore the subscription, then reload affected account state through the REST API. Replace local state only after the required reads complete and reconcile updates received during recovery.

### What causes timestamp or signature errors?

Common causes include clock drift, an incorrectly stored private key, lost PEM line breaks, a key for the wrong API family, insufficient portfolio permissions, or a proxy sending traffic from an unexpected IP.

### Can a proxy change Coinbase product availability?

No. A proxy changes the network route. It does not change the API family, account region, jurisdiction, portfolio permissions, or product eligibility.

### Can I use API keys for other Coinbase users?

API key authentication is for server-side access to an account you control. Use Coinbase's current OAuth guidance when an application needs authorization from other users.

## Next steps

- [Coinbase JavaScript SDK page](https://siebly.io/sdk/coinbase/javascript)
- [`coinbase-api` on npm](https://www.npmjs.com/package/coinbase-api)
- [Coinbase SDK source](https://github.com/tiagosiebler/coinbase-api)
- [Coinbase examples on Siebly](https://siebly.io/examples/Coinbase)
- [SDK endpoint map](./endpointFunctionList.md)
- [Advanced Trade REST API documentation](https://docs.cdp.coinbase.com/coinbase-app/advanced-trade-apis/rest-api)
- [Advanced Trade WebSocket documentation](https://docs.cdp.coinbase.com/coinbase-app/advanced-trade-apis/websocket/websocket-overview)
- [Coinbase authentication documentation](https://docs.cdp.coinbase.com/coinbase-app/authentication-authorization/api-key-authentication)
- [Siebly glossary](https://siebly.io/reference/glossary)
- [Exchange State](https://siebly.io/reference/exchange-state)
- [Runtime Workflows](https://siebly.io/reference/runtime-workflows)
