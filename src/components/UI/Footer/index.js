import * as React from "react"
import * as classes from "./footer.module.scss"

const Footer = ( ) => (
    <footer className={classes.root}>
        © {new Date().getFullYear()} &middot; Built with {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
)

export default Footer
