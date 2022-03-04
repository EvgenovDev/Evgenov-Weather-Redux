import React from "react";
import LinkCard from "./linkCard/LinkCard";
import style from "./StartScreen.module.css";
import {Link} from "react-router-dom";

const StartScreen: React.FC = () => {
    return (
        <>
            <h1>Евгенов - Weather</h1>
            <div className={style.container}>
                <Link to="/time" >
                    <LinkCard
                        firstTitle={"Посмотреть текущее время"}
                        secondTitle={"Время"}/>
                </Link>
                <Link to="/weather" >
                    <LinkCard
                        firstTitle={"Посмотреть текущую погоду"}
                        secondTitle={"Погода"}/>
                </Link>
            </div>
        </>
    )
}

export default StartScreen;