import React from "react"
import * as classes from './channelsSection.module.scss'
import WhitepaperIcon from '../../assets/icn_whitepaper.svg'
import DiscordIcon from '../../assets/icn_discord.svg'
import TelegramIcon from '../../assets/icn_telegram.svg'
import EmailIcon from '../../assets/icn_mail.svg'
import {sections} from "../../helpers/constants"
import Background from '../../images/generics/bg-Contacts.png'
const ChannelsSection = () => {
    return (
        <div
            id={sections.WHITEPAPERS_CHANNELS}
            className={classes.channelsSection}
            style={{backgroundImage: `url(${Background})`}}
        >
            <div className="bgGradientTop"/>

            <div className="container">
                <div className="row">
                    <h3>Are you ready?</h3>
                </div>
                <div className="row">
                    <div className="col-2">
                        <h5>Whitepaper</h5>
                        <div>
                            <WhitepaperIcon/>
                        </div>
                    </div>
                    <div className="col-4">
                        <h5>Join our channels</h5>
                        <div>
                            <div>
                                <DiscordIcon/>
                            </div>
                            <div>
                                <TelegramIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <h5>Subscribe to our newsletter</h5>
                        <div>
                            <EmailIcon/>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChannelsSection