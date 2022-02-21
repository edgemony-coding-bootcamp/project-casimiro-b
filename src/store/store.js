import { createStore, applyMiddleware, compose } from 'redux';
import { myReducer } from './reducer';

import thunk from 'redux-thunk';



export const store = createStore(myReducer,  compose(applyMiddleware(thunk)));





