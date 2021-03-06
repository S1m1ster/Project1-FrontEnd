import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../../Components/Navbar/Navbar";
import { UpdateAccountForm } from "../../Components/UpdateAccountForm/UpdateAccountForm";
import { useEffect } from "react";
import "./UpdateAccountPage.css"

export const UpdateAccountPage: React.FC = () => {
    const employeeInfo = useSelector((state: RootState) => state.user);
    const navigateTo = useNavigate();
    
    useEffect(() => {
        if(!employeeInfo.isLoggedIn){
            navigateTo('/login');
        }
    }, [employeeInfo.isLoggedIn]);

    return(
        <div className="update-account-page">
            <Navbar/>
            <h1 className="update-title">Update Account</h1>
            <UpdateAccountForm/>
        </div>
    )
}
