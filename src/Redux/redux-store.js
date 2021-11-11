import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogesReducer from "./dialoges-reducer";
import usersReducer from './users-reducer';
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

export let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogesPage: dialogesReducer,
        usersPage: usersReducer,
        auth: authReducer
    });

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;