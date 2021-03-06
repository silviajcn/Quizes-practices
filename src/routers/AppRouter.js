import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import QuizOne from '../components/quizOne/QuizOne';
import QuizTwo from '../components/quizTwo/QuizTwo';
import QuizThree from '../components/quizThree/QuizThree';

const AppRouter = () => {

    return (
        <Router>
            <NavBar />

            <Routes>

                <Route path='/' element={<Home />} />

                <Route path='/one' element={<QuizOne />} />

                <Route path='/two' element={<QuizTwo />} />

                <Route path='/three' element={<QuizThree />} />

                <Route path='*' element={<Navigate to="/" />} />

            </Routes>

            <Footer />
        </Router>
    )
}

export default AppRouter