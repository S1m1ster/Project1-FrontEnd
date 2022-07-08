import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { createTicket } from '../../Slices/ReimbursementSlice';
import { useNavigate } from 'react-router-dom';

export const CreateReimbursementForm: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const role = useSelector((state: RootState) => state.user.user?.role!);
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
            <div className='header-container'>
                <h1 id='create-ticket-header'>Create a reimbursement ticket</h1>
            </div>

            <form className='create-ticket-form'>
                <div className='amount-container'>
                    <label className='input-field-label'>Please Enter amount</label>
                    <input className='input-field' type = "number" name = "amount" onChange={handleReimbursement}/>
                </div>

                <div className='amount-container'>
                    <label className='input-field-label'>Please Enter Description</label>
                    <input className='input-field' type = "text" name = "description" onChange={handleReimbursement}/>
                </div>

                <div className='amount-container'>
                    <label className='input-field-label'>Choose the type</label>
                    <select className='select-field' name='type' onChange={handleReimbursementSelect}>
                        <option value="">Select an option</option>
                        <option value="Lodging">Lodging</option>
                        <option value="Travel">Travel</option>
                        <option value="Food">Food</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className='button-container'>
                    <button className='create-ticket-form-btn' onClick={handleaddTicket}>Create Reimbursement Ticket</button>
                </div>
            </form>
        </div>
    )
}