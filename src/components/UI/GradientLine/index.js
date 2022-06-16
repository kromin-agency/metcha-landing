import React from "react"
import * as classes from './gradientLine.module.scss'
import cx from 'classnames'
import PropTypes from "prop-types"

export default function GradientLine({className}) {
    return <div className={cx(classes.gradientLine, className)}/>
}

GradientLine.propTypes = {
    className: PropTypes.string
}