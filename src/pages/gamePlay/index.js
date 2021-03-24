import React, { useState } from 'react';

const GamePlay = () => {
  const [game] = useState(JSON.parse(localStorage.getItem('gameToPlay')));
  return (
    <div className="game-play">
      {game.name}
    </div>
  );
}
 
export default GamePlay;