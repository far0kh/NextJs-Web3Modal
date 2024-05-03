import ConnectButton from '@/components/ConnectButton'

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex flex-col gap-5 items-center w-full h-full justify-center bg-gradient-to-b from-[#000000] to-[#242543] bg-fixed"
      >
        <ConnectButton />
      </div>
    </main>
  )
}
