import React, { useState } from 'react';
import { QuizStateContext } from './helpers/context';
import Quiz from './elements/Quiz';
import Menu from './elements/Menu';
import EndScreen from './elements/EndScreen';
import '../../styles/quizTwo.elements.css';

const QuizTwo = () => {

    const [quizState, setQuizState] = useState("menu");
    const [userName, setUserName] = useState("");
    const [score, setScore] = useState(0);

    return (
        <div className="container-quiz-two">
            <h1 className='title-quiz'>Quiz Two</h1>

            <QuizStateContext.Provider
                value={{
                    quizState,
                    setQuizState,
                    userName,
                    setUserName,
                    score,
                    setScore,
                }}
            >
                {quizState === "menu" && <Menu />}
                {quizState === "taking" && <Quiz />}
                {quizState === "finished" && <EndScreen />}
            </QuizStateContext.Provider>
        </div>
    )
};

export default QuizTwo;