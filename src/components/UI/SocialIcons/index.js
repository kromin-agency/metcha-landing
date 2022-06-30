import React from "react"
import TelegramIcon from "../../../assets/icn_telegram.svg"
import EmailIcon from "../../../assets/icn_mail.svg"
import FacebookIcon from "../../../assets/icn_facebook.svg"
import TwitterIcon from "../../../assets/icn_twitter.svg"
import * as classes from "./socialIcons.module.scss"
import cx from 'classnames'

const SocialIcons = () => {
    return (
        <div className={cx("flexbox-start", classes.socialIcons)}>
            <a
                href="https://t.me/MechaversusAnn"
                target="_blank"
                rel="noreferrer">
                <TelegramIcon/>
            </a>
            <a
                href="https://twitter.com/Mechaversusgame"
                target="_blank"
                rel="noreferrer"
            >
                <TwitterIcon/>
            </a>
            <a
                href="https://www.facebook.com/Mechaversus"
                target="_blank"
                rel="noreferrer"
            >
                <FacebookIcon/>
            </a>
            <a href="mailto:info@mechaversus.co">
                <EmailIcon/>
            </a>
        </div>
    )
}

export default SocialIcons