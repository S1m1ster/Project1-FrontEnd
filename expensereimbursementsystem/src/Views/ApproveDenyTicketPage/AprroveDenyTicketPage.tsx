import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { acceptOrDenyRequestReimbursement, viewReimbursementsOfEmployee } from '../../Slices/ReimbursementSlice';
import { Navbar } from '../../Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

export const ApproveDenyTicketPage: React.FC = () => {
    const managerInfo = useSelector((state: RootState) => state.user);
    const ticketFound = useSelector((state: RootState) => state.reimbursement.ticket);
    const navigateTo = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    
    const managerId = managerInfo.user?.userId!;
    const id = ticketFound?.reimbursementId!;
    
    useEffect(() => {

    },[viewReimbursementsOfEmployee])

    const handleArrpoveOrDeny = (event:React.MouseEvent<HTMLButtonElement>) => {
      let status = 0;
      if(event.currentTarget.id === 'approve-btn'){
        status = 2;
      }
      if(event.currentTarget.id === "deny-btn"){
        status = 3;
      }

      let credentials = {managerId, id, status};
      dispatch(acceptOrDenyRequestReimbursement(credentials));
      
      navigateTo("/managerhomepage");
  }
    
    return (
        <div className='view-employee-ticket-form'>
            <Navbar/>
            <div className="employees-container">
            <div className="ticket-container">
                    <div className="ticket-info">
                      <label>Reimbursement Id: {ticketFound?.reimbursementId}</label>
                    </div>

                    <div className="ticket-info">
                      <label>Amount: ${ticketFound?.amount}</label>
                    </div>

                    <div className="ticket-info">
                      <label>Description: {ticketFound?.description}</label>
                    </div>

                    <div className="ticket-info">
                      <label>Type: {ticketFound?.reimbursement_type?.type}</label>
                    </div>

                    <div className="ticket-info">
                      <label>Submitted Date: {ticketFound?.submittedDate}</label>
                    </div>

                    <div className="ticket-info">
                      <label>Manager: {ticketFound?.userResolver_ticket?.firstName}</label>
                    </div>

                    <div className="ticket-info">
                      <label>Status: {ticketFound?.reimbursement_status?.status}</label>
                    </div>

                    <div className="ticket-info">
                      <label>Resolved Date: {ticketFound?.resolvedDate}</label>
                    </div>
                  </div>

                  <div className='status-container-buttons'>
                    <button id='approve-btn' name="approve" onClick={handleArrpoveOrDeny}>Approve</button>
                    <button id='deny-btn' name="deny" onClick={handleArrpoveOrDeny}>Deny</button>
                  </div>
            </div>
            
            
        </div>
    )
}