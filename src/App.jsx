import React from "react"
import { BrowserRouter as Router,Route,Routes,Navigate } from "react-router-dom";
import Navbar from "./Component/Navbar"
import Home from"./Component/Home"
import Footer from "./Component/footer";
function App() {
  
  return (
    <>
    <Router> 
      <Navbar/>
      <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
      
    </>
  )
}

export default App
