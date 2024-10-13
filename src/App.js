import React, { useState } from 'react';
import './App.css';
import Flashcard from './Flashcard/Flashcard';
import './Flashcard/Flashcard.css'

const App = () => {
    const initialCards = [
        { id: 1, front: 'France', back: 'Paris' },
        { id: 2, front: 'Germany', back: 'Berlin' },
        { id: 3, front: 'Italy', back: 'Rome' },
        { id: 4, front: 'Spain', back: 'Madrid' },
        { id: 5, front: 'United Kingdom', back: 'London' },
        { id: 6, front: 'Zimbabwe', back: 'Harare' }, // that's where I come from by the way
        { id: 7, front: 'South Africa', back: 'Pretoria' },
        { id: 8, front: 'Botswana', back: 'Gaborone' },
        { id: 9, front: 'Canada', back: 'Toronto' },
        { id: 10, front: 'Zambia', back: 'Lusaka' },
    ];

    const [cards, setCards] = useState(initialCards);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [streak, setStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);
    const [feedback, setFeedback] = useState('');

    const handleNextCard = () => {
        setCurrentCardIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 1));
        setFeedback('');
    };

    const handlePrevCard = () => {
        setCurrentCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        setFeedback('');
    };

    const handleMasterCard = () => {
        const updatedCards = cards.filter((card) => card.id !== cards[currentCardIndex].id);
        setCards(updatedCards);
        handleNextCard();
    };

    const handleShuffle = () => {
        // Shuffle the array of cards
        const shuffledCards = [...initialCards].sort(() => Math.random() - 0.5);
        setCards(shuffledCards);
        setCurrentCardIndex(0); // Reset current card index to the first card
        setFeedback('');
    };

    const handleGuessSubmit = (guess) => {
        if (guess.toLowerCase() === cards[currentCardIndex].back.toLowerCase()) {
            setStreak((prevStreak) => prevStreak + 1);
            setLongestStreak((prevLongestStreak) => Math.max(prevLongestStreak, streak + 1));
            setFeedback('Correct!');
            setCards((prevCards) => {
                const updatedCards = [...prevCards];
                updatedCards[currentCardIndex].guessedCorrectly = true;
                return updatedCards;
            });
        } else {
            setStreak(0);
            setFeedback('Wrong!');
            setCards((prevCards) => {
                const updatedCards = [...prevCards];
                updatedCards[currentCardIndex].guessedCorrectly = false;
                return updatedCards;
            });
        }
    };

    return (
        <div className="app">
            <div className="centered">
                <h1>Country-Capital Quiz</h1>
                <h3>Do you think you know all countries and their capitals? Test your knowledge!</h3>
                <h5>Number of Cards: {cards.length}</h5>
                <div>
                    <span>Current Streak: {streak} |</span>
                    <span> Longest Streak: {longestStreak}</span>
                </div>
                <div className="flashcard-container">
                    {cards.length > 0 && (
                        <Flashcard
                            card={cards[currentCardIndex]}
                            onNext={handleNextCard}
                            onBack={handlePrevCard}
                            onMaster={handleMasterCard}
                            onShuffle={handleShuffle}
                            onSubmitGuess={handleGuessSubmit}
                            feedback={feedback}
                        />
                    )}
                    {cards.length === 0 && <p>No more cards to study!</p>}
                </div>
            </div>
        </div>
    );
};

export default App;
