import React from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {
    return (
        <div className='w-[371px] relative'>
            <input type="text"
             placeholder='Search Best Food'
             className='rounded-[9px] border-[#F0F2F4] border-2 w-full py-1 pl-[15px] pr-1 text-[#101010] focus-visible:outline-0 focus:border-[#e6542750] placeholder:text-[#101010] h-12' />
             <button type='submit' className='text-2xl text-[#E55527] bg-[#E655271A] rounded-[6px] border-2 border-[#E655271A] p-1 absolute right-[6px] top-[6px]'>
                <BiSearch></BiSearch>
             </button>
        </div>
    );
};

export default SearchBar;