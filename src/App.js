import logo from './logo.svg';
import './App.css';

import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import CreateEmployeeComponent from './components/CreateEmployeeComponent';

import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

import React from "react";
import {BrowserRouter as Router, Route,Link, Routes} from 'react-router-dom';

function App() {
  return (
          <Router>
            <HeaderComponent />
             <div className="container">
               <Routes>
                {/* <Route  exact  path="/"  element={<ListEmployeeComponent />} />
                 <Route  exact  path="/employees" element={<ListEmployeeComponent />} />
                 <Route  exact  path="/add-employee" element={<CreateEmployeeComponent />} />
                 <Route  exact  path="/update-employee/:id" element={<UpdateEmployeeComponent />} />*/}
                 <Route  exact  path="/"  element={<ListEmployeeComponent />} />
                 <Route  exact  path="/employees" element={<ListEmployeeComponent />} />
                 <Route  exact  path="/add-employee/:id" element={<CreateEmployeeComponent />} />
               </Routes>
              </div>
            <FooterComponent />
        </Router>
  );
}




export default App;
