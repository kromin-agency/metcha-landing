import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as classes from "./header.module.scss"
import Image from "../Image";

const Header = ({ siteTitle }) => (
    <header className={classes.root}>
        {/*<Link to="/"> {siteTitle}</Link>
        <Image filename={"Logotype_Mechaversus_pos.png"} alt={"logo"} style={{width:60}}/>*/}
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
