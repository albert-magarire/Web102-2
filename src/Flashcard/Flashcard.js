import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ card, onNext, onBack, onMaster, onShuffle, onSubmitGuess, feedback }) => {
    const [guess, setGuess] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);

    const handleGuessSubmit = () => {
        onSubmitGuess(guess);
        setGuess(''); // Clear the input after submitting guess
    };

    // This file contains all the HTML for the page
    return (
        <div className="flashcard-container">
            <div className={`flashcard ${showAnswer ? 'is-flipped' : ''}`} onClick={() => setShowAnswer(!showAnswer)}>
                <div className="card-inner">
                    <div className="card-front">
                        <div className="question">{card ? card.front : ''}</div>
                    </div>
                    <div className="card-back">
                        <div className="answer">{showAnswer && card ? card.back : ''}</div>
                    </div>
                </div>
            </div>
            <div className="feedback">{feedback}</div>
            <div className="guess-input">
                <input type="text" value={guess} onChange={(e) => setGuess(e.target.value)} placeholder="Enter your guess here"/><span>   </span>
                <button onClick={handleGuessSubmit}>Submit Guess</button>
            </div>
            <button className="navigation-button" onClick={onBack} disabled={!card || card.id === 1}>&#8592;</button>
            <span>   </span>
            <button className="navigation-button" onClick={onNext} disabled={!card || card.id === 5}>&#8594;</button>
            <span>   </span>
            <button className="action-button" onClick={onMaster}>Master</button>
            <span>   </span>
            <button className="action-button" onClick={onShuffle}>Shuffle Cards</button>
        </div>
    );
};

export default Flashcard;
