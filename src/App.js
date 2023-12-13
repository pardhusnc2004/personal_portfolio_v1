import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './styles/home.css'
import React, {useEffect, useState} from 'react';
import { Navbar } from './components/navbar';
import { Home } from './components/home';
import { About } from './components/about';
import { Skills } from './components/skills';
import { Expertise } from './components/expertise';
import { Footer } from './components/footer';
import { Projects } from './components/projects';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
        <div>
            <Navbar/>
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/expertise" element={<Expertise />}/>
            </Routes>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
