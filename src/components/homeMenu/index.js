import React from 'react';
import { Link } from 'react-router-dom';

import './HomeMenu.scss';

const HomeMenu = () => {
  return (
    <div className="home-menu">
      <h3>Acceso Rápido</h3>
      <ul>
        <li><Link to="/nuevo-juego"> Nuevo Juego</Link></li>
        <li><Link to="/mis-juegos">Mis juegos</Link></li>
      </ul>
    </div>
  );
}
 
export default HomeMenu;