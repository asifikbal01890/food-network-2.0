import { Inter } from 'next/font/google'
import HomePageSideBar from '@/Components/Home/HomePageSidebar/HomePageSideBar'
import Home from '@/Components/Home/Home'
import HomePageRightSideBar from '@/Components/Home/HomePageRightSideBar/HomePageRightSideBar'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function main() {
  const [itemName, setItemName] = useState<string>('Avocado')
  return (
    <div className={`${inter.className} bg-[#EEF0F2] flex rounded-ss-[24px]`}>
      <div>
        <HomePageSideBar
        itemName={itemName}
        setItemName={setItemName}
        ></HomePageSideBar>
      </div>
      <div>
        <Home itemName={itemName}></Home>
      </div>
      <div>
        <HomePageRightSideBar/>
      </div>
    </div>
  )
}
