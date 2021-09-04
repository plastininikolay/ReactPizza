import { combineReducers } from "redux";
import pizzas from "./pizzas";
import cart from "./cart";
import filter from "./filter";

const rootReducer = combineReducers({pizzas, cart, filter})

export default rootReducer;