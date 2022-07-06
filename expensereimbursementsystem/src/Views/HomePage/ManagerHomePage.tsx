import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from "../../Components/Navbar/Navbar";
import { useEffect } from "react";

export const ManagerHomePage: React.FC = () => {
    const managerInfo = useSelector((state: RootState) => state.user);
    const navigateTo = useNavigate();
    

    useEffect(() => {
        if(!managerInfo.isLoggedIn){
            navigateTo('/login');
        }
    }, [managerInfo.isLoggedIn]);

    return(
        <div className="manager-homepage">
            <Navbar/>
            <h1>Manager Homepage</h1>
        </div>
    )
}