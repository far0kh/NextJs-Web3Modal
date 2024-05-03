'use client'

import { useWeb3Modal } from "@web3modal/wagmi/react"
import { useAccount, useDisconnect } from "wagmi"

export default function CustomButton() {
  const { open } = useWeb3Modal()
  const { isConnected } = useAccount()
  const { disconnect } = useDisconnect()

  if (isConnected) {
    return (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => disconnect()}
      >
        Disconnect
      </button>)
  }
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={() => open()}
    >
      Get Started
    </button>)
}
