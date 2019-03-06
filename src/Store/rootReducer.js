import {combineReducers} from "redux";
import bikes from "./bikes";
import country from "./countries";
import city from './cities';
export default combineReducers({
    bikes,
    country,
    city
});