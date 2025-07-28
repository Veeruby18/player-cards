import React from 'react';
import Player from './Player';
import { players } from '../players';

export default function PlayersList() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {players.map((player, idx) => (
        <Player key={idx} {...player} />
      ))}
    </div>
  );
}
