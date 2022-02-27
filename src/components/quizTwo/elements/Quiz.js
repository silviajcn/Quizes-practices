import React, { useContext, useState } from 'react';
import { Questions } from '../helpers/questions';
import { QuizStateContext } from '../helpers/context';
import '../../../styles/quizTwo.elements.css';

const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const { score, setScore, setQuizState } = useContext(
        QuizStateContext
    );

    const nextQuestion = () => {
        if (Questions[currentQuestion].asnwer === optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    };

    const finishQuiz = () => {
        if (Questions[currentQuestion].asnwer === optionChosen) {
            setScore(score + 1);
        }
        setQuizState("finished");
    };
    
    return (
        <div className="container-quiz-two">            
            <div className='quiz'>
                <h1 className='title-screen'>Quiz</h1>

                <h2>{Questions[currentQuestion].prompt}</h2>
                <div className='options'>
                    <button
                        onClick={() => {
                            setOptionChosen("A");
                        }}
                    >
                        {Questions[currentQuestion].optionA}
                    </button>

                    <button
                        onClick={() => {
                            setOptionChosen("B");
                        }}
                    >
                        {Questions[currentQuestion].optionB}
                    </button>

                    <button
                        onClick={() => {
                            setOptionChosen("C");
                        }}
                    >
                        {Questions[currentQuestion].optionC}
                    </button>

                    <button
                        onClick={() => {
                            setOptionChosen("D");
                        }}
                    >
                        {Questions[currentQuestion].optionD}
                    </button>
                </div>

                <div className='options'>
                    {currentQuestion === Questions.length - 1 ? (
                        <button
                            onClick={finishQuiz}
                            id="next-question"
                        >
                            Finish Quiz
                        </button>
                    ) : (
                        <button
                            onClick={nextQuestion} 
                            id="next-question"
                        >
                            Next Question
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Quiz;