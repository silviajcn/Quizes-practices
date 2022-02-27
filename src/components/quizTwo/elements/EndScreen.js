import React, { useContext } from 'react';
import { QuizStateContext } from '../helpers/context';
import { Questions } from '../helpers/questions';
import '../../../styles/quizTwo.elements.css';

const EndScreen = () => {

    const { score, setScore, setQuizState, userName } = useContext(
        QuizStateContext
    );

    const restartQuiz = () => {
        setScore(0);
        setQuizState("menu");
    };

    return (
        <div className="end-screen">
            <h1 className='title-quiz'>Quiz Finished {userName}!</h1>
            <h1>
                You got {score} / {Questions.length} points
            </h1>
            <div className='options'>
                <button onClick={restartQuiz}>Restart Quiz</button>
            </div>
        </div>
    )
};

export default EndScreen;