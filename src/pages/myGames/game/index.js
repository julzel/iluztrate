import React from 'react';
import Summary from '../../../components/summary';


import './Game.scss';

const Game = ({ history, game }) => {
  const goBack = () => history.goBack();

  console.log(game)

  return (
    <div className="game">
      <Summary goBack={goBack} gameReview={game} />
    </div>
  )
}
 
export default Game;