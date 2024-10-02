import React from "react";
import FeaturedItems from "./FeaturedItems";
import FeaturedCategoriesCards from "./FeaturedCategoriesCards";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

function FeaturedCategories()
{
    const SlideLeft=()=>{
        var slider =document.getElementById('slider');
        slider.scrollLeft=slider.scrollLeft-500;
    }
    const SlideRight=()=>{
        var slider= document.getElementById('slider');
        slider.scrollLeft=slider.scrollLeft+500;
    }
    
    return(
        
        <>
            <div className="mt-2 py-5 px-5 group mb-5">
                <div className="flex flex-row">
                    <h1 className="text-3xl">Featured Categories</h1>
                    <ul className="list-none flex flex-row mt-2 ms-24">
                        <li className="mx-2">Cake & Milk</li>
                        <li className="mx-2">Coffees & Teas</li>
                        <li className="mx-2">Pet Foods</li>
                        <li className="mx-2">Vegetables</li>
                    </ul>
                </div>
                <div className="relative">
                <IoIosArrowRoundBack size={40} className="bg-gray-200 rounded-full absolute top-20 p-2 z-10 hover:bg-green-500 cursor-pointer opacity-0 group-hover:opacity-100 duration-500" onClick={SlideLeft}/>
                <div id="slider" className="grid grid-flow-col auto-cols-max items-center mt-6 w-full h-[200px] overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                    {
                        FeaturedItems.map((cat) => (
                            <FeaturedCategoriesCards 
                                key={cat.id}
                                catImg={cat.CategoryImage}
                                catTitle={cat.CategoryTitle}
                                catItemCount={cat.CategoryItemCount}
                                catBgColor={cat.backgroundColor}
                            />
                        ))
                    }
                </div>
                <IoIosArrowRoundForward size={40} className="bg-gray-200 rounded-full absolute top-20 right-1 translate-x-5 p-2 hover:bg-green-500 cursor-pointer opacity-0 group-hover:opacity-100 duration-500" onClick={SlideRight}/>
                </div>
            </div>
        </>
    )
}
export default FeaturedCategories