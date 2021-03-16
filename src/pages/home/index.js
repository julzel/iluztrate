import React from 'react';

import './Home.scss'
import Gallery from '../../components/gallery';
import Header from '../../components/header';
import HomeMenu from '../../components/homeMenu';
import Separator from '../../components/separator';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Gallery />
      <Separator />
      <HomeMenu />
    </div>
  );
}
 
export default Home;