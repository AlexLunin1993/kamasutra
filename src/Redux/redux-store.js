import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogesReducer from "./dialoges-reducer";

export let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogesPage: dialogesReducer
    });

let store = createStore(reducers);

export default store;