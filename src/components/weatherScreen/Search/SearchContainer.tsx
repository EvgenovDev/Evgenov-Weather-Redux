import React from "react";
import {connect} from "react-redux";
import Search from "./Search";
import {AppStateType} from "../../../redux/store";
import {setCityActionCreator, weatherThunkCreator,changeIsErrorActionCreator} from "../../../redux/weather/weatherReducer";

const mapStateToProps = (state: AppStateType) => {
    return {
        city: state.weather.city
    }
}

export const SearchContainer = connect(mapStateToProps,
    {
        setCityActionCreator,
        weatherThunkCreator,
        changeIsErrorActionCreator
    })(Search)