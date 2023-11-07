import Image from "next/image";
import oranges from '../../../public/assets/fruitsImg/oranges.png';
import apple from '../../../public/assets/fruitsImg/apple.png';
import avocado from '../../../public/assets/fruitsImg/avocado.png';
import FruitCard from "./FruitCard";


const FruitsList = ({ itemName, setItemName}:any) => {

    const fruitsInfo = [
        {
            name: 'Orange',
            photo: oranges,
            vitamin: 'Vitamin C',
            bgColor: '#FFA42847'
        },
        {
            name: 'Apple',
            photo: apple,
            vitamin: 'Vitamin C',
            bgColor: '#DD4C4126'
        },
        {
            name: 'Avocado',
            photo: avocado,
            vitamin: 'Vitamin B6',
            bgColor: '#687F2A26'
        },
        {
            name: 'Strawberries',
            photo: avocado,
            vitamin: 'Vitamin C',
            bgColor: '#687F2A26'
        },
        {
            name: 'Mangoes',
            photo: avocado,
            vitamin: 'Vitamin A, C',
            bgColor: '#687F2A26'
        },
        {
            name: 'Blueberries',
            photo: avocado,
            vitamin: 'Vitamin C, K',
            bgColor: '#687F2A26'
        },
        {
            name: 'Grapes',
            photo: avocado,
            vitamin: 'Vitamin C, K',
            bgColor: '#687F2A26'
        },
        {
            name: 'Pineapples',
            photo: avocado,
            vitamin: 'Vitamin C,K',
            bgColor: '#687F2A26'
        },
        {
            name: 'Papayas',
            photo: avocado,
            vitamin: 'Vitamin C,K',
            bgColor: '#687F2A26'
        },
        {
            name: 'Papayas',
            photo: avocado,
            vitamin: 'Vitamin C,K',
            bgColor: '#687F2A26'
        },
        {
            name: 'Papayas',
            photo: avocado,
            vitamin: 'Vitamin C,K',
            bgColor: '#687F2A26'
        },
        {
            name: 'Papayas',
            photo: avocado,
            vitamin: 'Vitamin C,K',
            bgColor: '#687F2A26'
        },
        {
            name: 'Papayas',
            photo: avocado,
            vitamin: 'Vitamin C,K',
            bgColor: '#687F2A26'
        },
    ]

    return (
        <div className="bg-white">
            <h1 className="text-sm font-medium mb-[10px] text-[#101010]">Fruits List</h1>
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
        </div>
    );
};

export default FruitsList;