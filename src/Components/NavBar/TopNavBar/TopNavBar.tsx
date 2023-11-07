import Image from "next/image";
import logo from '../../../../public/assets/food-network-logo.png';
import sunIcon from '../../../../public/assets/sun-01.svg';
import nintendoIcon from '../../../../public/assets/nintendo-switch.svg';
import menuOneIcon from '../../../../public/assets/menu-01.svg';
import SearchBar from "@/Components/ReUseComponents/SearchBar/SearchBar";
import { BiSearch } from "react-icons/bi";

const TopNavBar = () => {
    const homepageSearch:boolean = false
    return (
        <div className="max-w-[1920px] flex justify-between items-center my-[10px] mx-[15px]">
            {/* left side */}
            <div className="ml-[9px]">
                <Image
                 src={logo}
                  alt="Logo"
                  width="76.6"
                  height="38"
                />
            </div> 

            {/* middle component */}
            <div className="lg:block hidden">
                <SearchBar homepageSearch={homepageSearch}></SearchBar>
            </div>

            {/* right side */}
            <div className="flex gap-6">
               <button className="border-2 border-[#E655271A] bg-[#E655271A] p-[6px] rounded-[6px] hidden lg:block">
                  <Image
                     src={sunIcon}
                     alt="sunIcon"
                     width="20"
                     height="20"
                  />
                </button>
               <button className="border-2 border-[#E655271A] bg-[#E655271A] p-[6px] rounded-[6px] hidden lg:block">
                  <Image
                     src={nintendoIcon}
                     alt="nintendoIcon"
                     width="20"
                     height="20"
                  />
                </button>
                <button type='submit' className='text-2xl text-[#E55527] bg-[#E655271A] rounded-[6px] border-2 border-[#E655271A] p-[6px] block lg:hidden'>
                    <BiSearch></BiSearch>
                </button>
               <button className="border-2 border-[#1010101A] bg-[#1010101A] p-[6px] rounded-[6px]">
                  <Image
                     src={menuOneIcon}
                     alt="menuOneIcon"
                     width="20"
                     height="20"
                  />
                </button>
            </div>
        </div>
    );
};

export default TopNavBar;