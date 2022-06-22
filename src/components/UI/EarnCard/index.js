import React from "react"
import * as classes from './earnCard.module.scss'
import Card from "../../../images/generics/Card.svg"
import PropTypes from "prop-types"

const EarnCard = ({
    icon,
    title,
    text,
    ...rest
}) => {
    return (
        <div
            className={classes.earnCard}
            {...rest}
        >
            <img src={Card} alt="Card"/>

            <div className="absolute-centered">
                {icon}
            </div>

            <div className={classes.textWrapper}>
                <div className={classes.text}>
                    <h5>{title}</h5>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default EarnCard

EarnCard.propTypes = {
    icon: PropTypes.element,
    title: PropTypes.string,
    text: PropTypes.string
}