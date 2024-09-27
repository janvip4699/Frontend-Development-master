import React from "react";

function FeaturedCategoriesCards(props)
{
    return(
        <>
            <div className="w-[140px] rounded-lg mx-4 px-3 py-1 ease-in-out duration-500 hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: `${props.catBgColor}`}}>
                <img className="w-[90px] mx-auto hover:scale-125 ease-in-out duration-300" src={props.catImg} alt="Category Image"/>
                <div className="py-4">
                    <div className="font-bold text-[15px] mb-2 text-center">
                        {props.catTitle}
                    </div>
                    <p className="text-gray-700 text-base text-center">
                        {props.catItemCount} Items
                    </p>
                </div>

            </div>
        </>
    )
}
export default FeaturedCategoriesCards