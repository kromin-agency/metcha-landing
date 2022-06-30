import React from "react"
import * as classes from './button.module.scss'
import cx from 'classnames'
import PropTypes from "prop-types"

const Button = ({
    type= "submit",
    text,
    onClick,
    disabled,
    ...rest
}) => {
    return (
        <button
            type={type}
            className={cx("flexbox-center", classes.button)}
            onClick={onClick}
            disabled={disabled}
            {...rest}
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
    type: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}