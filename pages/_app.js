import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const ropstenChain = {
  id: 3,
  name: 'Ropsten',
  network: 'ropsten',
  iconUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Ropsten',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  },
  blockExplorers: {
    default: { name: 'SnowTrace', url: 'https://ropsten.etherscan.io' },
    etherscan: { name: 'SnowTrace', url: 'https://ropsten.etherscan.io' },
  },
  testnet: false,
};

const { chains, provider } = configureChains(
  [chain.mainnet, ropstenChain],
  [
    alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
    // publicProvider(),
    // jsonRpcProvider({ rpc: chain => ({ http: chain.rpcUrls.default }) })
    jsonRpcProvider({ rpc: chain => ({ http: chain.rpcUrls.default }) })
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({ Component, pageProps }) {
  return <>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig></>
}

export default MyApp
