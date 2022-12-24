import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import {logger} from 'redux-logger';
import thunk from "redux-thunk";
import projectsOnDisplayReducer from "../actionReducers/projectsOnDisplayReducer";

import rootActionReducer from "../actionReducers/rootReducer";
import userActionReducer from "../actionReducers/userReducer";

const middleware = [thunk];
const enhancers = [...middleware];
export const store = configureStore({
  reducer: combineReducers({
    rootActionReducer,
    userActionReducer,
    projectsOnDisplayReducer,
  }),
  middleware: enhancers,
});
