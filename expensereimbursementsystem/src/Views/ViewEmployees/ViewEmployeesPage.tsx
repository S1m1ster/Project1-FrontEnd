import React from "react";
import { useSelector,  useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { useNavigate } from 'react-router-dom';
import { Navbar } from "../../Components/Navbar/Navbar";
import { useEffect } from "react";
import { getEmployees } from "../../Slices/UserSlice";


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
        <div className="viewResolved-page">
            <Navbar/>
            <h1>All Resolved Reimbursements </h1>

            <div className="Resolved-container">
              {allEmployees?.map((user) => {
                return (
                  <div className="ticket-container" key={user.userId}>
                    <div className="ticket-info">
                      <label>Employee Id: {user.userId}</label>
                    </div>

                    <div className="ticket-info">
                      <label>Username: {user.username}</label>
                    </div>

                    <div className="ticket-info">
                      <label>Password: {user.password}</label>
                    </div>

                    <div className="ticket-info">
                      <label>First Name: {user.firstName}</label>
                    </div>

                    <div className="ticket-info">
                      <label>Last Name: {user.lastName}</label>
                    </div>

                    <div className="ticket-info">
                      <label>Email: {user.email}</label>
                    </div>

                    <div className="ticket-info">
                      <label>Role: {user.userPair_role?.roleType}</label>
                    </div>

                  </div>
                )
              })}
            </div>
        </div>
        
    )
}