import React from 'react';
import './BookButtons.css';

const BookButtons = () => {
  return (
    <div className="button-container">
      <button 
        type="button" 
        className="btn custom-btn" 
        style={{ 
          color: 'white', 
          backgroundColor: 'black', 
          border:  '1px solid black',
          marginRight: '10px' // Add margin to the right
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'white';
          e.target.style.color = 'black';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'black';
          e.target.style.color = 'white';
        }}
      >
        Menu
      </button>
      <button 
        type="button" 
        className="btn custom-btn" 
        style={{ 
          color: 'white', 
          backgroundColor: 'black', 
          border: '1px solid black' 
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'white';
          e.target.style.color = 'black';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'black';
          e.target.style.color = 'white';
        }}
      >
        Book bord
      </button>
    </div>
  );
};

export default BookButtons;
