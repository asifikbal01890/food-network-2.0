import { Inter } from 'next/font/google'
import HomePageSideBar from '@/Components/Home/HomePageSidebar/HomePageSideBar'
import Home from '@/Components/Home/Home'
import HomePageRightSideBar from '@/Components/Home/HomePageRightSideBar/HomePageRightSideBar'
import { useState } from 'react'
import foodMenuIcon from '../../public/assets/foodItemIcon.svg';
import Image from 'next/image'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const inter = Inter({ subsets: ['latin'] })

export default function main() {
  const [itemName, setItemName] = useState<string>('Avocado')
  const [isOpen, setIsOpen] = useState<boolean>(false)


  return (
    <div className={`${inter.className} bg-[#EEF0F2] flex rounded-ss-[24px]`}>

      {/* for laptop view */}
      <div className='hidden lg:block'>
        <HomePageSideBar
        itemName={itemName}
        setItemName={setItemName}
        ></HomePageSideBar>
      </div>
      
      <div className={`${isOpen? "block z-40 absolute left-[-14px] top-[-12px] bg-[#101010A6] w-full h-screen": "hidden"}`}>
        <div className='relative'>
        <div className='flex justify-between absolute top-0 left-0 modal-animation w-[300px]'>
        <HomePageSideBar
        itemName={itemName}
        setItemName={setItemName}
        isOpen={isOpen}
        ></HomePageSideBar>
        <div onClick={()=>setIsOpen(false)} className='w-[50px]'>
        </div>
        </div>
        </div>
      </div>
      <div>

         {/* for movie device */}
      <div onClick={() => setIsOpen(!isOpen)} className='flex items-center justify-between lg:hidden mt-4 bg-white px-[15px] py-[10px] rounded-[8px]'>
        <div className='flex items-center gap-[10px]'>
          <Image
            src={foodMenuIcon}
            alt="foodMenuIcon"
            width="20"
            height="20"
          />
          <h3 className='text-xs font-semibold'>Select Food Item</h3>
        </div>
        <button className="text-[17px]"><IoIosArrowDown></IoIosArrowDown></button>
      </div>

        <Home itemName={itemName}></Home>
      </div>
      <div className='hidden lg:block'>
        <HomePageRightSideBar/>
      </div>
    </div>
  )
}
