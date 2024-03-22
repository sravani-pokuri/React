
import './App.css';
import Navbar from './Layout/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './Registration/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './Registration/Signin';
import ShowList from './CrudOperations/ShowList';
import CreateInsurance from './CrudOperations/CreateInsurance';
import EditList from './CrudOperations/EditList'
function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Navbar/>} />
      <Route exact path="/SignUp" element={<SignUp/>} />
      <Route exact path="/Signin" element={<Signin/>} />
      <Route exact path="/ShowList" element={<ShowList/>} />
      <Route exact path="/create" element={<CreateInsurance/>} />
      <Route exact path="/edit/:vehicleNumber" element={<EditList/>} />

     
      
    </Routes>
  </Router>
  );
}

export default App;
