import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./Component/AdminDashboard";
import AddMenClothingForm from "./Component/AddMenClothingForm";
import AdminSignIn from "./Component/AdminSignin";


function App() {
  
  return (
    <>
   <Router>
    <Routes>
    <Route path="/" element={<AdminSignIn/>} />
      <Route path="/dashboard" element={<AdminDashboard/>} />
      <Route path="/addmenclothing" element={<AddMenClothingForm/>} />
    
    </Routes>
   </Router>
    </>
  )
}

export default App
