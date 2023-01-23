import React, { useState } from 'react';
import './Navbar.css';
import Home from './Home';
import Skills from './Skills';
import About from './About';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('home');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }
    return (
        <>
            <nav className="Navbar">
                <div 
                    className={activeTab === 'home' ? 'active' : ''}
                    onClick={() => handleTabClick('home')}
                >
                    Home
                </div>
                <div 
                    className={activeTab === 'about' ? 'active' : ''}
                    onClick={() => handleTabClick('about')}
                >
                    About
                </div>
                <div 
                    className={activeTab === 'skills' ? 'active' : ''}
                    onClick={() => handleTabClick('skills')}
                >
                    Skills
                </div>
            </nav>
            {activeTab === 'home' ? <Home /> : activeTab === 'about' ? <About /> : <Skills />}
        </>
    );
};

export default Navbar;
