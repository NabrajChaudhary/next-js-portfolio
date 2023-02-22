import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SocialMedia from '@/components/SocialMedia'
import type { AppProps } from 'next/app'
import '@/styles/globals.scss'
import 'remixicon/fonts/remixicon.css'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Navbar/>
      <section className="bg-primary px-40 pt-[50px] sm:px-5">
      <Component {...pageProps} />
      <SocialMedia/>
      <Footer/>
      </section>
    </>
  )
}
