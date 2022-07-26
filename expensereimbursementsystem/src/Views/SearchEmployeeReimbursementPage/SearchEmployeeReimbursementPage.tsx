import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../../Components/Navbar/Navbar";
import { viewReimbursementsOfEmployee } from '../../Slices/ReimbursementSlice';
import "./SearchEmployeeReimbursementPage.css";

export const SearchEmployeeReimbursementPage: React.FC = () => {
    const managerInfo = useSelector((state: RootState) => state.user);
    const [id, setId] = useState<number>(0);
    const dispatch: AppDispatch = useDispatch();
    const navigateTo = useNavigate();


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
        <div className='search-employee-ticket-form'>
            <Navbar/>
            <h1 className='search-employee-ticket-title'>Find Employee Reimbursement</h1>
            <form className='search-employee-ticket-form-container'>
                <ul className='search-employee-ticket-input-container'>
                    <li>
                        <label className='search-employee-ticket-label'>Enter Employee Id:</label>
                        <input className='search-employee-ticket-input' type="number" name = "employeeId" onChange={handleUserInput}></input>
                    </li>
                </ul>
                <div className='search-employee-ticket-button-container'>
                    <button className='search-employee-ticket-btn' onClick={handleGetEmployeeTicket}>Search</button>
                </div>
                
            </form>
            
        </div>
    )
}