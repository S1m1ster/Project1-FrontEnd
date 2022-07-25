import React from "react";
import { useSelector,  useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../../Components/Navbar/Navbar";
import { useEffect } from "react";
import { getEmployees } from "../../Slices/UserSlice";
import "./ViewEmployeesPage.css"

export const ViewEmployeesPage: React.FC = () => {
    const managerInfo = useSelector((state: RootState) => state.user);
    const allEmployees = useSelector((state: RootState) => state.user.users);
    const navigateTo = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const type = 2;
    const info = {type};
    
    useEffect(() => {
        if(!managerInfo.isLoggedIn){
            navigateTo('/login');
        }
        else{
            dispatch(getEmployees());
        }
        
    }, [managerInfo.isLoggedIn]);

    return(
        <div className="view-all-employees-page">
            <Navbar/>
            <h1 id="view-all-employees-page-title">All Emlpoyee's </h1>

            <div className="view-all-employees-page-container">
              {allEmployees?.map((user) => {
                return (
                  <div className="user-container" key={user.userId}>
                    <div className="user-info">
                      <label>Employee Id: {user.userId}</label>
                    </div>

                    <div className="user-info">
                      <label>Username: {user.username}</label>
                    </div>

                    <div className="user-info">
                      <label>Password: {user.password}</label>
                    </div>

                    <div className="user-info">
                      <label>First Name: {user.firstName}</label>
                    </div>

                    <div className="user-info">
                      <label>Last Name: {user.lastName}</label>
                    </div>

                    <div className="user-info">
                      <label>Email: {user.email}</label>
                    </div>

                    <div className="user-info">
                      <label>Role: {user.userPair_role?.roleType}</label>
                    </div>

                  </div>
                )
              })}
            </div>
        </div>
        
    )
}