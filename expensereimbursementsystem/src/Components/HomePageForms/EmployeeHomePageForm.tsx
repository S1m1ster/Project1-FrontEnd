import React from 'react';
import { useNavigate } from 'react-router-dom';

export const EmployeeHomePageForm: React.FC = () => {
    const navigateTo = useNavigate();

    const handlegoToViewAccount = (eventL:React.MouseEvent<HTMLButtonElement>) => {
        navigateTo('/viewAccount');
    }

    const handlegoToUpdateAccount = (event:React.MouseEvent<HTMLButtonElement>) => {
        navigateTo('/updateAccount');
    }

    const handlegoToCreateTicket = (event:React.MouseEvent<HTMLButtonElement>) => {
        navigateTo('/createTicket');
        
    }
    
    const handlegoToPending = (event:React.MouseEvent<HTMLButtonElement>) => {
        navigateTo('/viewPending');
        
    }

    const handlegoToResolved = (event:React.MouseEvent<HTMLButtonElement>) => {
        navigateTo('/viewResolved');
        
    }

    return(
        <div className="employee-container">
                <ul className="employee-btns">
                    <li>
                        <button className="employee-btn" onClick={handlegoToViewAccount}>View Account</button>
                    </li>
                    
                    <li>
                        <button className="employee-btn" onClick={handlegoToUpdateAccount}>Edit Account</button>
                    </li>

                    <li>
                        <button className="employee-btn" onClick={handlegoToCreateTicket}>Create Reimbursement Ticket</button>
                    </li>

                    <li>
                        <button className="employee-btn" onClick={handlegoToPending}>View my Pending Reimbursement</button>
                    </li>

                    <li>
                        <button className="employee-btn" onClick={handlegoToResolved}>View my Resolved Reimbursement</button>
                    </li>
                </ul>
     </div>
    )
}