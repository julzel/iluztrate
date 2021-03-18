import React from 'react';
import Svg from 'react-inlinesvg';

import './Header.scss';
import Logo from '../../assets/logo_white.svg';
import ColorLogo from '../../assets/logo_colores.svg';

const Header = ({ colorLogo }) => {
  return (
    <header className="header">
      <div className="header-logo">
        <Svg src={colorLogo ? ColorLogo : Logo} />
      </div>
      <div className="header-menu-icon">
        <i className="fa fa-bars" style={{color: colorLogo ? '#126168' : '#ffffff'}} />
      </div>
    </header>
  );
}
 
export default Header;