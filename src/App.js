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

const App = () => {

  useEffect(() => {
    sessionStorage.setItem('authUser', JSON.stringify(DEFAULT_USER))
  }, [])

  return (
    <div className="app">
      <Router>
        <Layout>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
            <Redirect to="/login" />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}
 
export default App;