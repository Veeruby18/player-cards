import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './components/PlayersList';

function App() {
  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>FIFA Player Cards</h2>
      <PlayersList />
    </div>
  );
}

export default App;
