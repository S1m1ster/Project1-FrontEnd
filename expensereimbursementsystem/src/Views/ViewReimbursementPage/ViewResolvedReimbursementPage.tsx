import React from "react";
import { useSelector,  useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../../Components/Navbar/Navbar";
import { useEffect } from "react";
import { viewEmployeeReimbursements } from "../../Slices/ReimbursementSlice";


export const ViewResolvedReimbursementPage: React.FC = () => {
    const employeeInfo = useSelector((state: RootState) => state.user);
    const resolvedTickets = useSelector((state: RootState) => state.reimbursement.tickets);
    const navigateTo = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const id = employeeInfo.user?.userId!;
    const type = 2;
    const info = {id, type};
    
    useEffect(() => {
        if(!employeeInfo.isLoggedIn){
            navigateTo('/login');
        }
        else{
            dispatch(viewEmployeeReimbursements(info));
        }
        
    }, [employeeInfo.isLoggedIn]);

    return(
        <div className="viewPending-page">
            <Navbar/>
            <h1>{employeeInfo.user?.username}'s' Resolved Reimbursements </h1>

            <div className="pending-container">
              {resolvedTickets?.map((ticket) => {
                return (
                  <div className="ticket-container">
                    <div className="ticket-info">
                      <label>Reimbursement Id: {ticket.reimbursementId}</label>
                    </div>

                    <div className="ticket-info">
                      <label>Amount: ${ticket.amount}</label>
                    </div>

                    <div className="ticket-info">
                      <label>Description: {ticket.description}</label>
                    </div>

                    <div className="ticket-info">
                      <label>Type: {ticket.reimbursement_type?.type}</label>
                    </div>

                    <div className="ticket-info">
                      <label>Submitted Date: {ticket.submittedDate}</label>
                    </div>

                    <div className="ticket-info">
                      <label>Manager: {ticket.userResolver_ticket?.firstName}</label>
                    </div>

                    <div className="ticket-info">
                      <label>Status: {ticket.reimbursement_status?.status}</label>
                    </div>

                    <div className="ticket-info">
                      <label>Resolved Date: {ticket.resolvedDate}</label>
                    </div>

                  </div>
                )
              })}
            </div>
        </div>
        
    )
}