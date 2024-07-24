import React from "react";
import { Link } from "react-router-dom";
const Content=()=>{
    return(
        <>
        <div className="p-5 ms-10">
            <div className="flex flex-row">
                <div className="basis-1/2 p-3">
                    <h1 className="text-5xl font-bold">TEALOGY</h1>
                    <p className="text-justify mt-5">Tealogy is an Indian cafe chain that focuses on tea-based beverages. Tealogy was founded in 2018 in Indore, India. Now we have 320+ tea cafe outlets across India. We offer a variety of tea and beverages with some snacks as well. We provide the best taste of the kulhad tea & coffee at pocket prices. We always try to provide the best experience and complete satisfaction to our customers through our services with our variety of foods, beverages.</p>
                    <p className="text-justify mt-4">We provide the best place for sitting in our cafe where you can enjoy yourself with your family and friends and can make some unforgettable memories with them. At Tealogy, we are not only serving food and beverages. But we also try to make our customers happy by serving tastes that rejuvenate the mood.</p>
                    <div className="flex flex-row mt-4">
                        <div className="basis-1/3">
                            <h1 className="text-6xl font-bold">140+</h1>
                            <h6 className="text-xl font-bold">Cities</h6>
                        </div>
                        <div className="basis-1/3">
                            <h1 className="text-6xl font-bold">320+</h1>
                            <h6 className="text-xl font-bold">Outlets</h6>
                        </div>
                        <div className="basis-1/3">
                            <h1 className="text-6xl font-bold">2B+</h1>
                            <h6 className="text-xl font-bold">Kulhad Served</h6>
                        </div>
                    </div>
                    <Link to="/apply-now"><button type="button" className="bg-yellow-400 text-black rounded-3xl p-3 text-sm mt-3" style={{"fontWeight":"500"}}>APPLY NOW</button></Link>
                </div>

                <div className="basis-1/2 p-3">
                <div className="container p-3 bg-yellow-400 rounded-xl">
                <h3>READY TO BREW UP</h3>
                <h3>SUCESS WITH TEALOGY?</h3>
                <form>
                    <div className="flex flex-row mt-4">
                    <input className="basis-1/2 m-2 p-2 rounded-xl" type="text" placeholder="Name*"></input>
                    <input className="basis-1/2 m-2 p-2 rounded-xl" type="email" placeholder="Email Address*"></input>
                    </div>
                    <div className="mt-3">
                    <input className="m-2 p-2 rounded-xl" type="text" placeholder="Contact Number*"></input>
                    </div>
                    <div className="flex flex-row mt-3">
                    <input className="basis-1/2 m-2 p-2 rounded-xl" type="text" placeholder="City*"></input>
                    <input className="basis-1/2 m-2 p-2 rounded-xl" type="email" placeholder="Zip/Postal Code*"></input>
                    </div>
                    <div className="flex flex-col mt-3">
                        <select className="p-2 m-2 border border-none outline-none">
                            <option>1 Lakh</option>
                            <option>5 Lakh</option>
                            <option>10 Lakh</option>
                        </select>
                    </div>
                    <div className="flex flex-col mt-3">
                    <input className="m-2 p-2 rounded-xl" type="text" placeholder="Your Message*"></input>
                    </div>
                    <div className="basis-1/6 ms-2 mt-3 mb-4">
                        <Link to="/call-back"><button className="bg-slate-800 text-white p-3 text-sm">REQUEST A CALL BACK!</button></Link>
                    </div>
                </form>
            </div>
            </div>
            </div>
        </div>

        <div className="p-5 ms-10">
            <div className="flex flex-row">
                <div className="basis-1/2 p-5 mt-32">
                    <h1 className="text-5xl font-bold">OUR PRESENCE</h1>
                    <p className="text-justify mt-14">We have 320+ outlets all over India and more than 15+ outlets only at Indore. We offer franchise opportunities all over India. If you are passionate about business or want to be an entrepreneur! fill the below mention franchise details form and complete the first step towards your dream business. This is not only the café franchise but also a platform to connect passionate Entrepreneurs like you.</p>
                    <Link to="/apply-now"><button type="button" className="bg-yellow-400 text-black rounded-3xl p-3 text-sm mt-3" style={{"fontWeight":"500"}}>APPLY NOW</button></Link>
                </div>
                <div className="basis-1/2 p-5">
                    <img src="https://franchise.tealogy.in/wp-content/uploads/2024/04/outlet-map-tealogy.jpeg"></img>
                </div>
            </div>
        </div>
        </>
    )
}
export default Content