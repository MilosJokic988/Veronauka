import React, { useState } from 'react';
import './AndjeoProtivDemona.css';

const AndjeoProtivDemona = () => {
  const [angelHP, setAngelHP] = useState(100);
  const [demonHP, setDemonHP] = useState(100);
  const [rezultat, setRezultat] = useState('');
  const [borbaUToku, setBorbaUToku] = useState(false);

  const pokreniBorbu = () => {
    if (borbaUToku || rezultat) return;
    setBorbaUToku(true);

    const interval = setInterval(() => {
      const angelNapad = Math.floor(Math.random() * 15) + 5;
      setDemonHP(prev => {
        const noviHP = Math.max(prev - angelNapad, 0);
        if (noviHP === 0) {
          clearInterval(interval);
          setRezultat('🕊️ Анђео je победио демона! Добро увек побеђује!');
          setBorbaUToku(false);
        }
        return noviHP;
      });
    }, 700);
  };

  const resetuj = () => {
    setAngelHP(100);
    setDemonHP(100);
    setRezultat('');
    setBorbaUToku(false);
  };

  return (
    <div className="igrica-container">
      <h2>⚔️ Анђео против Демона</h2>

      <div className="health-bars">
        <div className="health">
          🕊️ Анђео: <progress value={angelHP} max="100" /> {angelHP}%
        </div>
        <div className="health">
          😈 Демон: <progress value={demonHP} max="100" /> {demonHP}%
        </div>
      </div>

      <div className={`slike ${borbaUToku ? 'tresenje' : ''}`}>
        <img
          src="/angel.png"
          alt="Анђео"
          className={`lik ${rezultat ? 'pobeda' : ''}`}
        />
        <img src="/demon.jpg" alt="Демон" className="lik" />
      </div>

      {!rezultat && (
        <button
          className="borba-dugme"
          onClick={pokreniBorbu}
          disabled={borbaUToku}
        >
          {borbaUToku ? 'Борба у току...' : 'Започни борбу'}
        </button>
      )}

      {rezultat && (
        <>
          <p className="rezultat">{rezultat}</p>
          <button className="restart-dugme" onClick={resetuj}>
            🔁 Покрени поново
          </button>
        </>
      )}
    </div>
  );
};

export default AndjeoProtivDemona;
