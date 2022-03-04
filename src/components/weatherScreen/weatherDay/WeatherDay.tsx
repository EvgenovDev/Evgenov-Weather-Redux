import React from "react";
import styles from "./WeatherDay.module.css";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
import upperFirstChar from "../../../functions/upperFirstChar";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    city: string,
    day: string,
    icon: string,
    maxTemp: number | null,
    minTemp: number | null,
    condition: string
    isError: boolean
}

type mapDispatchToProps = {
    upperFirstChar: (str: string) => string
}

type Props = mapStateToPropsType & mapDispatchToProps

const WeatherDay: React.FC<Props> = ({
                                         city,
                                         day,
                                         icon,
                                         maxTemp,
                                         minTemp,
                                         condition,
                                         isError
                                     }) => {
    return (
        city && !isError ?
            <>
                <h2 className={styles.cityTitle}>{upperFirstChar(city)}</h2>
                <div className={styles.wrap}>
                    <div className={styles.wrapDay}>
                        <h3 className={styles.weekDay}>{day}</h3>
                        <img src={icon} alt="icon" className={styles.icon}/>
                    </div>
                    <div className={styles.tempWrap}>
                        <span className={styles.maxTemp}>{maxTemp}&deg;</span>
                        <span className={styles.minTemp}>{minTemp}&deg;</span>
                    </div>
                    <p className={styles.condition}>{condition}</p>
                </div>
            </>: <></>
    );
};

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        city: state.weather.city,
        day: state.weather.weekDays[new Date(state.weather.day).getDay()],
        icon: state.weather.icon,
        maxTemp: state.weather.weatherDay.maxTemp,
        minTemp: state.weather.weatherDay.minTemp,
        condition: state.weather.weatherDay.condition,
        isError: state.weather.isError
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        upperFirstChar
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDay);
