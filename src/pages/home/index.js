import React from 'react';

import './Home.scss'
import Gallery from '../../components/gallery';
import Header from '../../components/header';
import HomeMenu from '../../components/homeMenu';

const Home = () => {
  return (
    <div className="home">
      <Header colorLogo={true} />
      <Gallery />
      <div className="container">
        <HomeMenu />
      </div>
    </div>
  );
}
 
export default Home;