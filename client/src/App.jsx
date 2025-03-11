import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomeCarousel from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<HomeCarousel />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
