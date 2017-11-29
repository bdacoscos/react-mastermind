import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';

const GuessRow = (props) => {
  return (
    <div>
      <div>
        # GuessRow
      <GuessPegs />
      <GuessScore />
      </div>
    </div>
  )
}

export default GuessRow;