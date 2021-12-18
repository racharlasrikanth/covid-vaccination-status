import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <section className="success-container">
            <div className="success-page">
                <h2 className='success-msg'>Data Submitted Successfully</h2>
                <Link className='success-home-btn' to="/">Back to Home</Link>
            </div>
        </section>
    )
}

export default Success;
