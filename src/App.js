// src/App.js
import React from 'react';
import './App.css';
import FlashcardApp from './components/FlashcardApp';

const cards = [
    { question: 'Capital City of Zimbabwe', answer: 'Harare' },
    { question: 'Capital City of UAE', answer: 'Abu Dhabi' },
    { question: 'Capital City of Afghanistan', answer: 'Kabul' },
    { question: 'Capital City of Albania', answer: 'Tirana' },
    { question: 'Capital City of Algeria', answer: 'Algiers' },
    { question: 'Capital City of Andorra', answer: 'Andorra la Vella' },
    { question: 'Capital City of Angola', answer: 'Luanda' },
    { question: 'Capital City of Antigua and Barbuda', answer: "St. John's" },
    { question: 'Capital City of Argentina', answer: 'Buenos Aires' },
    { question: 'Capital City of Armenia', answer: 'Yerevan' },
    { question: 'Capital City of Australia', answer: 'Canberra' },
    { question: 'Capital City of Austria', answer: 'Vienna' },
    { question: 'Capital City of Azerbaijan', answer: 'Baku' },
    { question: 'Capital City of Bahamas', answer: 'Nassau' },
    { question: 'Capital City of Bahrain', answer: 'Manama' },
    { question: 'Capital City of Bangladesh', answer: 'Dhaka' },
    { question: 'Capital City of Barbados', answer: 'Bridgetown' },
    { question: 'Capital City of Belarus', answer: 'Minsk' },
    { question: 'Capital City of Belgium', answer: 'Brussels' },
    { question: 'Capital City of Belize', answer: 'Belmopan' },
    { question: 'Capital City of Benin', answer: 'Porto-Novo' },
    { question: 'Capital City of Bhutan', answer: 'Thimphu' },
    { question: 'Capital City of Bolivia', answer: 'Sucre' },
    { question: 'Capital City of Bosnia and Herzegovina', answer: 'Sarajevo' },
    { question: 'Capital City of Botswana', answer: 'Gaborone' },
    { question: 'Capital City of Brazil', answer: 'Brasília' },
    { question: 'Capital City of Brunei', answer: 'Bandar Seri Begawan' },
    { question: 'Capital City of Bulgaria', answer: 'Sofia' },
    { question: 'Capital City of Burkina Faso', answer: 'Ouagadougou' },
    { question: 'Capital City of Burundi', answer: 'Gitega' },
    { question: 'Capital City of Cambodia', answer: 'Phnom Penh' },
    { question: 'Capital City of Cameroon', answer: 'Yaoundé' },
    { question: 'Capital City of Canada', answer: 'Ottawa' },
    { question: 'Capital City of Cape Verde', answer: 'Praia' },
    { question: 'Capital City of Central African Republic', answer: 'Bangui' },
    { question: 'Capital City of Chad', answer: "N'Djamena" },
    { question: 'Capital City of Chile', answer: 'Santiago' },
    { question: 'Capital City of China', answer: 'Beijing' },
    { question: 'Capital City of Colombia', answer: 'Bogotá' },
    { question: 'Capital City of Comoros', answer: 'Moroni' },
    { question: 'Capital City of Congo (Congo-Brazzaville)', answer: 'Brazzaville' },
    { question: 'Capital City of Costa Rica', answer: 'San José' },
    { question: 'Capital City of Croatia', answer: 'Zagreb' },
    { question: 'Capital City of Cuba', answer: 'Havana' },
    { question: 'Capital City of Cyprus', answer: 'Nicosia' },
    { question: 'Capital City of Czech Republic', answer: 'Prague' },
    { question: 'Capital City of DR Congo (Congo-Kinshasa)', answer: 'Kinshasa' },
    { question: 'Capital City of Denmark', answer: 'Copenhagen' },
    { question: 'Capital City of Djibouti', answer: 'Djibouti' },
    { question: 'Capital City of Dominica', answer: 'Roseau' },
    { question: 'Capital City of Dominican Republic', answer: 'Santo Domingo' },
    // Add more cards as needed
];


function App() {
  return (
      <div className="App">
        <FlashcardApp cards={cards} />
      </div>
  );
}

export default App;
