import Image from "next/image";
import { BsFacebook, BsThreeDots } from 'react-icons/bs';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { PiStar, PiStarFill } from 'react-icons/pi';
import ImgOne from '../../../public/assets/homePageImage/Thumbnail-01.png';
import ImgTwo from '../../../public/assets/homePageImage/Thumbnail-02.png';
const Home = ({itemName}:any) => {
    return (
        <div className="flex mt-[15px] mb-[78px] lg:mb-3 bg-white lg:p-11 px-[12px] py-[15px] rounded-[10px]">
            {/* for laptop view */}
            <div className="mr-[42px] mt-[60px] hidden lg:block">
                <div className="text-white bg-[#1877F2] rounded-full p-[6px]">
                    <BsFacebook></BsFacebook>
                </div>
                <div className="text-white bg-[#2867B2] rounded-full mt-[22px] p-[6px]">
                    <FaLinkedinIn></FaLinkedinIn>
                </div>
                <div className="text-white bg-[#1DA1F2] rounded-full mt-[22px] p-[6px]">
                    <FaTwitter></FaTwitter>
                </div>
                <div className="text-white bg-[#E55527] rounded-full mt-[22px] p-[6px]">
                    <BsThreeDots></BsThreeDots>
                </div>
            </div>
            <div>
            <div className="lg:flex items-start gap-[30]">
                <div className="lg:w-[482px]">
                    <h1 className="lg:text-[38px] text-[24px] font-black lg:leading-[49px]">Health Benefits Of An {itemName}</h1>
                    <h3 className="mt-[25px] text-lg font-bold leading-7">Supports eye health:</h3>
                    <p className="mt-[10px] text-[15.1px] leading-6">Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                    <h3 className="mt-[25px] text-lg font-bold leading-7">Supports eye health: </h3>
                    <p className="mt-[10px] text-[15.1px] leading-6">Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                </div>
                <div className="!w-[520px] h-[320px] hidden lg:block">
                <Image
                    src={ImgOne}
                    alt="menuOneIcon"
                    width="520"
                    height="320"
                    className="!w-[520px] h-[320px]"
                />
                </div>
                <div className="mt-[30px] w-full block lg:hidden">
                <Image
                    src={ImgOne}
                    alt="menuOneIcon"
                    width="306"
                    height="130"
                    className="w-full h-[160px]"
                />
                </div>
            </div>
            <h3 className="lg:mt-[42px] mt-[24px] text-lg font-bold leading-7">Supports eye health: </h3>
            <p className="text-[15.1px] mt-[10px] leading-6">Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. </p>
            <div className="lg:flex items-center justify-between gap-12 lg:mt-[46px] mt-[24px]">
            <Image
                    src={ImgTwo}
                    alt="menuOneIcon"
                    width="520"
                    height="320"
                    className="!w-[520px] h-[320px] hidden lg:block"
                />
            <Image
                    src={ImgTwo}
                    alt="menuOneIcon"
                    width="306"
                    height="130"
                    className="w-full h-[160px] block lg:hidden mb-[24px]"
                />
                <div>
                    <h3 className="text-lg font-bold leading-7">Supports eye health:</h3>
                    <p className="mt-[10px] text-[15px] leading-6">Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy</p>
                </div>
            </div>
            <div className="lg:mt-[62px] mt-11">
                <h3 className="text-lg font-black text-[#212121]">Was This Helpful ?</h3>
                <div className="mt-[10px] flex items-center gap-[10px]">
                    <p className="text-[28px] text-[#E55527]"><PiStarFill></PiStarFill></p>
                    <p className="text-[28px] text-[#E55527]"><PiStarFill></PiStarFill></p>
                    <p className="text-[28px] text-[#E55527]"><PiStarFill></PiStarFill></p>
                    <p className="text-[28px] text-[#E55527]"><PiStarFill></PiStarFill></p>
                    <p className="text-[28px] text-[#E55527]"><PiStar></PiStar></p>
                </div>
            </div>
            {/* for mobile device */}
            <div className="flex items-center gap-[22px] mt-[24px] lg:hidden">
                <div className="text-white bg-[#1877F2] rounded-full p-[6px]">
                    <BsFacebook></BsFacebook>
                </div>
                <div className="text-white bg-[#2867B2] rounded-full p-[6px]">
                    <FaLinkedinIn></FaLinkedinIn>
                </div>
                <div className="text-white bg-[#1DA1F2] rounded-full p-[6px]">
                    <FaTwitter></FaTwitter>
                </div>
                <div className="text-white bg-[#E55527] rounded-full p-[6px]">
                    <BsThreeDots></BsThreeDots>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;