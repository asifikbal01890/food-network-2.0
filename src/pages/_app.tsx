import SideNavBar from '@/Components/NavBar/SideNavBar/SideNavBar'
import TopNavBar from '@/Components/NavBar/TopNavBar/TopNavBar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div>
     <TopNavBar></TopNavBar>
    <div className='flex'>
    <SideNavBar></SideNavBar>
    <Component {...pageProps} />
    </div>
  </div>
}
