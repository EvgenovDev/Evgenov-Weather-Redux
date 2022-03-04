import React from "react";
import style from "./Preloader.module.css"

const Preloader = () => {
    return (
        <div className={style.loader}>
            <span className={style.icon1}></span>
            <span className={style.icon2}></span>
            <span className={style.icon3}></span>
            <span className={style.icon4}></span>
            <span className={style.icon5}></span>
            <span className={style.icon6}></span>
            <span className={style.icon7}></span>
            <span className={style.icon8}></span>
            <span className={style.icon9}></span>
            <span className={style.icon10}></span>
        </div>
    )
}

export default Preloader;