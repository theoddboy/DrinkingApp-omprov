import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage"
import Explore from "./Pages/Explore"
import DrinkInfo from "./Pages/DrinkInfo"
import Error from "./Pages/Error"


const routes =
  (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/home" component={HomePage} />
          <Route path="/explore" component={Explore} />
          <Route path="/drinkinfo" component={DrinkInfo} />
          <Route path="" component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );

ReactDOM.render(routes, document.getElementById("root"));

serviceWorker.unregister();
