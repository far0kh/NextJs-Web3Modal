import ConnectButton from '@/components/ConnectButton'
import styles from './page.module.css'
import CustomButton from '@/components/CustomButton'

export default function Home() {
  return (
    <main className={styles.main}>
      <ConnectButton />
      <CustomButton />
    </main>
  )
}
