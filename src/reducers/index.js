import { combineReducers } from "redux";


import auth from "./auth";
import profiles from "./profile";

export default combineReducers({ auth, profiles });