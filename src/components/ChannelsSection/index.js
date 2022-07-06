import React, {useEffect, useRef, useState} from "react"
import * as classes from './channelsSection.module.scss'
import WhitepaperIcon from '../../assets/icn_whitepaper.svg'
import FacebookIcon from '../../assets/icn_facebook.svg'
import TwitterIcon from '../../assets/icn_twitter.svg'
import TelegramIcon from '../../assets/icn_telegram.svg'
import {sections} from "../../helpers/constants"
import Background from '../../images/generics/bg-Contacts.png'
import cx from 'classnames'
import Button from "../UI/Button"
import DividerMobile from '../../images/generics/divMobile1.svg'

const ChannelsSection = ({scrollFromTop, setCurrentSectionCb}) => {
    const sectionRef = useRef()

    useEffect(() => {
        const sectionOffset = sectionRef.current?.offsetTop
        const sectionHeight = sectionRef.current?.scrollHeight

        if(
            sectionOffset <= scrollFromTop
            && sectionOffset + sectionHeight >= scrollFromTop
        ) {
            setCurrentSectionCb(sections.WHITEPAPERS_CHANNELS)
        }
    }, [sectionRef, scrollFromTop])

/*    const [emailInput, setEmailInput] = useState("")
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
    }*/

    return (
        <div
            id={sections.WHITEPAPERS_CHANNELS}
            className={cx("section-big-padding", classes.channelsSection)}
            style={{backgroundImage: `url(${Background})`}}
            ref={sectionRef}
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
                <div className={cx("row", classes.channels)}>
                    <div className={cx("col-auto", classes.channelBox)}>
                        <h5>Whitepaper</h5>
                        <div className={cx("flexbox-start", classes.socialsRow)}>
                            <div>
                                <WhitepaperIcon/>
                                <div  className={cx("flexbox-start", classes.buttons)}>
                                    <Button
                                        text={'download'}
                                        //todo: put the whitepaper link below (window.open("https://linktest@test.test"))
                                        onClick={() => window.open("")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("col", classes.channelBox)}>
                        <h5>Join our channels</h5>
                        <div className={cx("flexbox-center", classes.socialsRow)}>
                            <div>
                                <TwitterIcon/>
                                <Button
                                    text={'twitter'}
                                    onClick={() => window.open("https://twitter.com/Mechaversusgame")}
                                />
                            </div>
                            <div>
                                <FacebookIcon/>
                                <Button
                                    text={'facebook'}
                                    onClick={() => window.open("https://www.facebook.com/Mechaversus")}
                                />
                            </div>
                            <div>
                                <TelegramIcon/>
                                <div className={cx("flexbox-start", classes.buttons)}>
                                    <Button
                                        text={'telegram chat'}
                                        onClick={() => window.open("https://t.me/Mechaversus")}
                                    />
                                    <Button
                                        text={'telegram channel'}
                                        onClick={() => window.open("https://t.me/MechaversusAnn")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    {/*<form
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
                    </form>*/}

            </div>
        </div>
    )
}

export default ChannelsSection