import React from "react";
import style from "./WeatherScreen.module.css"
import WeatherDay from "./weatherDay/WeatherDay";
import {SearchContainer} from "./Search/SearchContainer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import Preloader from "../preloader/Preloader";

type mapStateToPropsType = {
    isFetching: boolean
}
type Props = mapStateToPropsType

const WeatherScreen: React.FC<Props> = ({isFetching}) => {
    return (
            !isFetching ?
                <div className={style.weatherWrap}>
                    <SearchContainer />
                    <WeatherDay />
                </div> :
                <Preloader/>
    )
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isFetching: state.weather.isFetching
    }
}

const WeatherScreenContainer = connect(mapStateToProps)(WeatherScreen)

export default WeatherScreenContainer;