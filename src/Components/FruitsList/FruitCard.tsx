import Image from "next/image";

const FruitCard = ({fruit, itemName, setItemName}:any) => {
    return (
        <div onClick={() => setItemName(fruit?.name)} className={`${itemName === fruit?.name? "border-[#E55527]" : ""} flex items-center gap-[15px] border-[1.5px] hover:border-[#E55527] rounded-[10px] py-2 px-[10px] mb-[8px]`}>
           <div className="relative">
            <div className={`bg-[${fruit?.bgColor}] origin-center rotate-45 rounded-[11px] h-[40.28px] w-[40.28px]`}>
            </div>
                <Image
                className="absolute top-0"
                    src={fruit?.photo}
                    alt="menuOneIcon"
                    width="42.52"
                    height="42.52"
                />
           </div>
           <div>
            <h1 className="text-sm font-medium text-[#101010]">{fruit?.name}</h1>
            <p className="text-xs text-[#101010B2] mt-2">{fruit?.vitamin}</p>
           </div>
           </div>
    );
};

export default FruitCard;