import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Home = () => (
    <div className='main-container'>
        <div className="heading-part"><h1>Home</h1></div>
        <nav>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/services" activeClassName="active">Services</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </nav>
        <p>Hello, I'm Gourav Singh Dosad, a dedicated full-stack developer possessing a
        versatile skill set. I excel in building resilient and optimized web applications
        using technologies such as C, HTML, CSS, JavaScript, SQL, TypeScript, Python, React,
        MySQL, and MongoDB. My strength lies in my proficiency in both front-end and back-end
        development, enabling me to thrive in environments that promote continuous learning and innovation.</p>
        <p>
        Technical Skills:
        </p>
        <p>Programming Languages: C, JavaScript, TypeScript, Python</p>
         <p>Frontend Development: HTML, CSS, React</p>
         <p> Backend Development: Node.js, Next.js</p>
        <p>Databases: MySQL, MongoDB</p>
        
    </div>
);

export default Home;
