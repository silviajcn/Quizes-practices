import React, { useContext } from 'react';
import { QuizStateContext } from '../helpers/context';
import '../../../styles/quizTwo.elements.css';

const Menu = () => {

    const { setQuizState, setUserName } = useContext(QuizStateContext);

    return (
        <div className="container-quiz-two">
            <div className='menu'>
                <h1 className='title-screen'>Menu</h1>

                <form>
                    <label>Please, enter your name:</label>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={(event) => {
                            setUserName(event.target.value);
                        }}
                    />
                </form>
                <button
                    type="button"
                    onClick={() => { setQuizState("taking") }}
                    className="btn-menu"
                >
                    Start Quiz
                </button>
            </div>
        </div>
    )
};

export default Menu;