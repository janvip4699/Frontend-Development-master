import React from "react";
import AdminHeader from "./AdminHeader";
import SideBar from "./SideBar";

function AdminDashboard()
{
    return(
        <>
            <AdminHeader/>
            <div className="col-md-3 mt-5 bg-dark p-4"> 
                <SideBar/>
            </div>
        </>
    )
}
export default AdminDashboard