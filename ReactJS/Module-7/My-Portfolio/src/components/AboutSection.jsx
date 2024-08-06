import React from "react";
import About from "../assets/images/about.jpeg";
import ViewMyWorkBtn from "./ViewMyWorkBtn";
function AboutSection()
{
    return(
        <>
            <div className="bg-dark text-light py-5" id="about">
                <div className="container">
                    <div className="flex-column-reverse flex-md-row row">
                        <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center">
                            <img src={About} alt="about" className="img-fluid w-75 shadow"></img>
                        </div>
                        <div className="col-md-6 d-flex flex-column justify content-center">
                            <h2 className="mb-5">About me</h2>
                            <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, aliquid blanditiis debitis laudantium, ipsam accusantium dolores tempore libero tenetur doloribus impedit sint non facere obcaecati, distinctio laboriosam maxime labore ea.</p>
                            <p className="text-start mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptates minus ab harum nulla ad deleniti, animi mollitia vitae voluptas blanditiis tenetur exercitationem veniam aliquid placeat sunt cumque rerum suscipit!</p>
                            <ViewMyWorkBtn></ViewMyWorkBtn>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutSection