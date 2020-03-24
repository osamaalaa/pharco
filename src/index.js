import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// import "./material-kit-react.scss?v=1.8.0";
import employeePage from "./employeePage";
var hist = createBrowserHistory();
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router history={hist}>
    <Switch>
      <Route path="/employee-page" component={employeePage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

