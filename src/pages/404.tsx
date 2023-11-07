import Image from 'next/image';
import img from '../../public/assets/404PageImg.png';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Custom404() {
    return (
      <div className="bg-[#EEF0F2] rounded-ss-[24px] pt-[12px] pl-[15px] h-screen">
        <div className="flex justify-center items-center bg-white p-11 rounded-[10px] w-[1819px] h-[810px]">
            <div>
               <Image
                    src={img}
                    alt="img"
                    width="526.64"
                    height="298.29"
                />
                <h1 className={`${inter.className} text-[28px] font-bold mt-[42px] text-center`}>This Page Is Empty</h1>
            </div>
        </div>
      </div>
    );
  }