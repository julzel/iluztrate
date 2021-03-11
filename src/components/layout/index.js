import React, { useEffect } from 'react';

import './Layout.scss';

const Layout = ({ children }) => {

  const setLayoutHeight = () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    setLayoutHeight();
    window.addEventListener('resize', setLayoutHeight)
    return () => window.removeEventListener('resize', setLayoutHeight)
  }, []);

  return (
    <div className="layout">
      {children}
    </div>
  );
}
 
export default Layout;