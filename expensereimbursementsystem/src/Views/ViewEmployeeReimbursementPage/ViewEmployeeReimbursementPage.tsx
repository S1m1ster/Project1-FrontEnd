import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';

import { viewReimbursementsOfEmployee } from '../../Slices/ReimbursementSlice';
import { Navbar } from '../../Components/Navbar/Navbar';

export const ViewEmployeeReimbursementPage: React.FC = () => {
    const managerInfo = useSelector((state: RootState) => state.user);
    const employeeReimbursements = useSelector((state: RootState) => state.reimbursement.tickets);
    
    useEffect(() => {

    },[viewReimbursementsOfEmployee])
    
    return (
        <div className='view-employee-ticket-form'>
            <Navbar/>
            <div className="employees-container">
              {employeeReimbursements?.map((ticket) => {
                return (
                  <div className="ticket-container"  key={ticket.reimbursementId}>
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