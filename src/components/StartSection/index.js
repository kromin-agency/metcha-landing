import React from "react"
import cx from 'classnames'
import * as classes from "./startSection.module.scss"
import Logo from "../../images/logo-variants/LogoIcon_Mechaversus.svg"
import Background from '../../images/backgrounds/start.mp4'
import GradientLine from "../UI/GradientLine"
import {sections} from "../../helpers/constants"

const StartSection = () => {
    return (
        <section
            id={sections.START}
            className={classes.startSection}
        >
            <div className="container">
                <div className="row">
                    <div className={cx("col-12 flexbox-center", classes.content)}>
                        <img src={Logo} alt={'Mechaversus logo'}/>
                        <h1>Mechaversus</h1>
                        <h2>Deploy | Battle | Earn</h2>
                    </div>
                </div>
            </div>

            <div
                className={classes.background}
                dangerouslySetInnerHTML={{
                    __html: `<video
                                loop
                                muted
                                autoplay
                                playsInline
                                src=${Background}
                             />`
                }}
            />
            <GradientLine className={classes.greenLine}/>
            <div className="bg-gradient-bottom"/>
        </section>
    )
}

export default StartSection