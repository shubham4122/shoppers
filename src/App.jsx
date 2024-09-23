import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const HomePage = lazy(() => import("./components/Home"));
const Cart = lazy(() => import("./components/Cart"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
