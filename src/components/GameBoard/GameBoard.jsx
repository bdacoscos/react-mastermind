import React from 'react';
import GuessRow from '../GuessRow/GuessRow';

const GameBoard = (props) => {
  return  (
    <div>
      <div>This is the GameBoard</div>
      <GuessRow />
      <GuessRow />
    </div>
  );
}

export default GameBoard;