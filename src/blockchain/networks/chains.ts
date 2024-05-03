import { defineChain } from 'viem'

export const viction = defineChain({
  id: 88,
  name: 'Viction',
  nativeCurrency: {
    decimals: 18,
    name: 'VIC',
    symbol: 'VIC'
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.viction.xyz/'],
      // webSocket: ['wss://bsc-ws-node.nariox.org:443']
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://vicscan.xyz' },
  },
  contracts: {
    // multicall3: {
    //   address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    //   blockCreated: 5882,
    // },
  },
});

export const vicTestnet = defineChain({
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
});

export const shardeum = defineChain({
  id: 8082,
  name: 'Shardeum Sphinx 1.X',
  nativeCurrency: {
    decimals: 18,
    name: 'SHM',
    symbol: 'SHM'
  },
  rpcUrls: {
    default: {
      http: ['https://sphinx.shardeum.org/'],
      // webSocket: ['wss://bsc-ws-node.nariox.org:443']
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://explorer-sphinx.shardeum.org/' },
  },
  contracts: {
    // multicall3: {
    //   address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    //   blockCreated: 5882,
    // },
  },
});

export const chainImages = {
  88: '/vic-icon.svg',
  89: '/vic-icon.svg',
  8082: '/shm-icon.svg',
}
