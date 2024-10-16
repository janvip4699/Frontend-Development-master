import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useUserAuth } from '../Context/UserAuthContext';
import Swal from 'sweetalert2';

const ManageProfile = () => {

    const { user } = useUserAuth();
    const ProfileImage = useRef();
    const UserName = useRef();
    const Navigate = useNavigate();
    const [UserData, SetUserData] = useState();
    const [Profilevalue, SetProfileValue] = useState()
    const [userNamevalue, SetuserNamevalue] = useState();
    //var userdata = {}
    useEffect(() => {
        const fetchUserData = () => {

            if (user) {
                axios.get(`http://localhost:4000/users`).then((response) => {
                    SetUserData(response.data.filter((e) => e.UID == user.uid));
                    //  SetUserData(userdetails[0])
                    ProfileImage.current.value = UserData[0].ProfileImage;
                    UserName.current.value = UserData[0].UserName;
                })

            }
        };
        fetchUserData();
    }, [UserData]);

    const updateProfileData = async (e) => {
        e.preventDefault();
        var update = {
            ProfileImage: ProfileImage.current.value,
            UserName: UserName.current.value,
        }

        await axios.put(`http://localhost:4000/users/${UserData[0].id}`, update).then(() => {
            Swal.fire({
                title: "Profile details updated successfully!!",
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
            Navigate("/home");
        })


        e.target.reset();
    }

    return (
        <div>
            <Header></Header>
            <div>
                <h1 className='text-center py-2 mt-4 text-2xl font-semibold'>Manage Profile</h1>
                <div className=" md:w-[95%] w-[95%] flex items-center  bg-secondary mx-auto rounded-2xl justify-between ">
                    <div className="min-h-[500px] md:min-h-[200px] rounded">
                        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center">
                            <div className='mx-auto p-5'>
                                <Link to="/manage-profile"><h1 className="text-xl text-center font-semibold mb-5 cursor-pointer hover:bg-secondary hover:text-primary p-3 bg-primary text-secondary rounded-sm" >Update Profile Details</h1></Link>
                                <Link to="/update-login"><h1 className="text-xl text-center font-semibold mb-5 cursor-pointer hover:bg-secondary hover:text-primary p-3 bg-primary text-secondary rounded-sm">Update Login Details</h1></Link>
                            </div>
                            <div className="w-[100%] md:w-[500px] md:mx-5 mx-9 p-4 bg-white/80 mb-10 md:mt-10 text-black rounded-2xl shadow-2xl">
                                <h1 className="text-xl text-center font-semibold mb-5 text-adminprimary">
                                    Update Profile Details
                                </h1>
                                <form>
                                    <div className="space-y-6 flex-col justify-center items-center">

                                        <div
                                            className="flex-col justify-center items-center mx-auto"
                                        >
                                            <input
                                                id="profileimage"
                                                type="url"
                                                className="py-2 px-4 rounded-lg w-full bg-gray-400/30 placeholder-black outline-none border-none"
                                                ref={ProfileImage}
                                                value={Profilevalue}
                                                onChange={(e) => { SetProfileValue(e.target.value) }}
                                                placeholder="Image URL"

                                            />
                                        </div>

                                        <input
                                            type="text"
                                            name="naame"
                                            id="name"
                                            className="py-2 px-4 rounded-lg w-full bg-gray-400/30 placeholder-black outline-none border-none"
                                            placeholder="Name"
                                            ref={UserName}
                                            value={userNamevalue}
                                            onChange={(e) => { SetuserNamevalue(e.target.value) }}
                                        />
                                        <div className="flex justify-center">
                                            <button
                                                type="submit"
                                                className="btn-primary bg-primary rounded-sm p-2 text-secondary font-bold text-xl w-[50%]"
                                                onClick={updateProfileData}
                                            >
                                                Update Profile
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageProfile
