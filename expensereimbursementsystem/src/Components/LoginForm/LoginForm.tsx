import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Store';
import { loginUser } from '../../Slices/UserSlice';
import './LoginForm.css';

export const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setpassword] = useState<string>("");
    const dispatch: AppDispatch = useDispatch();

    const handleUserInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === "email"){
            setEmail(event.target.value);
        }
        else if(event.target.name === "password"){
            setpassword(event.target.value);
        }
    }

    const handleLogin = (event:React.MouseEvent<HTMLButtonElement>) => {
        let credentials = {email, password};
        dispatch(loginUser(credentials));
    }

    return(
        <div className='login-form'>
            <div id='header-container'>
                <h1 id='header'>Login to Expense Reimbursement System</h1>
            </div>

            <form className='login-input-form'>
                <div className='login-container'>
                    <label id='login-input-label'>Please Enter Email:</label>
                    <input id='login-input' type="text" placeholder='jSmith@mail.com' name="email" onChange={handleUserInput}></input>

                    <label id='login-input-label'>Please Enter Password:</label>
                    <input id='login-input' type="password" placeholder='********' name="password" onChange={handleUserInput}></input>
                </div>


            </form>

            <div className='button-container'>
                <button id='login-button' onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}