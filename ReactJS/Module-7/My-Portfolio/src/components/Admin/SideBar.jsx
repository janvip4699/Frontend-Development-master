import React from "react";
import { Link } from "react-router-dom";
import ProfileImg from "../../assets/images/janvi.jpeg";

function SideBar()
{
    return(
        <>
           <div className="p-4">
                <ul className='sidebar-link fs-5'>
                    <li className='mt-5'><Link to=""><img src={ProfileImg} className='img-fluid rounded-circle w-75' alt='admin images' /></Link></li>
                    <li className="mt-4"><Link to='/admin-dashboard'> Janvi Dashboard</Link></li>
                    <li><Link to='/admin-dashboard/add-abstract'> Add Abstract</Link></li>
                    <li><Link to='/admin-dashboard/add-skills'>skills Category</Link></li>
                    <li><Link to='/admin-dashboard/add-portfolio'> Add Portfolio</Link></li>
                    <li><Link to='/admin-dashboard/add-clients'> Add Clients</Link></li>
                    <li><Link to='/admin-dashboard/manage-contacts'> Manage Contacts</Link></li>
                    <li><Link to='/admin-dashboard/manage-reviews'> Manage reviews</Link></li>
                    <li className='mt-5'><Link to='#' className='btn btn-block bg-danger w-75'> Logout </Link></li>  
                </ul>
            </div>
        </>
    )
}
export default SideBar