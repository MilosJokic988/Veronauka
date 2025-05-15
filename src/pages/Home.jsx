import React from 'react';
import { Button } from 'react-bootstrap';
import '../App.css'

function Home() {
  return (
    <div className="home-page-container">
      <div className="welcome-box">
        <h1 className="welcome-text">Добродошли на сајт Православне Веронауке</h1>
        <p className="description-text">Истражите свете приче и догађаје из Светог Писма</p>
        <Button variant="primary" href="/postanje" className="explore-btn">
          Истражите приче
        </Button>
      </div>
    </div>
  );
}

export default Home;
