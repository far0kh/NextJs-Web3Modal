import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'
// import { mainnet, sepolia } from '@wagmi/core/chains'

import { defineChain } from 'viem'
const victestnet = defineChain({
  id: 89,
  name: 'Viction Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'VIC',
    symbol: 'VIC'
  },
  rpcUrls: {
    default: {
      http: ['https://rpc-testnet.viction.xyz/'],
      // webSocket: ['wss://bsc-ws-node.nariox.org:443']
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https:/testnet.vicscan.xyz' },
  },
  contracts: {
    // multicall3: {
    //   address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    //   blockCreated: 5882,
    // },
  },
})

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) throw new Error('Project ID is not defined')

export const config = defaultWagmiConfig({
  projectId,
  chains: [victestnet],
  metadata: {
    name: 'My App',
    description: 'My app description',
    url: 'http://localhost:3000/',
    icons: ['http://localhost:3000/favicon.ico']
  },
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true
})
