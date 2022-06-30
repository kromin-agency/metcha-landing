import React from "react"
import TelegramIcon from "../../../assets/icn_telegram.svg"
import EmailIcon from "../../../assets/icn_mail.svg"
import DiscordIcon from "../../../assets/icn_discord.svg"
import * as classes from "./socialIcons.module.scss"
import cx from 'classnames'

const SocialIcons = () => {
    return (
        <div className={cx("flexbox-start", classes.socialIcons)}>
            <a href="https://t.me/Mechaversus" target="_blank" rel="noreferrer">
                <TelegramIcon/>
            </a>
            <a href="mailto:info@mechaversus.co">
                <EmailIcon/>
            </a>
            <a href="https://www.kromin.it" target="_blank" rel="noreferrer">
                <DiscordIcon/>
            </a>
        </div>
    )
}

export default SocialIcons