import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from '@/components/Header/header'
import Footer from '@/components/Footer/footer'
import Herosection from '@/components/Herosection/herosection'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
   
  return (
    <main className={styles.main}>
      <Header/>
      <br/>
      <Herosection/>
      <br/>
      <Footer/>
    </main>
  )
}
