import React from "react"
import PropTypes from "prop-types"
import * as classes from './boxList.module.scss'
import cx from 'classnames'

const BoxList = ({
    number,
    color,
    items = [],
    style,
    ...rest
}) => {
    return (
        <div
            className={cx("flexbox-start", classes.boxList)}
            style={{borderColor: color, ...style}}
            {...rest}
        >
            <div
                className={classes.middleBorder}
                style={{borderColor: color}}
            />
            <div
                className={cx("flexbox-center", classes.number)}
                style={{backgroundColor: color}}
            >
                {number}
            </div>

            {
                items.map(({icon, title, list}, index) => (
                    <div key={index}>
                        <span className={cx("flexbox-start" ,classes.title)}>
                            {icon}
                            <h5>{title}</h5>
                        </span>
                        <ul>
                            {list}
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default BoxList

BoxList.propTypes = {
    number: PropTypes.string,
    color: PropTypes.string,
    items: PropTypes.array,
    style: PropTypes.object
}