import React, {Fragment} from 'react';
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";

import createBrowserHistory from "history/createBrowserHistory";

import App from "../App";
import Recipe from "./Recipe";
import Recipes from "./Recipes";

export const history = createBrowserHistory();
const Rout = () => (
  <Router  history={history}>
  <div >
  <header className="App-header">
          <h1 className="App-title">Busqueda</h1>
        </header>
    <div className="master-detail">
    <App />
      <Route exact path="/recipe/:id" component={Recipe} />
      </div>
      </div>
  </Router>
);

export default Rout;



