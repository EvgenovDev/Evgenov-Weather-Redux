import {createStore} from "redux";
import weatherReducer from "./weather/weatherReducer";
import {combineReducers} from "redux";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    weather: weatherReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppStateType = ReturnType<typeof rootReducer>

export default store;