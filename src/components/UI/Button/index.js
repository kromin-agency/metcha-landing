import React from "react"
import * as classes from './button.module.scss'
import cx from 'classnames'
import PropTypes from "prop-types"

const Button = ({
    text,
    onClick,
}) => {
    return (
        <button
            className={cx("flexbox-center", classes.button)}
            onClick={onClick}
        >
            {text}

            <div className={classes.squares}>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </button>
    )
}
export default Button

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}