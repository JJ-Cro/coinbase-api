import { CBAdvancedTradeClient } from '../../../src/index.js';

/**
 * import { CBAdvancedTradeClient } from 'coinbase-api';
 * const { CBAdvancedTradeClient } = require('coinbase-api');
 */

// initialise the client
/**
 *
 * You can add both ED25519 and ECDSA keys, client will recognize both types of keys
 *
 * ECDSA:
 *
 * {
 *   apiKey: 'organizations/your_org_id/apiKeys/your_api_key_id',
 *   apiSecret:
 *     '-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIPT/TTZPxw0kDGvpuCENJp9A4/2INAt9/QKKfyidTWM8oAoGCCqGSM49\nAwEHoUQDQgAEd+cnxrKl536ly5eYBi+8dvXt1MJXYRo+/v38h9HrFKVGBRndU9DY\npV357xIfqeJEzb/MBuk3EW8cG9RTrYBwjg==\n-----END EC PRIVATE KEY-----\n',
 * }
 *
 * ED25519:
 * {
 *   apiKey: 'your-api-key-id',
 *   apiSecret: 'yourExampleApiSecretEd25519Version==',
 * }
 *
 *
 */
const client = new CBAdvancedTradeClient({
  apiKey: process.env.API_KEY_NAME || 'insert_api_key_here',
  apiSecret: process.env.API_PRIVATE_KEY || 'insert_api_secret_here',
});

async function getAccounts() {
  try {
    // Get all accounts
    // List Accounts returns at most 250 per call. Follow cursor while has_next is true.
    let page = await client.getAccounts({ limit: 250 });
    const accounts = [...page.accounts];

    while (page.has_next && page.cursor) {
      page = await client.getAccounts({ limit: 250, cursor: page.cursor });
      accounts.push(...page.accounts);
    }

    console.log('Accounts: ', accounts);
    console.log('Total accounts: ', accounts.length);

    // Get specific account details
    if (accounts.length > 0) {
      const accountId = accounts[0].uuid;
      const accountDetails = await client.getAccount({ account_id: accountId });
      console.log('Account Details: ', accountDetails);
    }
  } catch (e) {
    console.error('Get accounts error: ', e);
  }
}

getAccounts();
