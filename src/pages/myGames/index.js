import React, { useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import Header from "../../components/header";
import Game from "./game";

import "./MyGames.scss";

const MyGames = ({ history }) => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [games, setGames] = useState(JSON.parse(localStorage.getItem("games")));
  const { path, url } = useRouteMatch();

  const deleteGame = (e, game) => {
    e.stopPropagation();
    const newGameList = games.filter(g => g.id !== game.id);
    setGames(newGameList);
    localStorage.setItem("games", JSON.stringify(newGameList));
  }
  
  return (
    <div className="my-games">
      <Header />
      <Switch>
        <Route exact path={path}>
          {(games && games.length > 0) && <ul className="my-games-list">
            {games && games.map((game, k) => (
              <li key={`link-${k}`}>
                <Link
                  to={`${url}/${game.name.toLowerCase()}`}
                  onClick={() => setSelectedGame(game)}
                >
                  {game.name}
                </Link>
                <i className="far fa-trash-alt" onClick={e => deleteGame(e, game)}></i>
              </li>
            ))}
          </ul>}
          {(!games || games.length === 0) && (
            <p className="empty-list">
              <i className="fas fa-book" />
              Librería de juegos vacía
            </p>
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
