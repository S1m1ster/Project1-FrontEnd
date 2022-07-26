import React from "react";
import { useSelector,  useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../../Components/Navbar/Navbar";
import { useEffect } from "react";
import { viewReimbursements } from "../../Slices/ReimbursementSlice";


export const ViewAllResolvedPage: React.FC = () => {
    const managerInfo = useSelector((state: RootState) => state.user);
    const allPendingTickets = useSelector((state: RootState) => state.reimbursement.tickets);
    const navigateTo = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const type = 2;
    const info = {type};
    
    useEffect(() => {
        if(!managerInfo.isLoggedIn){
            navigateTo('/login');
        }
        else{
            dispatch(viewReimbursements(info));
        }
        
    }, [managerInfo.isLoggedIn]);

    return(
        <div className="viewResolved-page">
            <Navbar/>
            <h1 id="ticket-title">All Resolved Reimbursements </h1>

            <div className="Resolved-container">
              {allPendingTickets?.map((ticket) => {
                return (
                  <div className="ticket-container" key={ticket.reimbursementId}>
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
                      <label>Status: {ticket.reimbursement_status?.status}</label>
                    </div>

                    <div className="ticket-info">
                      <label>Manager: {ticket.userResolver_ticket?.firstName}</label>
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