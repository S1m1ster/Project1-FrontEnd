import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePageForm.css';

export const ManagerHomePageForm: React.FC = () => {
    const navigateTo = useNavigate();

    const handlegoToViewAccount = (eventL:React.MouseEvent<HTMLButtonElement>) => {
        navigateTo('/viewAccount');
    }

    const handlegoToUpdateAccount = (event:React.MouseEvent<HTMLButtonElement>) => {
        navigateTo('/updateAccount');
    }

    const handlegoToViewAllEmployees = (event:React.MouseEvent<HTMLButtonElement>) => {
        navigateTo('/viewAllEmployees');
    }

    const handlegoToFindTicket = (event:React.MouseEvent<HTMLButtonElement>) => {
        navigateTo('/findTicektPage');
    }

    const handlegoToViewAllPendingReimbursement = (event:React.MouseEvent<HTMLButtonElement>) => {
        navigateTo('/viewAllPending');
    }

    const handlegoToViewAllResolvedReimbursement = (event:React.MouseEvent<HTMLButtonElement>) => {
        navigateTo('/viewAllResolved');
    }

    const handlegoToViewAllByEmployee = (event:React.MouseEvent<HTMLButtonElement>) => {
        navigateTo('/searchAllByEmployee');
    }
        
    return(
        <div className="homeform-container">
                <ul className="homeform-btns">
                    <li>
                        <button className="homeform-btn" onClick={handlegoToViewAccount}>View Account</button>
                    </li>
                    
                    <li>
                        <button className="homeform-btn" onClick={handlegoToUpdateAccount}>Edit Account</button>
                    </li>

                    <li>
                        <button className="homeform-btn" onClick={handlegoToViewAllEmployees}>View All Employees</button>
                    </li>

                    <li>
                        <button className="homeform-btn" onClick={handlegoToFindTicket}>Approve/Deny Reimbursements</button>
                    </li>

                    <li>
                        <button className="homeform-btn" onClick={handlegoToViewAllPendingReimbursement}>View All Pending Reimbursements</button>
                    </li>

                    <li>
                        <button className="homeform-btn" onClick={handlegoToViewAllResolvedReimbursement}>View All Resolved Reimbursements</button>
                    </li>

                    <li>
                        <button className="homeform-btn"onClick={handlegoToViewAllByEmployee}>View Reimbursement of Employee</button>
                    </li>
                </ul>
     </div>
    )
}