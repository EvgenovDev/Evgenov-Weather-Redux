import React, {useEffect, useState} from "react";
import style from "./TimeScreen.module.css"
import Preloader from "../preloader/Preloader";

type Props = {
    currentTime: (date: Date) => string
}

const TimeScreen: React.FC<Props> = ({currentTime}) => {

    const [time, setTime] = useState<Date>(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => clearTimeout(timer)
    })
    return (
        <>
            <Preloader/>
            <div className={style.title}>
                <h2>Текущее время:</h2>
                <p>{currentTime(time)}</p>
            </div>
        </>
    )
}

export default TimeScreen;