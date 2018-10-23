import React from 'react';

const PrevArrow = ({ onClick, to }) => {
  return (
    <button type="button" onClick={onClick} className="prevArrow" aria-label={to}></button>
  );
};

export default PrevArrow;
