import React, { useState, useEffect } from 'react';
import questions from './questions';
import '../../styles/quizOne.elements.css';

const QuizOne = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(60);
    const [areDisabled, setAreDisabled] = useState(false);
    const [answersShown, setAnswersShown] = useState(false);

    function handleAnswerSubmit(isCorrect, e) {
        // Añadir puntaje
        if (isCorrect) setScore(score + 1);

        // Añadir estilos (correct/incorrect)
        e.target.classList.add(isCorrect ? "correct" : "incorrect");

        // Cambiar a la siguiente pregunta
        setTimeout(() => {
            if (currentQuestion === questions.length - 1) {
                setIsFinished(true);
            } else {
                setCurrentQuestion(currentQuestion + 1);
                setTimeRemaining(60);
            }
        }, 1500);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (timeRemaining > 0) setTimeRemaining((prev) => prev - 1);
            if (timeRemaining === 0) setAreDisabled(true);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeRemaining]);

    if (isFinished)
        return (
            <div className="container-quiz-one">
                <h1 className='title-quiz'>Quiz One</h1>

                <main className="container-quiz">
                    <div className="quiz-finish">
                        <span>
                            {" "}
                                Obtuviste {score} de {questions.length}{" "}
                        </span>
                        <button onClick={() => (window.location.href = "/")}>
                            {" "}
                                Volver al in inicio
                        </button>
                        <button
                            onClick={() => {
                                setIsFinished(false);
                                setAnswersShown(true);
                                setCurrentQuestion(0);
                            }}
                        >
                            Ver respuestas
                        </button>
                    </div>
                </main>
            </div>
        );

    if (answersShown)
        return (
            <div className="container-quiz-one">
                <h1 className='title-quiz'>Quiz One</h1>

                <main className="container-quiz">
                    <div className="left">
                        <div className="nro-question">
                            <p><span>Pregunta {currentQuestion + 1} de {questions.length}</span></p>
                        </div>
                        <div className="title-question">
                            {questions[currentQuestion].title}
                        </div>
                        <div>
                            {
                                questions[currentQuestion].options.filter(
                                    (option) => option.isCorrect
                                )[0].textAnswer
                            }
                        </div>

                        <button
                            onClick={() => {
                                if (currentQuestion === questions.length - 1) {
                                    window.location.href = "/";
                                } else {
                                    setCurrentQuestion(currentQuestion + 1);
                                }
                            }}
                        >
                            {currentQuestion === questions.length - 1
                                ? "Finalizar prueba"
                                : "Siguiente"}
                        </button>
                    </div>
                </main>
            </div>
        );






    return (
        <div className="container-quiz-one">
            <h1 className='title-quiz'>Quiz One</h1>

            <div className='container-quiz'>
                <div className='left'>
                    <div className='nro-question'>
                        <p><span>Pregunta {currentQuestion + 1} de {questions.length}</span></p>
                    </div>
                    <div className='title-question'>
                        <p>{questions[currentQuestion].title}</p>
                    </div>
                    <div>
                        {!areDisabled ? (
                            <p className='time-remaining'>Tiempo restante: {timeRemaining}</p>
                        ) : (
                            <button
                                className='btn-continue'
                                onClick={() => {
                                    setTimeRemaining(60);
                                    setAreDisabled(false);  
                                    if (currentQuestion === questions.length - 1) {
                                        setIsFinished(true);
                                    } else {
                                        setCurrentQuestion(currentQuestion + 1);
                                    }
                                }}
                            >
                                Continuar
                            </button>
                        )}
                    </div>
                </div>
                <div className='right'>
                    {questions[currentQuestion].options.map((resp) => (
                        <button
                            disabled={areDisabled}
                            type="button"
                            key={resp.textAnswer}
                            onClick={(e) => handleAnswerSubmit(resp.isCorrect, e)}
                        >
                            {resp.textAnswer}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default QuizOne;