import Image from 'next/image';
import homeIconOne from '../../../../public/assets/home-01.svg';
import homeIconTwo from '../../../../public/assets/home-02.svg';
import dashboardIconOne from '../../../../public/assets/dashboard-circle-01.svg';
import dashboardIconTwo from '../../../../public/assets/dashboard-circle-02.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const SideNavBar = () => {
    const pathName:string = usePathname();

    const isMenuItemActive = (path:string) => pathName === path;

    return (
        <div className='lg:h-screen flex items-center justify-center lg:w-[70px] bg-white z-40 py-[10px] lg:py-0 px-6 lg:px-0 w-full'>
             <div className='lg:block flex items-center gap-[35px] '>
             <Link href={'/'} >
                <div className={`pl-[6.5px] pt-[6.5px] pr-[7.5px] pb-[7.5px] border-2 border-[#E655271A] bg-[#E655271A] rounded-[6px] ${isMenuItemActive(`/`)? "block": "hidden"}`}>
                  <Image
                     src={homeIconOne}
                     alt="menuOneIcon"
                     width="22"
                     height="22"
                  />
                </div>
                <div className={`pl-[6.5px] pt-[6.5px] pr-[7.5px] pb-[7.5px] bg-[#1010100D] border-2 border-[#10101000] hover:border-[#E655271A] hover:bg-[#E655271A] rounded-[6px] duration-300 ${isMenuItemActive(`/`)? "hidden": "block"}`}>
                  <Image
                     src={homeIconTwo}
                     alt="menuOneIcon"
                     width="22"
                     height="22"
                  />
                </div>
                </Link>
                <Link href={'/dashboard'}>
                <div className={`lg:mt-[35px] pl-[6.5px] pt-[6.5px] pr-[7.5px] pb-[7.5px] border-2 border-[#E655271A] bg-[#E655271A] rounded-[6px] ${isMenuItemActive(`/dashboard`)? "block": "hidden"}`}>
                  <Image
                     src={dashboardIconTwo}
                     alt="menuOneIcon"
                     width="22"
                     height="22"
                  />
                </div>
                <div className={`lg:mt-[35px] pl-[6.5px] pt-[6.5px] pr-[7.5px] pb-[7.5px] bg-[#1010100D] border-2 border-[#10101000] hover:border-[#E655271A] hover:bg-[#E655271A] rounded-[6px] duration-300 ${isMenuItemActive(`/dashboard`)? "hidden": "block"}`}>
                  <Image
                     src={dashboardIconOne}
                     alt="menuOneIcon"
                     width="22"
                     height="22"
                  />
                </div>
                </Link>
             </div>
        </div>
    );
};

export default SideNavBar;