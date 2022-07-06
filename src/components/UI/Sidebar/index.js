import React, {useEffect} from "react"
import cx from 'classnames'
import * as classes from "./sidebar.module.scss"
import PropTypes from "prop-types"
import MenuItemIcon from '../../../assets/icn_hexagon.svg'

const Sidebar = ({sections, currentSection}) => {
    return (
        <div className={classes.sidebar}>
            <div className={cx(classes.line, classes.lineTop)}/>
            <nav>
                {
                    sections.map((section, index) => (
                        <a
                            href={`#${section.id}`}
                            className={cx(
                                "flexbox-start",
                                currentSection === section.id
                                    ? classes.activeLink
                                    : classes.link,
                            )}
                            key={index}
                        >
                            <MenuItemIcon/>
                            <span>
                                {section.label}
                            </span>
                        </a>
                    ))
                }
            </nav>
            <div className={cx(classes.line, classes.lineBottom)}/>
        </div>
    )
}

export default Sidebar

Sidebar.propTypes = {
    sections: PropTypes.array.isRequired
}