import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import tIcon from '../../../../public/assets/text-square.svg';
import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import RangeComponent from "@/Components/ReUseComponents/Range/RangeComponent";
import SelectInput from "@/Components/ReUseComponents/SelectInput/SelectInput";
import Switch from "react-switch";

const HomePageRightSideBar = () => {

    const [hide, setHide] =useState<boolean>(true)
    const [values, setValues] = useState([19]);
    const [toggle, setToggle] = useState(false)

    return (
        <div className="w-[300px] bg-white rounded-[10px] p-[15px] m-[15px]">
            <div className="border-[1.5px] rounded-[9px] border-[#1010101A] p-[10px]">
                <div className="flex justify-between items-center">
                  <div className="flex gap-[15px]">
                  <Image
                    src={tIcon}
                    alt="TextIcon"
                    width="20"
                    height="20"
                  />
                  <h3 className="text-sm text-[#E55527] font-semibold">Settings</h3>
                  </div>
                  <button onClick={() => setHide(!hide)} className="text-[17px] text-[#E55527]">
                    {
                        !hide?
                        <IoIosArrowUp></IoIosArrowUp>
                        :
                        <IoIosArrowDown></IoIosArrowDown>
                    }
                    </button>
                </div>
                <div className={`${!hide? "hidden" : "block"}`}>
                <div className="flex items-center justify-between font-medium mt-6">
                    <h3 className="text-sm">Paragraph font size</h3>
                    <p className="text-xs text-[#E55527]">{values[0]}</p>
                </div>
                <div>
                    <RangeComponent
                    values={values}
                    setValues={setValues}
                    />
                </div>
                <h3 className="text-sm font-medium mb-[10px]">Choose Vitamin Type</h3>
                <SelectInput></SelectInput>
                <div className="flex items-center justify-between mt-[25px]">
                    <h3 className="text-sm font-medium">Turn {toggle? "On" : "Off"} Subtitle</h3>
                    <label>
                        <Switch 
                        onChange={()=> setToggle(!toggle)} 
                        checked={toggle} 
                        onColor='#E55527'
                        offColor='#FFFF'
                        offHandleColor='#D9D9D9'
                        width={30}
                        height={14}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        boxShadow='0 0 0px 0px #ffff'
                        activeBoxShadow="0 0 0px 0px #E55527"
                        className="border-2"
                        />
                    </label>
                </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageRightSideBar;