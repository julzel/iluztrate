import React, { useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import Header from "../../components/header";
import Game from "./game";

import "./MyGames.scss";

const MyGames = ({ history }) => {
  const [selectedGame, setSelectedGame] = useState(null);
  const games = JSON.parse(localStorage.getItem("games"));
  const { path, url } = useRouteMatch();
  
  return (
    <div className="my-games">
      <Header />
      <Switch>
        <Route exact path={path}>
          {games && <ul className="my-games-list">
            {games.map((game, k) => (
              <Link
                key={`link-${k}`}
                to={`${url}/${game.name.toLowerCase()}`}
                onClick={() => setSelectedGame(game)}
              >
                {game.name}
              </Link>
            ))}
          </ul>}
          {!games && (
            <p>Librería de juegos vacía</p>
          )}
        </Route>
        <Route path={`${path}/:gameId`}>
          <Game history={history} game={selectedGame} />
        </Route>
      </Switch>
    </div>
  );
};

export default MyGames;
