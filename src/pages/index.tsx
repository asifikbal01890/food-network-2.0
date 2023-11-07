import { Inter } from 'next/font/google'
import HomePageSideBar from '@/Components/Home/HomePageSidebar/HomePageSideBar'
import Home from '@/Components/Home/Home'
import HomePageRightSideBar from '@/Components/Home/HomePageRightSideBar/HomePageRightSideBar'

const inter = Inter({ subsets: ['latin'] })

export default function main() {
  return (
    <div className="bg-[#EEF0F2] flex">
      <div>
        <HomePageSideBar></HomePageSideBar>
      </div>
      <div>
        <Home></Home>
      </div>
      <div>
        <HomePageRightSideBar/>
      </div>
    </div>
  )
}
