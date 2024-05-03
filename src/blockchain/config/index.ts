import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { cookieStorage, createStorage, http } from 'wagmi';
import { mainnet, bscTestnet, sepolia } from 'wagmi/chains';
import { viction, vicTestnet, shardeum } from '@/blockchain/networks';

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
if (!projectId) throw new Error('Project ID is not defined');

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: `${process.env.NEXT_APP_URL}`,
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

export const wagmiConfig = defaultWagmiConfig({
  chains: [mainnet, sepolia, bscTestnet, viction, vicTestnet, shardeum], // required
  projectId, // required
  metadata, // required
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [bscTestnet.id]: http('https://data-seed-prebsc-1-s1.binance.org:8545'),
    [viction.id]: http(),
    [vicTestnet.id]: http(),
    [shardeum.id]: http(),
  },
  storage: createStorage({
    storage: cookieStorage,
  }),
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true, // Optional - true by default
});
