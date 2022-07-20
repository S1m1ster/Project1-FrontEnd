import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../../Components/Navbar/Navbar";
import { useEffect } from "react";
import { ManagerHomePageForm } from "../../Components/HomePageForms/ManagerHomePageForm";
import './HomePage.css';

export const ManagerHomePage: React.FC = () => {
    const managerInfo = useSelector((state: RootState) => state.user);
    const navigateTo = useNavigate();
    

    useEffect(() => {
        if(!managerInfo.isLoggedIn){
            navigateTo('/login');
        }
    }, [managerInfo.isLoggedIn]);

    return(
        <div className="homepage-manager">
            <Navbar/>
            <h1 className="homepage-title"> {managerInfo.user?.username}'s Homepage</h1>
            <ManagerHomePageForm/>
        </div>
    )
}