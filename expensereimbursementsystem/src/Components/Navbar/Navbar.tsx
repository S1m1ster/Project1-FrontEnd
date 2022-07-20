import React from "react";
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../Store";
import { RootState } from '../../Store';
import {logout} from '../../Slices/UserSlice';
import "./Navbar.css";

export const Navbar: React.FC = () => {
    const role = useSelector((state: RootState) => state.user.user?.userPair_role?.roleId);
    const dispatch :AppDispatch = useDispatch();

    const handleLogout = () => {
        console.log("logout was triggered");
        dispatch(logout());
    }

    const isManager=() => {
        if(role === 2){
            return true;
        }
        else{
            return false;
        }
    }

    return(
        <nav className="navbar">
            <div className="nav-container">
                { isManager()?
                    <Link className="nav-link-home" to='/managerhomepage'>Home</Link> 
                    :
                    <Link className="nav-link-home" to='/employeehomepage'>Home</Link>
                }
                <div className="logout-container">
                <Link to={"/login"} className="nav-link">
                        <button className="logout-btn" onClick={handleLogout}>Logout</button>
                    </Link>
                </div>
                
            </div>
        </nav>
    )
}