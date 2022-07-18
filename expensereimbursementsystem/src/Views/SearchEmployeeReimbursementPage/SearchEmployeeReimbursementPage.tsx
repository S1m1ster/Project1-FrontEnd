import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../../Components/Navbar/Navbar";
import { viewReimbursementsOfEmployee } from '../../Slices/ReimbursementSlice';

export const SearchEmployeeReimbursementPage: React.FC = () => {
    const managerInfo = useSelector((state: RootState) => state.user);
    const employeeReimbursements = useSelector((state: RootState) => state.reimbursement.tickets);
    const [id, setId] = useState<number>(0);
    const dispatch: AppDispatch = useDispatch();
    const navigateTo = useNavigate();

    console.log("all of employee tickets: ", employeeReimbursements);


    const handleUserInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === "employeeId"){
            setId(event.target.valueAsNumber);
        }
    }

    const handleGetEmployeeTicket = (event:React.MouseEvent<HTMLButtonElement>) => {
        let credentials = {id};
        dispatch(viewReimbursementsOfEmployee(credentials));
        navigateTo("/viewAllByEmployee");
    }

    useEffect(() => {
        if(!managerInfo.isLoggedIn){
            navigateTo('/login');
        }
        
    }, [managerInfo.isLoggedIn]);

    
    return (
        <div className='view-employee-ticket-form'>
            
            <form update-account-form className='view-employee-ticket-form-container'>
                <ul className='input-container'>
                    <li>
                        <label className='view-employee-ticket-label'>Enter Employee Id:</label>
                        <input className='view-employee-ticket-input' type="number" name = "employeeId" onChange={handleUserInput}></input>
                    </li>
                </ul>
                <div className='view-employee-ticket-button-container'>
                    <button className='view-employee-ticket-btn' onClick={handleGetEmployeeTicket}>Search</button>
                </div>
                
            </form>
            
        </div>
    )
}