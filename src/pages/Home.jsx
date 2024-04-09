import React from 'react';
import name from '../TekstNavn-removebg-preview(1).png'; // Import the logo image

const Home = () => {
  return (
    <div className="home">
      <img src={name} alt="Navn" style={{ width: '600px', height: 'auto', marginRight: '10px' }} /> 
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

export default Home;
