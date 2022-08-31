import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rout from "./components/Router";
import registerServiceWorker from './registerServiceWorker';
import createBrowserHistory from "history/createBrowserHistory";
import { Router, Switch, Route, IndexRoute } from "react-router-dom";

export const history = createBrowserHistory();
let store = createStore(appReducers, applyMiddleware(thunkMiddleware));

ReactDOM.render( 
    
    <Provider store={store}>
                <Rout/>
    </Provider>
      
, document.getElementById('root'));
registerServiceWorker();
