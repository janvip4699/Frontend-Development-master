import React, { useState,useEffect } from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const Sliders = [
        {
            url: "https://allveg.in/public/uploads/all/FicqwMxJLRHz6uoScaszffnMCUemTGDcmy02rNXb.png",
            maintext: "Don't miss amazing grocery deals",
            subtext: "Sign up for daily news letter"
        },
        {
            url: "https://allveg.in/public/uploads/all/fj0n4WrO4D2LDRjdUUZJW099wPLgNkGzzPz0oF32.png",
            maintext: "Fresh Vegetables Big Discount",
            subtext: "Save up to 50% off on your first order"
        },
    ];
    useEffect(() => {
        setTimeout(() => {
            const IsFirsst = currentIndex === 0;
            const newvalue = IsFirsst ? 1 : 0;
            setCurrentIndex(newvalue);
        }, 3000);
    },[currentIndex]);
    const ChangeSlide = () => {
        const IsFirsstSlide = currentIndex === 0;
        const newIndex = IsFirsstSlide ? 1 : 0;
        setCurrentIndex(newIndex);
    };

    return (
        <>
            <div className="max-w-[1540px] h-[500px] w-full px-4 py-10 group">
                <div style={{backgroundImage:`url(${Sliders[currentIndex].url})`, backgroundSize:"cover" }}
                    className="w-full h-full rounded-2xl bg-center bg-cover transition-all duration-1000 ease-in-out">
                    <div className="slider-heading ms-32 pt-20 w-[560px]"
                        style={{ filter: "brightness(1.5)" }}>
                        <h1 className="text-[60px] text-black text-bold duration-1000">
                            {Sliders[currentIndex].maintext}
                        </h1>
                        <h2 className="text-[30px] text-gray-700 duration-1000">
                            {Sliders[currentIndex].subtext}
                        </h2>
                    </div>
                    <div className="subscribe-button relative group mt-56">
                        <input type="text" className="rounded-3xl p-4 w-[560px] ms-32 mt-5" placeholder="Your email address"></input>
                        <button className="absolute back-color rounded-[50px] ease-in-out duration-500 py-4 px-8 text-white -translate-x-[130px] mt-5 group-hover:-translate-x-[50px]">
                            {" "}
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100  duration-700 ease-in-out absolute -translate-y-[810%]  p-1  cursor-pointer">
                    <IoChevronBack
                        className="p-1 group-hover:translate-x-10 -translate-x-[10px] duration-500 text-black bg-white rounded-full "
                        size={30}
                        onClick={ChangeSlide}
                    />
                </div>
                <div className="opacity-0 group-hover:opacity-100  duration-700 ease-in-out absolute -translate-y-[810%] p-1 ms-5 right-5 cursor-pointer">
                    <IoChevronForward
                        className="p-1  text-black bg-white rounded-full group-hover:-translate-x-10 translate-x-[10px] duration-500"
                        size={30}
                        onClick={ChangeSlide}
                    />
                </div>
            </div>
        </>
    )
}
export default Slider