import {applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunkMiddleware from 'redux-thunk';
import searchReducer from "./searchReducer";

let reducers = combineReducers({
    searchPage: searchReducer,

})

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
export default store;