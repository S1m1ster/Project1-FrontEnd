import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { updateUser } from '../../Slices/UserSlice';
import { useNavigate } from 'react-router-dom';

export const UpdateAccountForm: React.FC = () => {

    const id = useSelector((state: RootState) => state.user.user?.userId!);
    const role = useSelector((state: RootState) => state.user.user?.userPair_role?.roleId);
    
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const dispatch: AppDispatch = useDispatch();
    const navigateTo = useNavigate();


    const handleUserInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === "username"){
            setUsername(event.target.value);
        }
        else if(event.target.name === "password"){
            setPassword(event.target.value);
        }
        else if(event.target.name === "firstName"){
            setFirstName(event.target.value);
        }
        else if(event.target.name === "lastName"){
            setLastName(event.target.value);
        }
        else if(event.target.name === "email"){
            setEmail(event.target.value);
        }
    }

    const handleUpdateAccount = (event:React.MouseEvent<HTMLButtonElement>) => {
        let credentials = {id, username, password, firstName, lastName, email};
        dispatch(updateUser(credentials));
    
        if(role === 2){
            navigateTo('/managerhomepage');
        }
        navigateTo('/employeehomepage');
        
    }
    return (
        <div className='update-account-form'>
            
            <form update-account-form className='update-account-form-container'>
                <ul className='input-container'>
                    <li>
                        <label className='login-input-label'>Enter Username:</label>
                        <input className='login-input' type="text" name = "username" placeholder={useSelector((state: RootState) => state.user.user?.username!)} onChange={handleUserInput}></input>
                    </li>

                    <li>
                        <label className='login-input-label'>Enter Password:</label>
                        <input className='login-input' type="text" name = "password" placeholder={useSelector((state: RootState) => state.user.user?.password!)} onChange={handleUserInput}></input>
                    </li>

                    <li>
                        <label className='login-input-label'>Enter First Name:</label>
                        <input className='login-input' type="text" name = "firstName" placeholder={useSelector((state: RootState) => state.user.user?.firstName)} onChange={handleUserInput}></input>
                    </li>

                    <li>
                        <label className='login-input-label'>Enter Last Name:</label>
                        <input className='login-input' type="text" name = "lastName" placeholder={useSelector((state: RootState) => state.user.user?.lastName!)} onChange={handleUserInput}></input>
                    </li>

                    <li>
                        <label className='login-input-label'>Enter E-Mail:</label>
                        <input className='login-input' type="text" name = "email" placeholder={useSelector((state: RootState) => state.user.user?.email!)} onChange={handleUserInput}></input>
                    </li>
                </ul>
                <div className='update-account-button-container'>
                    <button className='update-account-btn' onClick={handleUpdateAccount}>Update</button>
                </div>
            </form>
            
        </div>
    )
}