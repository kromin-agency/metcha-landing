import React from "react"
import * as classes from './channelsSection.module.scss'
import WhitepaperIcon from '../../assets/icn_whitepaper.svg'
import DiscordIcon from '../../assets/icn_discord.svg'
import TelegramIcon from '../../assets/icn_telegram.svg'
import EmailIcon from '../../assets/icn_mail.svg'
import {sections} from "../../helpers/constants"
import Background from '../../images/generics/bg-Contacts.png'
import cx from 'classnames'

const ChannelsSection = () => {
    return (
        <div
            id={sections.WHITEPAPERS_CHANNELS}
            className={cx("section-big-padding", classes.channelsSection)}
            style={{backgroundImage: `url(${Background})`}}
        >
            <div className="bg-gradient-top"/>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Are you ready?</h3>
                    </div>
                </div>
                <div className={cx("row", classes.boxes)}>
                    <div className={cx("col-12 col-md-4 col-xl-auto flexbox-start", classes.actionColumn)}>
                        <h5>Whitepaper</h5>
                        <WhitepaperIcon/>
                        <Button text={'download'}/>
                    </div>
                    <div className={cx("col-12 col-md-8 col-xl-auto flexbox-start", classes.actionColumn)}>
                        <h5>Join our channels</h5>
                        <div className="flexbox-center" style={{gap: '32px'}}>
                            <div className="flexbox-center" style={{flexDirection: 'column', gap: '56px'}}>
                                <DiscordIcon/>
                                <Button text={'discord'}/>
                            </div>
                            <div className="flexbox-center" style={{flexDirection: 'column', gap: '56px'}}>
                                <TelegramIcon/>
                                <Button text={'telegram'}/>
                            </div>
                        </div>
                    </div>
                    <div className={cx("col-12 col-xl flexbox-start", classes.actionColumn)}>
                        <h5>Subscribe to our newsletter</h5>
                        <EmailIcon/>
                        <div className={cx("flexbox-center", classes.submit)}>
                            <input type="text" placeholder="Email address" className={classes.inputText}/>
                            <Button text={'Submit'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChannelsSection

const Button = ({text}) => {
    return (
        <button className={cx("flexbox-center", classes.button)}>
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