import React from 'react';
import { useNavigate } from 'react-router-dom';

export const EmployeeHomePageForm: React.FC = () => {
    const navigateTo = useNavigate();

    const handlegoToCreateTicket = (event:React.MouseEvent<HTMLButtonElement>) => {
        navigateTo('/createTicket');
        
    }

    return(
        <div className="employee-container">
                <ul className="employee-btns">
                    <li>
                        <button className="employee-btn">View Account</button>
                    </li>
                    
                    <li>
                        <button className="employee-btn">Edit Account</button>
                    </li>

                    <li>
                        <button className="employee-btn" onClick={handlegoToCreateTicket}>Create Reimbursement Ticket</button>
                    </li>

                    <li>
                        <button className="employee-btn">View my Pending Reimbursement</button>
                    </li>

                    <li>
                        <button className="employee-btn">View my Resolved Reimbursement</button>
                    </li>
                </ul>
     </div>
    )
}