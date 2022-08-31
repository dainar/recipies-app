//import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

// Agregando el soporte para firebase

import { appReducer } from './app-reducer';
import { adminReducer } from './reducers/admin';
import { loginReducer } from './reducers/login';

//import { mkplace } from './mkplace/reducer';

const appReducers = combineReducers({
	reducer,

});

export default appReducers;
