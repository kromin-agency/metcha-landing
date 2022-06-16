import React, {useCallback, useState} from "react"
import PropTypes from "prop-types"
import MenuIcon from "./MenuIcon"
import cx from 'classnames'
import * as classes from "../MobileMenu/mobileMenu.module.scss"
import Logo from '../../../images/logo-variants/LogoIcon_mechaversus.svg'

const MobileMenu = ({sections}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen])

    return (
        <>
            <MenuIcon isOpen={isMenuOpen} onClick={toggleMenu}/>

            <div
                className={cx(
                    classes.mobileMenu,
                    isMenuOpen ? classes.menuOpen : classes.menuClosed
                )}
            >
                <div className={classes.head}>
                    <img src={Logo} alt={'Mechaversus Logo'}/>
                </div>
                <nav>
                    {
                        sections.map((section, index) => (
                            <a
                                href={section.id}
                                className={classes.link}
                                key={index}
                            >
                                {section.label}
                            </a>
                        ))
                    }
                </nav>
            </div>
        </>
    )
}

export default MobileMenu

MobileMenu.propTypes = {
    sections: PropTypes.array.isRequired
}