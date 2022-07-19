import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../../Components/Navbar/Navbar";
import { getReimbursementsOfEmployee } from '../../Slices/ReimbursementSlice';

export const FindTicketPage: React.FC = () => {
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
        dispatch(getReimbursementsOfEmployee(credentials));
        navigateTo("/approveDenyTicketPage");
    }

    useEffect(() => {
        if(!managerInfo.isLoggedIn){
            navigateTo('/login');
        }
        
    }, [managerInfo.isLoggedIn]);

    
    return (
        <div className='find-approveDeny-page'>
            <Navbar/>
            <form className='find-approveDeny-container'>
                <ul className='find-container'>
                    <li>
                        <label className='find-employee-ticket-label'>Enter Reimbursement ticket id:</label>
                        <input className='find-employee-ticket-input' type="number" name = "employeeId" onChange={handleUserInput}></input>
                    </li>
                </ul>
                <div className='find-employee-ticket-button-container'>
                    <button className='find-employee-ticket-btn' onClick={handleGetEmployeeTicket}>Search</button>
                </div>
                
            </form>
            
        </div>
    )
}