import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main className='home-container'>
            <h1 className='title-home'>Home</h1>

            <div className='grid-container'>
               <Link to="/one" className='links-two'>
                <div className='card'>
                    <img src="https://res.cloudinary.com/silviajcn/image/upload/v1645900258/PRACTICAS/Quizes/logo/logo_smk8tr.png" alt="quiz 1" title="quiz 1" className="img-quicez" />
                    <p>Quiz 1</p>
                </div>
                </Link>

                <Link to="/two" className='links-two'>
                <div className='card'>
                    <img src="https://res.cloudinary.com/silviajcn/image/upload/v1645900258/PRACTICAS/Quizes/logo/logo_smk8tr.png" alt="quiz 2" title="quiz 2" className="img-quicez" />
                    <p>Quiz 2</p>
                </div>
                </Link>
            </div>
        </main>
    )
};

export default Home;