// src/components/Card.js
import React from 'react';

const Card = ({ card, showAnswer }) => {
    return (
        <div className="card">
            {showAnswer ? <p>{card.answer}</p> : <p>{card.question}</p>}
        </div>
    );
};

export default Card;
