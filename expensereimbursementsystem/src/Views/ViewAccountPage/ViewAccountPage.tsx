import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../../Components/Navbar/Navbar";
import { useEffect } from "react";
import "./ViewAccountPage.css";

export const ViewAccountPage: React.FC = () => {
    const employeeInfo = useSelector((state: RootState) => state.user);
    
    const navigateTo = useNavigate();

    useEffect(() => {
        if(!employeeInfo.isLoggedIn){
            navigateTo('/login');
        }
    }, [employeeInfo.isLoggedIn]);

    return(
        <div className="view-account-page">
            <Navbar/>
            <h1 className="view-title">My Account</h1>
            <div className="view-info-container">
                <label className="view-info">Employee Id: {employeeInfo.user?.userId}</label>
                <label className="view-info">Role: {employeeInfo.user?.userPair_role?.roleType}</label>
                <label className="view-info">First Name: {employeeInfo.user?.firstName}</label>
                <label className="view-info">Last Name: {employeeInfo.user?.lastName}</label>
                <label className="view-info">Username: {employeeInfo.user?.username}</label>
                <label className="view-info">Email: {employeeInfo.user?.email}</label>
                <label className="view-info">Password: {employeeInfo.user?.password}</label>
            </div>
            
        </div>
    )
}