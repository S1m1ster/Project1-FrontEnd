import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from "../../Components/Navbar/Navbar";
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
            <h1>Employee Homepage</h1>
        </div>
    )
}