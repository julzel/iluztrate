import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Login from './pages/login';
import { DEFAULT_USER } from './config';
import Home from './pages/home';
import Layout from './components/layout';
import './styles/global.scss';
import NewGame from './pages/newGame';
import MyGames from './pages/myGames';
import GamePlay from './pages/gamePlay';

const App = () => {

  useEffect(() => {
    localStorage.setItem('authUser', JSON.stringify(DEFAULT_USER));
  }, [])

  return (
    <div className="app">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/inicio" component={Home} />
            <Route exact path="/nuevo-juego" component={NewGame} />
            <Route path="/mis-juegos" component={MyGames} />
            <Route path="/jugar" component={GamePlay} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}
 
export default App;