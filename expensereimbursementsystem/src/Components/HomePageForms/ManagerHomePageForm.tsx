import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ManagerHomePageForm: React.FC = () => {
        
    return(
        <div className="manager-container">
                <ul className="manager-btns">
                    <li>
                        <button className="manager-btn">View Account</button>
                    </li>
                    
                    <li>
                        <button className="manager-btn">Edit Account</button>
                    </li>

                    <li>
                        <button className="manager-btn">View All Employees</button>
                    </li>

                    <li>
                        <button className="manager-btn">Approve/Deny Reimbursements</button>
                    </li>

                    <li>
                        <button className="manager-btn">View All Pending Reimbursements</button>
                    </li>

                    <li>
                        <button className="manager-btn">View All Resolved Reimbursements</button>
                    </li>

                    <li>
                        <button className="manager-btn">View Reimbursement of Employee</button>
                    </li>
                </ul>
     </div>
    )
}