import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../Components/LoginForm/LoginForm';

export const LoginPage: React.FC = () => {
    const currentUserState = useSelector((state: RootState) => state.user);
  
    const navigateTo = useNavigate();
  
    useEffect(() => {
      if (currentUserState.isLoggedIn !== false) {
        if(currentUserState.user?.userPair_role?.roleId === 2){
          console.log("we logged in manager");
          navigateTo('/managerhomepage')
        }
        else{
          console.log("we logged in employee");
          navigateTo('/employeehomepage');
        }
      }
      else{
        console.log("credentials failed");
      }
    }, [currentUserState.isLoggedIn, currentUserState.user?.userPair_role?.roleId, navigateTo]);
  
  
    return (
  
      <div className="loginPage">
        {currentUserState.error ? (
          <h2 className="loginError">Email or password incorrect</h2>
        ) : null}
  
        <LoginForm/>
      </div>
    );
  };