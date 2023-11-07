import Image from "next/image";
import oranges from '../../../public/assets/fruitsImg/oranges.png';
import apple from '../../../public/assets/fruitsImg/apple.png';
import Avocado from '../../../public/assets/fruitsImg/avocado.png';
const FruitsList = () => {
    return (
        <div className="h-screen w-[300px] p-[15px] bg-white mx-4">
            <h1 className="text-sm font-medium mb-[10px] text-[#101010]">Fruits List</h1>
           <div className="flex items-center gap-[15px] border-[1.5px] border-[#E55527] rounded-[10px] py-2 px-[10px]">
           <div className="relative">
            <div className="bg-[#FFA42847] origin-center rotate-45 rounded-[11px] h-[40.28px] w-[40.28px]">
            </div>
                <Image
                className="absolute top-0"
                    src={oranges}
                    alt="menuOneIcon"
                    width="42.52"
                    height="42.52"
                />
           </div>
           <div>
            <h1 className="text-sm font-medium text-[#101010]">Oranges</h1>
            <p className="text-xs text-[#101010B2] mt-2">Vitamin C</p>
           </div>
           </div>
        </div>
    );
};

export default FruitsList;