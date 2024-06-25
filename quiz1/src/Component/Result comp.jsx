// src/Score.js
import React from 'react';

export default function Score({ score, totalQuestions }) {
  return (
    <div className='score-section'>
      You scored {score} out of {totalQuestions}
    </div>
  );
}


