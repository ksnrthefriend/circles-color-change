// CirclesContainer.js
import React from 'react';
import Circle from './Circle';

const CirclesContainer = () => {
  const colors = ['blue', 'yellow', 'green', 'red'];

  return (
    <div className="circles-container">
      {colors.map((color, index) => (
        <Circle key={index} color={color} />
      ))}
    </div>
  );
};

export default CirclesContainer;
