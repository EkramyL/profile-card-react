import React from 'react';
import mail from '../images/Mail.png';
import linkedin from '../images/linkedin.png';

function CardInfo() {
  return (
    <div className="card-info">
      <h1>Ekramy Latief</h1>
      <h2>Full-Stack Deveolper</h2>
      <h3>myemail@gmail.com</h3>
      <div className="buttons">
        <button className="email-btn">
          <img src={mail} className="mail-icon" /> Email
        </button>
        <button className="linkedin-btn">
          <img src={linkedin} className="linkedin-icon" />
          LinkedIn
        </button>
      </div>
    </div>
  );
}

export default CardInfo;
