// import logo from './logo.svg';
import './App.css';
import React from "react";
import NavBar from "./compenet/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./compenet/Home";
// import About from "./compenet/About";
// import Contact from "./compenet/Contact";
// import Services from "./compenet/Services";






const NavList=['Home','About','Contact','Services']
function App() {
  return (
    <div >
      <Router>
        <NavBar NavList={NavList} />
        <Routes>
             <Route path="/Home" element={<Home />} />
             <Route path="/About" element={<h1>À propos</h1>} />
             <Route path="/Contact" element={<h1>Contact</h1>} />
             <Route path="/Services" element={<h1>Services</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
