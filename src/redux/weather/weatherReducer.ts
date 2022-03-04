import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../store";
import {Dispatch} from "redux";
import {getWeatherDataApi} from "../../api/weatherApi";

export type Actions = setCityActionCreatorType |
    changeWeatherDataActionCreatorType |
    changeIsErrorActionCreatorType |
    isFetchingActionCreatorType

type WeatherDayType = {
    maxTemp: number | null
    minTemp: number | null
    condition: string
}

const SET_CITY = "SET_CITY"
const CHANGE_WEATHER_DATA = "CHANGE_WEATHER_DATA"
const CHANGE_IS_ERROR = "CHANGE_IS_ERROR"
const IS_FETCHING = "IS_FETCHING"

export const isFetchingActionCreator = (isFetching: boolean): isFetchingActionCreatorType => {
    return {
        type: IS_FETCHING,
        isFetching: isFetching
    }
}
type isFetchingActionCreatorType = {
    type: typeof IS_FETCHING,
    isFetching: boolean
}

export const changeIsErrorActionCreator = (isError: boolean): changeIsErrorActionCreatorType => {
    return {
        type: CHANGE_IS_ERROR,
        isError: isError
    }
}
type changeIsErrorActionCreatorType = {
    type: typeof CHANGE_IS_ERROR,
    isError: boolean
}

export const setCityActionCreator= (city: string): setCityActionCreatorType  => {
    return {
        type: SET_CITY,
        city: city
    }
}
type setCityActionCreatorType = {
    type: typeof SET_CITY,
    city: string
}

const changeWeatherDataActionCreator = (icon: string, day: string, weatherDay: WeatherDayType): changeWeatherDataActionCreatorType => {
    return {
        type: CHANGE_WEATHER_DATA,
        icon: icon,
        day: day,
        weatherDay: weatherDay
    }
}
type changeWeatherDataActionCreatorType = {
    type: typeof CHANGE_WEATHER_DATA,
    icon: string,
    day: string,
    weatherDay: WeatherDayType
}

export type InitialStateType = {
    city: string
    weatherDay: WeatherDayType
    icon: string
    day: string
    weekDays: Array<string>
    isError: boolean
    isFetching: boolean
}
const initialState: InitialStateType = {
    city: "",
    weatherDay: {
        maxTemp: 0,
        minTemp: 0,
        condition: ""
    },
    icon: "",
    day: "",
    weekDays: ["Воскресение", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    isError: false,
    isFetching: false
}

export type ThunkType = ThunkAction<Promise<void>, AppStateType, any, Actions>
type DispatchType = Dispatch<Actions>

export const weatherThunkCreator = (city: string): ThunkType => {
    return async (dispatch: DispatchType) => {
        dispatch(isFetchingActionCreator(true))
        let response = await getWeatherDataApi(city)
        if (response !== "Error") {
            dispatch(changeIsErrorActionCreator(false))
            dispatch(changeWeatherDataActionCreator(response.current.condition.icon, response.forecast.forecastday[0].date, {
                maxTemp: response.forecast.forecastday[0].day.maxtemp_c,
                minTemp: response.forecast.forecastday[0].day.mintemp_c,
                condition: response.current.condition.text,
            }))
            dispatch(isFetchingActionCreator(false))
        } else {
            dispatch(changeIsErrorActionCreator(true))
            dispatch(isFetchingActionCreator(false))
            alert("Произошла какая-то ошибка, возможно вы ввели не существующий город")
        }
    }
}

const weatherReducer = (state = initialState, action: Actions): InitialStateType => {
    switch (action.type) {
        case SET_CITY:
            return {...state, city: action.city}
        case CHANGE_WEATHER_DATA:
            return {...state, weatherDay: action.weatherDay, icon: action.icon, day: action.day}
        case CHANGE_IS_ERROR:
            return {...state, isError: action.isError}
        case IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export default weatherReducer;