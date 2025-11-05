// instrumentation.ts
import { setGlobalDispatcher, ProxyAgent /* or ProxyAgent */ } from 'undici';

export function register() {
  // Reads HTTP(S)_PROXY and NO_PROXY automatically
//   const agent = new EnvHttpProxyAgent();
  setGlobalDispatcher(new ProxyAgent({
      uri: process.env.HTTPS_PROXY ?? process.env.HTTP_PROXY ?? 'http://localhost:3128',
      // Disable cert verification for the upstream server reached through the proxy:
      requestTls: { rejectUnauthorized: false },
      // If your proxy itself is HTTPS and has a custom cert, you'd use:
      // proxyTls:   { rejectUnauthorized: false },
    }));

  // If you prefer to be explicit, use:
  // setGlobalDispatcher(new ProxyAgent(process.env.HTTPS_PROXY ?? 'http://localhost:3128'));
}