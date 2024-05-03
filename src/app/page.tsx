'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { formatUnits, parseUnits } from 'viem';
import ConnectButton from '@/components/ConnectButton';
import { useTokenRead, useTokenWrite } from '@/blockchain/hooks';
import toast from 'react-hot-toast';

export default function Home() {
  const { address } = useAccount();
  const [recipient, setRecipient] = useState('');
  const tokenName = useTokenRead<string>('name');
  const tokenBalance = useTokenRead<bigint>('balanceOf', [address]);
  const tokenDecimals = useTokenRead<bigint>('decimals');
  const tokenSymbol = useTokenRead<string>('symbol');

  const tokenTransfer = useTokenWrite('transfer', {
    onSuccess(data) {
      console.log('data: transfer write ', data);
    },
  });

  const tokenNameData = tokenName.data;
  const tokenDecimalsData = Number(tokenDecimals.data);
  const tokenBalanceData = formatUnits(tokenBalance.data || BigInt(0), tokenDecimalsData);
  const tokenSymbolData = tokenSymbol.data as string;

  const handleTransfer = async () => {
    if (!recipient) return toast.error('Please enter recipient address');
    const amount = parseUnits('10', tokenDecimalsData);
    await tokenTransfer.write([recipient, amount]);
    toast.success('Transfer successful');
  };

  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex flex-col gap-5 items-center w-full h-full justify-center bg-gradient-to-b from-[#000000] to-[#242543] bg-fixed"
      >
        <ConnectButton />

        {address ? (
          <div className="">
            <p>
              Token Balance: <span className="text-green-500 font-bold">{tokenBalanceData}</span>
            </p>
            <p>
              Token Name: <span className="text-green-500 font-bold">{tokenNameData}</span>
            </p>
            <p>
              Token Decimals: <span className="text-green-500 font-bold">{tokenDecimalsData} </span>
            </p>
            <p>
              Token Symbol: <span className="text-green-500 font-bold">{tokenSymbolData}</span>
            </p>
          </div>
        ) : (
          <p className="text-red-500">Connect Your Wallet</p>
        )}

        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Enter recipient address"
            className="p-2 border-none rounded-md focus:outline-cyan-300 text-black"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
          <button className="border-cyan-700 border-2 rounded-md px-3 py-1" onClick={handleTransfer}>
            Transfer
          </button>
        </div>
      </div>
    </main>
  );
}
