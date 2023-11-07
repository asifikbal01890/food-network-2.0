import SideNavBar from '@/Components/NavBar/SideNavBar/SideNavBar'
import TopNavBar from '@/Components/NavBar/TopNavBar/TopNavBar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className='bg-white'>
    <div className='fixed z-50 w-full bg-white'>
    <TopNavBar></TopNavBar>
    </div>
    <div className='flex'>
   <div className='fixed z-40 h-full bg-white'>
   <SideNavBar></SideNavBar>
   </div>
   <div className='mt-[55px] ml-[55px] rounded-[240px] pt-[15px] pl-[15px] w-full'>
    <Component {...pageProps} />
   </div>
    </div>
  </div>
}
