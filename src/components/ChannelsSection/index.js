import React, {useEffect, useState} from "react"
import * as classes from './channelsSection.module.scss'
import WhitepaperIcon from '../../assets/icn_whitepaper.svg'
import DiscordIcon from '../../assets/icn_discord.svg'
import TelegramIcon from '../../assets/icn_telegram.svg'
import EmailIcon from '../../assets/icn_mail.svg'
import {sections} from "../../helpers/constants"
import Background from '../../images/generics/bg-Contacts.png'
import cx from 'classnames'
import Button from "../UI/Button"
import DividerMobile from '../../images/generics/divMobile1.svg'

const ChannelsSection = () => {
    const [emailInput, setEmailInput] = useState("")
    const [formError, setFormError] = useState(null)

    useEffect(() => {
        if(!!emailInput) {
            const  emailRegex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/

            emailRegex.test(emailInput)
                ? setFormError(null)
                : setFormError("Enter a valid email!")
        }
        else {
            setFormError(null)
        }
    }, [emailInput])

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div
            id={sections.WHITEPAPERS_CHANNELS}
            className={cx("section-big-padding", classes.channelsSection)}
            style={{backgroundImage: `url(${Background})`}}
        >
            <div className="bg-gradient-top"/>
            <img
                src={DividerMobile}
                alt="Divider"
                className={cx("d-block d-md-none", classes.topDivider)}
            />

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
                        <div className={cx("flexbox-center", classes.centralButtons)}>
                            <div className="flexbox-center">
                                <DiscordIcon/>
                                <Button text={'discord'}/>
                            </div>
                            <div className="flexbox-center">
                                <TelegramIcon/>
                                <Button text={'telegram'} onClick={() => window.open("https://t.me/MechaversusAnn")}/>
                            </div>
                        </div>
                    </div>
                    <form
                        onSubmit={onSubmit}
                        className={cx("col-12 col-xl flexbox-start", classes.actionColumn)}
                    >
                        <h5>Subscribe to our newsletter</h5>
                        <EmailIcon/>
                        <div className={cx("flexbox-center", classes.submit)}>
                            <div className={classes.inputWrapper}>
                                <input
                                    name="email"
                                    type="text"
                                    placeholder="Email address"
                                    autoComplete="off"
                                    onChange={({target: input}) => setEmailInput(input.value)}
                                    className={classes.inputText}
                                    style={{color: !!formError ? "#FF113A" : "#FFF"}}
                                />
                                <small>{formError}</small>
                            </div>

                            <Button
                                type="submit"
                                text="Submit"
                                disabled={!!formError || !emailInput}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChannelsSection