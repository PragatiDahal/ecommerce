import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomeCarousel from "./Components/Pages/Home";
import Footer from "./Components/Footer";
import Men from "./Components/Shop/Men";
import Women from "./Components/Shop/Women";
import Kids from "./Components/Shop/Kids";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeCarousel />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop/men" element={<Men />} />
          <Route path="/shop/women" element={<Women />} />
          <Route path="/shop/kids" element={<Kids />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
