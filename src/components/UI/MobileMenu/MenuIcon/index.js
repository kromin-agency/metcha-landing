import React from "react"
import * as classes from "./menuIcon.module.scss"
import PropTypes from "prop-types"

const Path = ({isOpen, ...rest}) => (
    <path
        style={{transition: 'ease-in-out 300ms'}}
        fill="transparent"
        strokeWidth="3"
        stroke="#FFF"
        strokeLinecap="square"
        {...rest}
    />
)

export const MenuIcon = ({onClick, isOpen}) => (
    <button className={classes.menuIcon} onClick={onClick}>
        <svg width="24" height="24" viewBox="0 0 23 23">
            <Path isOpen={isOpen} d={isOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5'}/>
            <Path isOpen={isOpen} d="M 2 9.423 L 20 9.423" opacity={isOpen ? 0 : 1}/>
            <Path isOpen={isOpen} d={isOpen ? "M 3 2.5 L 17 16.346" : 'M 2 16.346 L 20 16.346' }/>
        </svg>
    </button>
)

export default MenuIcon

MenuIcon.propTypes = {
    onClick: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
}
