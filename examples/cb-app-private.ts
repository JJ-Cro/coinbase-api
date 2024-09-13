import { CBAppClient } from '../src/index.js';

async function main() {
  const client = new CBAppClient({
    // cdpApiKey: credsTradePermission,
    apiKeyName: '',
    apiPrivateKey: '',
  });

  const res = await client.getAccounts();
  console.log(res);
}

main();