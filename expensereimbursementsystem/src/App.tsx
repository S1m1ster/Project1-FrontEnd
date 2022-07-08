import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { EmployeeHomePage } from './Views/HomePage/EmployeeHomePage';
import { ManagerHomePage } from './Views/HomePage/ManagerHomePage';
import { CreateReimbursementPage } from './Views/CreateReimbursementPage/CreateReimbursementPage';
import { LoginPage } from './Views/LoginPage/LoginPage';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path = "*" element = {<Navigate to= "/login" replace />}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/managerhomepage" element={<ManagerHomePage />} />
          <Route path="/employeehomepage" element={<EmployeeHomePage />} />
          <Route path="/createTicket" element={<CreateReimbursementPage />} />
      </Routes>
    </HashRouter>
  );
    
}

export default App;
