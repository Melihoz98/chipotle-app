import React from 'react';
import './BookButtons.css';

const BookButtons = () => {
  return (
    <div className="button-container">
      <button 
        type="button" 
        className="btn custom-btn"
      >
        Menu
      </button>
      <button 
        type="button" 
        className="btn custom-btn"
      >
        Book bord
      </button>
    </div>
  );
};

export default BookButtons;
