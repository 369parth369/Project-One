import './App.css';
import React from 'react';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
//styles css
// import "./styles/header.scss"; 



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
