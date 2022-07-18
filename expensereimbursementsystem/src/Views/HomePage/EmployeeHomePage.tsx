import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../../Components/Navbar/Navbar";
import { EmployeeHomePageForm } from "../../Components/HomePageForms/EmployeeHomePageForm";
import { useEffect } from "react";

export const EmployeeHomePage: React.FC = () => {
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
            <h1>{employeeInfo.user?.username}'s Homepage</h1>
            <EmployeeHomePageForm/>
            
        </div>
    )
}