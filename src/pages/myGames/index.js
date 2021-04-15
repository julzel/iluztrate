import React, { useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import Header from "../../components/header";
import Game from "./game";

import "./MyGames.scss";

const MyGames = ({ history }) => {
  const [searchValue, setSearchValue] = useState('');
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
        {(games && games.length > 0) && (
          <div className="my-games-search">
            <input placeholder="buscar por nombre" type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
            <i className="fas fa-search"></i>
          </div>
        )}
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
              <span>No has creado ningún juego todavía</span>
              <button className="next" onClick={() => history.push('/nuevo-juego')}>Crear juego</button>
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
