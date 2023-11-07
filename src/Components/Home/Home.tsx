import Image from "next/image";
import { BsFacebook, BsThreeDots } from 'react-icons/bs';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { PiStar, PiStarFill } from 'react-icons/pi';
import ImgOne from '../../../public/assets/homePageImage/Thumbnail-01.png';
import ImgTwo from '../../../public/assets/homePageImage/Thumbnail-02.png';
const Home = ({itemName}:any) => {
    return (
        <div className="flex mt-[15px] bg-white p-11 rounded-[10px]">
            <div className="mr-[42px] mt-[60px]">
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
            <div className="flex items-start gap-[30]">
                <div className="w-[482px]">
                    <h1 className="text-[38px] font-black leading-[49px]">Health Benefits Of An {itemName}</h1>
                    <h3 className="mt-[25px] text-lg font-bold leading-7">Supports eye health:</h3>
                    <p className="mt-[10px] text-[15.1px] leading-6">Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                    <h3 className="mt-[25px] text-lg font-bold leading-7">Supports eye health: </h3>
                    <p className="mt-[10px] text-[15.1px] leading-6">Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                </div>
                <div className="!w-[520px] h-[320px]">
                <Image
                    src={ImgOne}
                    alt="menuOneIcon"
                    width="520"
                    height="320"
                    className="!w-[520px] h-[320px]"
                />
                </div>
            </div>
            <h3 className="mt-[42px] text-lg font-bold leading-7">Supports eye health: </h3>
            <p className="text-[15.1px] mt-[10px] leading-6">Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. </p>
            <div className="flex items-center justify-between gap-12 mt-[46px]">
            <Image
                    src={ImgTwo}
                    alt="menuOneIcon"
                    width="520"
                    height="320"
                    className="!w-[520px] h-[320px]"
                />
                <div>
                    <h3 className="text-lg font-bold leading-7">Supports eye health:</h3>
                    <p className="mt-[10px] text-[15px] leading-6">Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy</p>
                </div>
            </div>
            <div className="mt-[62px]">
                <h3 className="text-lg font-black text-[#212121]">Was This Helpful ?</h3>
                <div className="mt-[10px] flex items-center gap-[10px]">
                    <p className="text-[28px] text-[#E55527]"><PiStarFill></PiStarFill></p>
                    <p className="text-[28px] text-[#E55527]"><PiStarFill></PiStarFill></p>
                    <p className="text-[28px] text-[#E55527]"><PiStarFill></PiStarFill></p>
                    <p className="text-[28px] text-[#E55527]"><PiStarFill></PiStarFill></p>
                    <p className="text-[28px] text-[#E55527]"><PiStar></PiStar></p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;