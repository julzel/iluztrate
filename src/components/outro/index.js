import React from 'react';

import './Outro.scss';

const Outro = ({ history, startOver }) => {
  return (
    <section className="outro">
      <h1>¡Gracias por participar!</h1>
      <h2><i class="far fa-laugh-beam"></i></h2>
      <div className="outro-actions">
        <button className="next" onClick={startOver}>¡Jugar otra vez!</button>
        <button className="next" onClick={() => history.push('/mis-juegos')}>Ver todos los juegos</button>
        <button className="next" onClick={() => history.push('/inicio')}>Volver al inicio</button>
      </div>
    </section>
  );
}
 
export default Outro;