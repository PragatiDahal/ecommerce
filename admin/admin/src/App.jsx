import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./Component/AdminDashboard";
import AddMenClothingForm from "./Component/AddMenClothingForm";
import AdminSignIn from "./Component/AdminSignin";
import AddMenShoesForm from "./Component/AddMenShoesForm";
import AddWomenClothingForm from "./Component/AddWomenClothingForm";
import AddWomenShoesForm from "./Component/AddWomenShoesForm";
import AddKidsClothingForm from "./Component/AddKidsClothingForm";
import AddKidsShoesForm from "./Component/AddKidsShoesForm";


function App() {
  
  return (
    <>
   <Router>
    <Routes>
    <Route path="/" element={<AdminSignIn/>} />
      <Route path="/dashboard" element={<AdminDashboard/>} />
      <Route path="/addmenclothing" element={<AddMenClothingForm/>} />
      <Route path="/addmenshoes" element={<AddMenShoesForm/>} />
      <Route path="/addwomenclothing" element={<AddWomenClothingForm/>} />
      <Route path="/addwomenshoes" element={<AddWomenShoesForm/>} />
      <Route path="/addKidclothing" element={<AddKidsClothingForm/>} />
      <Route path="/addKidshoes" element={<AddKidsShoesForm/>} />
    
    </Routes>
   </Router>
    </>
  )
}

export default App
