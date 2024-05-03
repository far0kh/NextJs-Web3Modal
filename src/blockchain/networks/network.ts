import type { Network, Networks } from '@/lib/types/network';

const networks: Networks = {
  1: {
    contract: '0x123410253',
    token: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  },
  97: {
    contract: '0x123410253',
    token: '0xFa60D973F7642B748046464e165A65B7323b0DEE',
  },
  11155111: {
    contract: '0x123410253',
    token: '0xd2880f53445D10F023bc958CB5C80a09b40F0c9c',
  },
  88: {
    contract: '0x123410253',
    token: '0x7262fa193e9590B2E075c3C16170f3f2f32F5C74',
  },
  89: {
    contract: '0x123410253',
    token: '0xdbf3CDb8Eed6d143b667B59EE15dE49A68D6DC1f',
  },
  8082: {
    contract: '0x123410253',
    token: '0xd2880f53445D10F023bc958CB5C80a09b40F0c9c',
  },
};

export const getNetwork = (chainId?: number): Network => {
  if (chainId === undefined || !networks[chainId]) {
    return networks[97];
  }
  return networks[chainId];
};
