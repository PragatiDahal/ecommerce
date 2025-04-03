import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./Component/AdminDashboard";
import AddClothingForm from "./Component/AddClothingForm";


function App() {
  
  return (
    <>
   <Router>
    <Routes>
      <Route path="/" element={<AdminDashboard/>} />
      <Route path="/addclothing" element={<AddClothingForm/>} />
    
    </Routes>
   </Router>
    </>
  )
}

export default App
