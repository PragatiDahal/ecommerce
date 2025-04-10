import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./Component/AdminDashboard";
import AddMenClothingForm from "./Component/Pages/AddMenClothingForm";
import AdminSignIn from "./Component/AdminSignin";
import AddMenShoesForm from "./Component/Pages/AddMenShoesForm";
import AddWomenClothingForm from "./Component/Pages/AddWomenClothingForm";
import AddWomenShoesForm from "./Component/Pages/AddWomenShoesForm";
import AddKidsClothingForm from "./Component/Pages/AddKidsClothingForm";
import AddKidsShoesForm from "./Component/Pages/AddKidsShoesForm";
import UpdateItemWrapper from "./Component/Pages/UpdateItemWrapper";
import Trending from "./Component/Pages/Trending";
import ContactTable from "./Component/Pages/ContactTable";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminSignIn />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/addmenclothing" element={<AddMenClothingForm />} />
        <Route path="/addmenshoes" element={<AddMenShoesForm />} />
        <Route path="/addwomenclothing" element={<AddWomenClothingForm />} />
        <Route path="/addwomenshoes" element={<AddWomenShoesForm />} />
        <Route path="/addKidclothing" element={<AddKidsClothingForm />} />
        <Route path="/addKidshoes" element={<AddKidsShoesForm />} />
        <Route path="/update/:category/:id" element={<UpdateItemWrapper />} />
        <Route path="/trending" element={<Trending/>} />
        <Route path="/contact" element={<ContactTable/>} />

      </Routes>
    </Router>
  );
}

export default App;
