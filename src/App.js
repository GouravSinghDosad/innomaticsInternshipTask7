import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
// import './styles.css';

function App() {
    return (
        <Router>
            <div>
                <Routes>  
                    <Route path="/" exact element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services/*" element={<Services />} />  
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<h1>404 - Not Found</h1>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
