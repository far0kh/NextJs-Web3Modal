'use client';

import React, { ReactNode } from 'react';
import { wagmiConfig, projectId } from '@/blockchain/config';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { State, WagmiProvider } from 'wagmi';
import { chainImages } from '@/blockchain/networks';

const queryClient = new QueryClient();

if (!projectId) throw new Error('Project ID is not defined');

createWeb3Modal({
  wagmiConfig,
  projectId,
  themeMode: 'dark',
  // themeVariables: {
  //   "--w3m-accent": "cyan",
  //   "--w3m-border-radius-master": "0px"
  // },
  chainImages: chainImages
});

export function Web3Modal({ children, initialState }: { children: ReactNode; initialState?: State }) {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
