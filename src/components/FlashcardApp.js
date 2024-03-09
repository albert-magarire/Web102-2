// src/components/FlashcardApp.js
import React, { useState } from 'react';
import Card from './Card';

const FlashcardApp = ({ cards }) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const currentCard = cards[currentCardIndex];

    const handleNextCard = () => {
        const nextIndex = (currentCardIndex + 1) % cards.length;
        setCurrentCardIndex(nextIndex);
        setShowAnswer(false);
    };

    return (
        <div className="flashcard-app">
            <h1>Country Capital Quiz</h1>
            <h4>You think you know countries and their capitals? Take this quiz!</h4>
            <h5>Number of Cards: {cards.length}</h5>
            <div className="card-div" onClick={() => setShowAnswer(!showAnswer)}>
                <Card card={currentCard} showAnswer={showAnswer}/>
            </div>
            <button onClick={handleNextCard}>Next Card</button>
        </div>
    );
};

export default FlashcardApp;
