import React from "react";
import style from "./Search.module.css";
import {useState} from "react";
import {Actions} from "../../../redux/weather/weatherReducer";

type Props = {
    city: string
    setCityActionCreator: (city: string) => Actions
    weatherThunkCreator: (city: string) => void
    changeIsErrorActionCreator: (isError: boolean) => Actions
}

let Search: React.FC<Props> = ({
                                   city,
                                   setCityActionCreator,
                                   weatherThunkCreator,
                                   changeIsErrorActionCreator}) => {
   const [cityLocal, setCityLocal] = useState("");
    return (
        <div className={style.searchBox}>
            <div className={style.shadow}></div>
            <input
                type="text"
                placeholder="Enter a city..."
                value={cityLocal}
                onChange={(e) => {setCityLocal(e.target.value)}}/>
            <img
                className={style.search}
                src="/search.png"
                alt="search"
                onClick={(e) => {
                    setCityActionCreator(cityLocal)
                    setCityLocal("")
                    cityLocal !== "" ? weatherThunkCreator(cityLocal) : changeIsErrorActionCreator(false)
                }}/>
        </div>
    )
}

export default Search