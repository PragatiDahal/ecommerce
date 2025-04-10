import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomeCarousel from "./Components/Pages/Home";
import Footer from "./Components/Footer";
import Men from "./Components/Shop/Men";
import Women from "./Components/Shop/Women";
import Kids from "./Components/Shop/Kids";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import LoginPage from "./Components/Pages/LoginPage";
import RegisterPage from "./Components/Pages/RegisterPage";
import BestSellers from "./Components/BestSellers";
import Trending from "./Components/Trending";
import CategorySection from "./Components/CategorySection";
import SaleEvent from "./Components/SaleEvent";
import Newsletter from "./Components/Newsletter";
import CheckoutPage from "./Components/Pages/CheckoutPage";
import PopupNewsletter from "./Components/PopupNewsletter";

function App() {
  const [cart, setCart] = useState([]); // Manage cart items

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <Router>
      <PopupNewsletter/>
      <Navbar cart={cart} /> {/* Pass cart to Navbar */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeCarousel />
              <CategorySection />
              <BestSellers addToCart={addToCart} />
              <Trending addToCart={addToCart} />
              <SaleEvent />
              <Newsletter />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/checkout"
          element={<CheckoutPage cart={cart} setCart={setCart} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/shop/men" element={<Men addToCart={addToCart} />} />
        <Route path="/shop/women" element={<Women addToCart={addToCart} />} />
        <Route path="/shop/kids" element={<Kids addToCart={addToCart} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
