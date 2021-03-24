import React from 'react';
import Svg from 'react-inlinesvg';
import { withRouter } from 'react-router-dom';

import './Header.scss';
import Logo from '../../assets/logo_white.svg';
import ColorLogo from '../../assets/logo_colores.svg';

const Header = ({ colorLogo, history }) => {
  return (
    <header className={`header${colorLogo ? ' no-bg' : ''}`}>
      <div className="header-logo" onClick={() => history.push('/home')}>
        <Svg src={colorLogo ? ColorLogo : Logo} />
      </div>
      <div className="header-menu-icon">
        <i className="fa fa-bars" style={{color: colorLogo ? '#126168' : '#ffffff'}} />
      </div>
    </header>
  );
}
 
export default withRouter(Header);