import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../../Components/Navbar/Navbar";
import { CreateReimbursementForm } from "../../Components/CreateTicketForm/CreateTicketForm";
import { useEffect } from "react";
import "./CreateReimbursementPage.css";

export const CreateReimbursementPage: React.FC = () => {
    const employeeInfo = useSelector((state: RootState) => state.user);
    const navigateTo = useNavigate();
    
    console.log("create page user status: " + employeeInfo.isLoggedIn);
    useEffect(() => {
        if(!employeeInfo.isLoggedIn){
            navigateTo('/login');
        }
    }, [employeeInfo.isLoggedIn, navigateTo]);
    

    return(
        <div className="create-reimbursement-homepage">
            <Navbar/>
            <h1 id='create-ticket-header'>Create Reimbursement Ticket</h1>
            <CreateReimbursementForm/>
        </div>
    )
}