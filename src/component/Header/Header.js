import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container text-center image">
            <div className="header-content">
            <h1 className="header-title">Game Of Thrones </h1>
            <p className="header-quote"> You Need To Take Your Enemy’s Side If You’re Going To See Things The Way They Do </p>
            </div>
            <h2 className="movie-budget pt-1 pb-2">Total Series Budget : Over 100 Million Dollar</h2>
        </div>
    );
};

export default Header;