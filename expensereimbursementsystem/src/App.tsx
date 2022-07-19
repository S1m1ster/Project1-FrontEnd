import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { EmployeeHomePage } from './Views/HomePage/EmployeeHomePage';
import { ManagerHomePage } from './Views/HomePage/ManagerHomePage';
import { CreateReimbursementPage } from './Views/CreateReimbursementPage/CreateReimbursementPage';
import { LoginPage } from './Views/LoginPage/LoginPage';
import { ViewAccountPage } from './Views/ViewAccountPage/ViewAccountPage';
import { UpdateAccountPage} from './Views/UpdateAccountPage/UpdateAccountPage';
import { ViewPendingReimbursementPage } from './Views/ViewReimbursementPage/ViewPendingReimbursementPage'
import { ViewResolvedReimbursementPage } from './Views/ViewReimbursementPage/ViewResolvedReimbursementPage';
import { ViewAllPendingPage } from './Views/ViewAllReimbursementPage/ViewAllPending';
import { ViewAllResolvedPage } from './Views/ViewAllReimbursementPage/ViewAllResolved';
import { ViewEmployeesPage } from './Views/ViewEmployees/ViewEmployeesPage';
import { SearchEmployeeReimbursementPage } from './Views/SearchEmployeeReimbursementPage/SearchEmployeeReimbursementPage';
import { ViewEmployeeReimbursementPage } from './Views/ViewEmployeeReimbursementPage/ViewEmployeeReimbursementPage';
import { FindTicketPage } from './Views/FindTicketPage/FindTicketPage';
import { ApproveDenyTicketPage } from './Views/ApproveDenyTicketPage/AprroveDenyTicketPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path = "*" element = {<Navigate to= "/login" replace />}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/managerhomepage" element={<ManagerHomePage />} />
          <Route path="/employeehomepage" element={<EmployeeHomePage />} />
          <Route path="/createTicket" element={<CreateReimbursementPage />} />
          <Route path="/viewAccount" element={<ViewAccountPage/>}/>
          <Route path="/updateAccount" element={<UpdateAccountPage/>}/>
          <Route path="/viewPending" element={<ViewPendingReimbursementPage/>}/>
          <Route path="/viewResolved" element={<ViewResolvedReimbursementPage/>}/>
          <Route path="/viewAllPending" element={<ViewAllPendingPage/>}/>
          <Route path="/viewAllResolved" element={<ViewAllResolvedPage/>}/>
          <Route path="/viewAllEmployees" element={<ViewEmployeesPage/>}/>
          <Route path="/searchAllByEmployee" element={<SearchEmployeeReimbursementPage/>}/>
          <Route path="/viewAllByEmployee" element={<ViewEmployeeReimbursementPage/>}/>
          <Route path="/findTicektPage" element={<FindTicketPage/>}/>
          <Route path="/approveDenyTicketPage" element={<ApproveDenyTicketPage/>}/>
      </Routes>
    </HashRouter>
  );
    
}

export default App;
