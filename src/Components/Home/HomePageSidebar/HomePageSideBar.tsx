import FruitsList from "@/Components/FruitsList/FruitsList";
import SearchBar from "@/Components/ReUseComponents/SearchBar/SearchBar";
import { useState } from "react";

const HomePageSideBar = ({itemName, setItemName}:any) => {
    const [value, setValue] = useState<string>('Fruits')    
    const homepageSearch:boolean = true;

    return (
        <div className="h-[830px] w-[300px] p-[15px] bg-white mt-3 mx-[15px] rounded-[15px]">
           <div className="flex items-center justify-between gap-[10px] w-full border-2 border-[#E6552726] rounded-[10px] p-[2px] ">
            <button onClick={() => setValue('Fruits')} className={`${value === 'Fruits'? "text-[#E55527] bg-[#E655271A]" : ""} flex justify-center w-full hover:text-[#E55527] hover:bg-[#E655271A] rounded-[7px] duration-300`}>
                <h1 className="font-medium my-[10px] rounded-[7px]">Fruits</h1>
            </button>
            <button onClick={() => setValue('Vegetables')} className={`${value === 'Vegetables'? "text-[#E55527] bg-[#E655271A]" : ""} flex justify-center w-full hover:text-[#E55527] hover:bg-[#E655271A] rounded-[7px] duration-300`}>
                <h1 className="font-medium my-[10px] rounded-[7px]">Vegetables</h1>
            </button>
            </div>
            <div className="my-[15px]">
                <SearchBar homepageSearch={homepageSearch}></SearchBar>
            </div>
            <FruitsList
             itemName={itemName}
             setItemName={setItemName}
            ></FruitsList> 
        </div>
    );
};

export default HomePageSideBar;