import React from 'react';
import { NavLink, Route, Routes, useMatch } from 'react-router-dom';  // Updated import from 'useRouteMatch' to 'useMatch'
import './Services.css';

const Services = () => {
    const match = useMatch('/services/*');  // Updated from 'useRouteMatch' to 'useMatch'
    return (
        <div className='main-part'>
            <div className="heading-service"><h1>Services</h1></div>
            <nav>
                <NavLink to={`${match.path}/design`} activeClassName="active">Design</NavLink>
                <NavLink to={`${match.path}/development`} activeClassName="active">Development</NavLink>
            </nav>
            <Routes>
                <Route path="design" element={<div><h2>Design Services</h2><p>Details about design services offered by Innomatics Research Labs.</p></div>} />
                <Route path="development" element={<div><h2>Development Services</h2><p>Details about development services offered by Innomatics Research Labs.</p></div>} />
            </Routes>
            <div className="image-gallery">
                <div className="image-item"><img src="./images/annabelle.jpg" alt="Service 1" /></div>
                <div className="image-item"><img src="./images/ghostrider.jpeg" alt="Service 2" /></div>
                <div className="image-item"><img src="./images/demon-slayer.jpg" alt="Service 3" /></div>
            </div>
        </div>
    );
}

export default Services;
