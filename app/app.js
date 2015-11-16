import React from 'react';
import ReactDOM from "react-dom";
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router } from "react-router";
import routes from "./routes.js";

let history = createBrowserHistory();

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));
        
     


