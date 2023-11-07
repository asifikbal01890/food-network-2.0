'use client'

import { useState } from "react";

const HomePageSideBar = () => {
    const [value, setValue] = useState<string>('')
    console.log(value);
    return (
        <div className="h-screen w-[300px] p-[15px] bg-white mt-3 mx-[15px] rounded-[15px]">
           <div className="flex items-center justify-between gap-[10px] w-full border-2 border-[#E6552726] rounded-[10px] p-[2px] ">
            <button onClick={() => setValue('Fruits')} className={`${value === 'Fruits'? "text-[#E55527] bg-[#E655271A]" : ""} flex justify-center w-full hover:text-[#E55527] hover:bg-[#E655271A] rounded-[7px] duration-300`}>
                <h1 className="font-medium my-[10px] rounded-[7px]">Fruits</h1>
            </button>
            <button onClick={() => setValue('Vegetables')} className="flex justify-center w-full hover:text-[#E55527] hover:bg-[#E655271A] rounded-[7px] duration-300">
                <h1 className="font-medium my-[10px] rounded-[7px]">Vegetables</h1>
            </button>
            </div> 
        </div>
    );
};

export default HomePageSideBar;