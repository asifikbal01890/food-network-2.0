import SideNavBar from '@/Components/NavBar/SideNavBar/SideNavBar'
import TopNavBar from '@/Components/NavBar/TopNavBar/TopNavBar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <div className='bg-white text-[#212121]'>
    <div className='fixed z-50 w-full bg-white'>
    <TopNavBar></TopNavBar>
    </div>
    <div className='flex'>
   <div className='fixed z-40 h-full bg-white'>
   <SideNavBar></SideNavBar>
   </div>
   <div className='mt-[55px] ml-[55px] rounded-[24px] pt-[15px] pl-[15px] w-full '>
    <Component className={`${inter.className} `} {...pageProps} />
   </div>
    </div>
  </div>
}
