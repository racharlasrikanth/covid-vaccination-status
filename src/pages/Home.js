import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <header className="home-container">
            <div className="home">
                <div className="home-content">
                    <h1 className='home-page-title'>Stay home stay safe</h1>
                    <Link className='home-button' to="/form">continue to start</Link>
                </div>
            </div>
        </header>
    )
}

export default Home;
