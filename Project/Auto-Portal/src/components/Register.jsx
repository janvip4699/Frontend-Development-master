import React, { useRef, useState } from "react";
import { Modal } from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import SignUpImage from "../assets/images/signup.jpg";
import Image from "../assets/images/user.png";
import axios from "axios";
import Swal from "sweetalert2";
import { UserAuthContextProvider } from "../Context/UserAuthContext";
import { useUserAuth } from "../Context/UserAuthContext";

import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Register(props) {
    const ProfileImage = useRef(null);
    const [UserImage, setUserImage] = useState(Image);
    const [Message, SetMessage] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { signUp } = useUserAuth();

    //form input object destructuring
    const UserName = useRef("");
    const Email = useRef("");
    const Password = useRef("");
    const Role = useRef("");

    //functions
    const ChangeProfilePic = () => {
        setUserImage(ProfileImage.current.value);
    };

    //user Registration
    const RegisterUser = async (event) => {
        event.preventDefault();
        setError("")

        try {
           await signUp(Email.current.value, Password.current.value);
           var UserDetails = {
            UserName: UserName.current.value,
            Email: Email.current.value,
            Password: Password.current.value,
            Role: "user",
            ProfileImage: ProfileImage.current.value,
        };

            axios.post(`http://localhost:4000/users`, UserDetails).then(() => {
                
                Swal.fire({
                    title: "Registered successfully!!",
                    showClass: {
                        popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                    },
                    hideClass: {
                        popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                    }
                });
                navigate("/");
                e.target.reset();
            });
        }
        catch(err)
        {
            setError(err.message);
        }
    };
    return (
        <div>
            {/* <div
                {...props}
                className={`absolute backdrop-blur-lg pt-24${props.isOpen
                    ? "top-0 opacity-100 z-[1030] duration-700"
                    : "-top-[100%] opacity-0 -z-[1030] duration-700"
                    } transition-all duration-700`}
            ></div> */}
            <div className=" mt-14 md:w-[70%] w-[95%] flex items-center  bg-primary md:mx-56 mx-auto rounded-2xl ">
                <div className="min-h-[500px] md:min-h-[200px] rounded">
                    <div className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                            <div>
                                <img src={SignUpImage} className="h-[450px]"></img>
                            </div>
                            {/*Sign Up Form */}
                            <div>
                                {/* <div
                                
                                    className={`px-5 w-[80%] mx-auto text-center bg-yellow-100 border border-primary text-adminprimary rounded-md p-1 ${Message ? "opacity-100" : "opacity-0"
                                        } duration-700 transition-all`}
                                >
                                    <div className="">You Are Registerd Successfully!</div>
                                </div> */}
                                {error && <div className="bg-red-500 " variant="danger">{error}</div>}



                                {/* <IoIosCloseCircleOutline
                                    size={30}
                                    className="cursor-pointer md:-translate-y-[30px] -translate-y-[300px] translate-x-[630px] md:translate-x-[490px] "
                                    onClick={props.onHide}
                                /> */}
                                <div className="w-[90%] md:w-[full] md:mx-4 mx-auto p-4 bg-white/80 mb-10 md:mt-10  text-black rounded-2xl shadow-2xl">
                                    <div>
                                        <h1 className="text-4xl text-center font-semibold mb-5 text-adminprimary">
                                            Sign Up
                                        </h1>
                                        <form action="" onSubmit={RegisterUser}>
                                            <div className="space-y-6 flex-col justify-center items-center">
                                                {/* user Image Upload  */}
                                                <div
                                                    // onClick={handleImageClick}
                                                    className="flex-col justify-center items-center mx-auto"
                                                >
                                                    <input
                                                        id="profileimage"
                                                        type="url"
                                                        className="py-2 px-4 rounded-lg w-full bg-gray-400/30 placeholder-black outline-none border-none"
                                                        ref={ProfileImage}
                                                        placeholder="Image URL"
                                                        onChange={ChangeProfilePic}
                                                    />
                                                </div>

                                                <input
                                                    type="text"
                                                    name="naame"
                                                    id="name"
                                                    className="py-2 px-4 rounded-lg w-full bg-gray-400/30 placeholder-black outline-none border-none"
                                                    placeholder="Name"
                                                    ref={UserName}
                                                />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="py-2 px-4 rounded-lg w-full bg-gray-400/30 placeholder-black outline-none border-none"
                                                    placeholder="Email"
                                                    ref={Email}
                                                />
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    className="py-2 px-4 rounded-lg w-full bg-gray-400/30 placeholder-black outline-none"
                                                    placeholder="Password"
                                                    ref={Password}
                                                />
                                                <div className="flex justify-center">
                                                    <button
                                                        type="submit"
                                                        className="btn-primary bg-primary rounded-sm p-2 text-secondary font-bold text-xl w-[50%]"
                                                    >
                                                        Sign-Up
                                                    </button>
                                                </div>
                                                <div className="text-center">
                                                    <span className="">
                                                        Already Have Account?
                                                        <Link
                                                            to="/login"
                                                            className="text-xl ms-2 text-primary font-bold"
                                                        >
                                                            Log-In
                                                        </Link>
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
