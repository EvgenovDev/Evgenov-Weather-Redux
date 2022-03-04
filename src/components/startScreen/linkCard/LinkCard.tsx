import React from "react"
import style from "./LinkCard.module.css";
import classNames from "classnames"

type Props = {
    firstTitle: string
    secondTitle: string
}

const LinkCard: React.FC<Props> = ({firstTitle, secondTitle}) => {
    return (
        <>
            <div className={style.card}>
                <div className={classNames(style.face, style.face1)}>
                    <h2>{firstTitle}</h2>
                </div>
                <div className={classNames(style.face, style.face2)}>
                    <h2>{secondTitle}</h2>
                </div>
            </div>
        </>
    )
}

export default LinkCard