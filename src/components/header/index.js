import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo" />
      <div className="header-menu-icon">
        <i class="fa fa-bars" />
      </div>
    </header>
  );
}
 
export default Header;