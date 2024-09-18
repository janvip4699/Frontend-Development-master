import React from 'react'
import FeaturedCarsCard from './FeaturedCarsCard';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const FeaturedCars = () => {

    const SlideLeft=()=>{
        var slider =document.getElementById('slider');
        slider.scrollLeft=slider.scrollLeft-500;
    }
    const SlideRight=()=>{
        var slider= document.getElementById('slider');
        slider.scrollLeft=slider.scrollLeft+500;
    }

    const carsData = [
        {
            id: 0,
            img: "src/assets/images/featuredcar1.webp",
            name: "Mahindra Thar Roxx",
            price: "14.84 Lakh"
        },
        {
            id: 1,
            img: "/src/assets/images/featuredcar2.webp",
            name: "Tata Curvv",
            price: "11.00 Lakh"
        },
        {
            id: 2,
            img: "/src/assets/images/featuredcar3.webp",
            name: "Mahindra XUV 3XO",
            price: "8.53 Lakh"
        },
        {
            id: 3,
            img: "/src/assets/images/featuredcar4.webp",
            name: "Maserati GranTurismo",
            price: "2.72 Crore"
        },
        {
            id: 4,
            img: "/src/assets/images/featuredcar5.webp",
            name: "Maruti Fronx",
            price: "8.39 Lakh"
        },
    ];
    return (
        // <div className='container mt-14'>
        //     <h1 className='font-bold text-4xl'>Featured <span className='text-primary'>Cars</span></h1>
        //     <div className='mt-8 flex gap-4'>

        //             {carsData.map((item) => (
        //                 <FeaturedCarsCard
        //                     key={item.id}
        //                     img={item.img}
        //                     name={item.name}
        //                     price={item.price}
        //                 />
        //             )
        //             )}
                
        //     </div>
        // </div>
        <div className='container mt-14 px-12'>
            <h1 className='font-bold text-4xl'>Featured <span className='text-primary'>Cars</span></h1>
        <IoIosArrowRoundBack size={40} className="bg-gray-200 rounded-full absolute top-20 p-2 z-10 hover:bg-green-500 cursor-pointer opacity-0 group-hover:opacity-100 duration-500" onClick={SlideLeft}/>
        <div id="slider" className="grid grid-flow-col auto-cols-max items-center mt-6 w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide gap-4">
        {carsData.map((item) => (
                        <FeaturedCarsCard
                            key={item.id}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                        />
                    )
                    )}
        </div>
        <IoIosArrowRoundForward size={40} className="bg-gray-200 rounded-full absolute top-20 right-1 translate-x-5 p-2 hover:bg-green-500 cursor-pointer opacity-0 group-hover:opacity-100 duration-500" onClick={SlideRight}/>
        </div>
    )
}

export default FeaturedCars
