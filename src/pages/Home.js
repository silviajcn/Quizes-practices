import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main>
            <h1>Home</h1>

            <Link to="one">
                <div>
                    <p>Quiz 1</p>
                </div>
            </Link>
        </main>
    )
};

export default Home;