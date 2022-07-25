import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { createTicket } from '../../Slices/ReimbursementSlice';
import { useNavigate } from 'react-router-dom';
import "./CreateTicketForm.css";

export const CreateReimbursementForm: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const role = useSelector((state: RootState) => state.user.user?.userPair_role?.roleId);
    console.log("current user role: "+ role);
    const id = useSelector((state: RootState) => state.user.user?.userId!);
    const [amount, setAmount] = useState<number>(0);
    const [description, setDescription] = useState<string>("");
    const [type, setType] = useState<number>(0);
    const navigateTo = useNavigate();

    const handleReimbursement = (event:React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === "amount"){
            setAmount(event.target.valueAsNumber);
        }
        else if(event.target.name === "description"){
            setDescription(event.target.value);
        }
    }

    const handleReimbursementSelect = (event:React.ChangeEvent<HTMLSelectElement>) => {
        if(event.target.value === "Lodging"){
            setType(1);
        }
        else if(event.target.value === "Travel"){
            setType(2);
        }
        else if(event.target.value === "Food"){
            setType(3);
        }
        else if(event.target.value === "Other"){
            setType(4);
        }
    }

    const handleaddTicket = (event:React.MouseEvent<HTMLButtonElement>) => {
        let credentials = {id, amount, description, type};
        dispatch(createTicket(credentials));
    
        if(role === 2){
            navigateTo('/managerhomepage');
        }
        navigateTo('/employeehomepage');
        
    }

    return(
        <div className='create-ticket'>
            <form className='create-ticket-form'>
                <div className='create-ticket-input-container'>
                    <label className='create-ticket-input-field-label'>Please Enter amount</label>
                    <input className='create-ticket-input-field' type = "number" name = "amount" placeholder='0' onChange={handleReimbursement}/>
                </div>

                <div className='create-ticket-input-container'>
                    <label className='create-ticket-input-field-label'>Please Enter Description</label>
                    <input className='create-ticket-input-field' type = "text" name = "description" placeholder='Description here' onChange={handleReimbursement}/>
                </div>

                <div className='create-ticket-input-container'>
                    <label className='create-ticket-input-field-label'>Choose the type</label>
                    <select className='create-ticket-select-field' name='type' onChange={handleReimbursementSelect}>
                        <option value="">Select an option</option>
                        <option value="Lodging">Lodging</option>
                        <option value="Travel">Travel</option>
                        <option value="Food">Food</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className='create-ticket-form-button-container'>
                    <button className='create-ticket-form-btn' onClick={handleaddTicket}>Create Reimbursement Ticket</button>
                </div>
            </form>
        </div>
    )
}