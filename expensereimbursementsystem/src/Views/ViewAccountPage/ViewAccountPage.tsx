import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../../Components/Navbar/Navbar";
import { useEffect } from "react";

export const ViewAccountPage: React.FC = () => {
    const employeeInfo = useSelector((state: RootState) => state.user);
    
    const navigateTo = useNavigate();

    useEffect(() => {
        if(!employeeInfo.isLoggedIn){
            navigateTo('/login');
        }
    }, [employeeInfo.isLoggedIn]);

    return(
        <div className="employee-homepage">
            <Navbar/>
            <h1>My Profile</h1>
            <div className="user-info-container">
                <label className="user-firstname">First Name: {employeeInfo.user?.firstName}</label>
                <label className="user-lastname">Last Name: {employeeInfo.user?.lastName}</label>
                <label className="user-username">Username: {employeeInfo.user?.username}</label>
                <label className="user-email">Email: {employeeInfo.user?.email}</label>
            </div>
            
        </div>
    )
}