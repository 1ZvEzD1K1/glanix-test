import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import universitiesReducer from './universities/universities'

const rootReducer = combineReducers({
    universities: universitiesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;