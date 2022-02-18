import { createStore, applyMiddleware, compose } from 'redux';
import { myReducer } from './reducer';
import thunk from 'redux-thunk';

const INIT_STATE = {
    user: {},
    events: [],
    experience: [],
    card: [],
    cities: {},
    error: null,
    loading: false,
}

export const store = createStore(myReducer, INIT_STATE, compose(applyMiddleware(thunk)));





