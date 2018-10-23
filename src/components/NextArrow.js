import React from 'react';

const NextArrow = ({ onClick, to }) => {
  return (
    <button type="button" onClick={onClick} className="nextArrow" aria-label={to}></button>
  );
};

export default NextArrow;
