import Image from "next/image";
import oranges from '../../../public/assets/fruitsImg/oranges.png';
import apple from '../../../public/assets/fruitsImg/apple.png';
import avocado from '../../../public/assets/fruitsImg/avocado.png';
import carrots from '../../../public/assets/vegetables/carrots.png';
import broccoli from '../../../public/assets/vegetables/broccoli.png';
import spinach from '../../../public/assets/vegetables/spinach.png';
import FruitCard from "./FruitCard";


const FruitsList = ({ itemName, setItemName, value, isOpen}:any) => {

    const fruitsInfo = [
        {
            name: 'Orange',
            photo: oranges,
            vitamin: 'Vitamin C',
            bgColor: 'bg-[#FFA42847]'
        },
        {
            name: 'Apple',
            photo: apple,
            vitamin: 'Vitamin C',
            bgColor: 'bg-[#DD4C4126]'
        },
        {
            name: 'Avocado',
            photo: avocado,
            vitamin: 'Vitamin B6',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: 'Strawberries',
            photo: avocado,
            vitamin: 'Vitamin C',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: 'Mangoes',
            photo: avocado,
            vitamin: 'Vitamin A, C',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: 'Blueberries',
            photo: avocado,
            vitamin: 'Vitamin C, K',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: 'Grapes',
            photo: avocado,
            vitamin: 'Vitamin C, K',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: 'Pineapples',
            photo: avocado,
            vitamin: 'Vitamin C,K',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: 'Papayas',
            photo: avocado,
            vitamin: 'Vitamin C,K',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: 'Papayas',
            photo: avocado,
            vitamin: 'Vitamin C,K',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: 'Papayas',
            photo: avocado,
            vitamin: 'Vitamin C,K',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: 'Papayas',
            photo: avocado,
            vitamin: 'Vitamin C,K',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: 'Papayas',
            photo: avocado,
            vitamin: 'Vitamin C,K',
            bgColor: 'bg-[#687F2A26]'
        },
    ]

    const vegetablesInfo= [
        {
            name: "Carrots",
            photo: carrots,
            vitamin: 'Vitamin C',
            bgColor: 'bg-[#FFA42847]'
        },
        {
            name: "Broccoli",
            photo: broccoli,
            vitamin: 'Vitamin C',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: "Spinach",
            photo: spinach,
            vitamin: 'Vitamin B6',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: "Tomatoes",
            photo: spinach,
            vitamin: 'Vitamin C',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: "Cucumbers",
            photo: spinach,
            vitamin: 'Vitamin A, C',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: "Bell Peppers",
            photo: spinach,
            vitamin: 'Vitamin C, K',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: "Zucchini",
            photo: spinach,
            vitamin: 'Vitamin C, K',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: "Onions",
            photo: spinach,
            vitamin: 'Vitamin C, K',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: "Potatoes",
            photo: spinach,
            vitamin: 'Vitamin C, K',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: "Potatoes",
            photo: spinach,
            vitamin: 'Vitamin C, K',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: "Potatoes",
            photo: spinach,
            vitamin: 'Vitamin C, K',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: "Potatoes",
            photo: spinach,
            vitamin: 'Vitamin C, K',
            bgColor: 'bg-[#687F2A26]'
        },
        {
            name: "Potatoes",
            photo: spinach,
            vitamin: 'Vitamin C, K',
            bgColor: 'bg-[#687F2A26]'
        },
    ]

    return (
        <div className="bg-white">
            <h1 className="text-sm font-medium mb-[10px] text-[#101010]">{value} List</h1>
          {value === 'Fruits' &&
             <div className={`${isOpen? "h-[600px]" : "h-[640px]"} -mr-2 overflow-y-scroll pr-2`}>
             {
              fruitsInfo?.map((fruit:any, i:number) => <FruitCard
              key={i}
              fruit={fruit}
              itemName={itemName}
              setItemName={setItemName}
              />)
             }
             </div>
          }
          {value === 'Vegetables' &&
             <div className={`${isOpen? "h-[600px]" : "h-[640px]"} overflow-y-scroll -mr-2 pr-2`}>
             {
              vegetablesInfo?.map((fruit:any, i:number) => <FruitCard
              key={i}
              fruit={fruit}
              itemName={itemName}
              setItemName={setItemName}
              />)
             }
             </div>
          }
        </div>
    );
};

export default FruitsList;