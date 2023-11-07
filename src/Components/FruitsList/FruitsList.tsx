import Image from "next/image";
import oranges from '../../../public/assets/fruitsImg/oranges.png';
import apple from '../../../public/assets/fruitsImg/apple.png';
import avocado from '../../../public/assets/fruitsImg/avocado.png';
import carrots from '../../../public/assets/vegetables/carrots.png';
import broccoli from '../../../public/assets/vegetables/broccoli.png';
import spinach from '../../../public/assets/vegetables/spinach.png';
import FruitCard from "./FruitCard";


const FruitsList = ({ itemName, setItemName, value}:any) => {
console.log(value);
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
            bgColor: 'bg-[#FFA42847]'
        },
        {
            name: "Spinach",
            photo: spinach,
            vitamin: 'Vitamin B6',
            bgColor: 'bg-[#FFA42847]'
        },
        {
            name: "Tomatoes",
            photo: spinach,
            vitamin: 'Vitamin C',
            bgColor: 'bg-[#FFA42847]'
        },
        {
            name: "Cucumbers",
            photo: spinach,
            vitamin: 'Vitamin A, C',
            bgColor: 'bg-[#FFA42847]'
        },
        {
            name: "Bell Peppers",
            photo: spinach,
            vitamin: 'Vitamin C, K',
            bgColor: 'bg-[#FFA42847]'
        },
        {
            name: "Zucchini",
            photo: spinach,
            vitamin: 'Vitamin C, K',
            bgColor: 'bg-[#FFA42847]'
        },
        {
            name: "Onions",
            photo: spinach,
            vitamin: 'Vitamin C, K',
            bgColor: 'bg-[#FFA42847]'
        },
        {
            name: "Potatoes",
            photo: spinach,
            vitamin: 'Vitamin C, K',
            bgColor: 'bg-[#FFA42847]'
        },
        {
            name: "Potatoes",
            photo: spinach,
            vitamin: 'Vitamin C, K',
            bgColor: 'bg-[#FFA42847]'
        },
        {
            name: "Potatoes",
            photo: spinach,
            vitamin: 'Vitamin C, K',
            bgColor: 'bg-[#FFA42847]'
        },
        {
            name: "Potatoes",
            photo: spinach,
            vitamin: 'Vitamin C, K',
            bgColor: 'bg-[#FFA42847]'
        },
        {
            name: "Potatoes",
            photo: spinach,
            vitamin: 'Vitamin C, K',
            bgColor: 'bg-[#FFA42847]'
        },
    ]

    return (
        <div className="bg-white">
            <h1 className="text-sm font-medium mb-[10px] text-[#101010]">Fruits List</h1>
          {value === 'Fruits' &&
             <div className="overflow-y-scroll overflow-hidden h-[640px]">
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
             <div className="overflow-y-scroll overflow-hidden h-[640px]">
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