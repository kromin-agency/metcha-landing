import React from "react"
import cx from 'classnames'
import * as classes from "./startSection.module.scss"
import Logo from "../../images/logo-variants/LogoIcon_Mechaversus.svg"
import Background from '../../images/backgrounds/start.mp4'
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
            {/*<div className={classes.background}>
                <iframe style={{height: '100%', width: '100%'}} src="https://youtube.com/embed/M7qbun2D0M8?autoplay=1&controls=0&showinfo=0&autohide=1"/>
            </div>*/}
            <div className={cx("bg-green-line", classes.greenLine)}/>
            <div className="bg-gradient-bottom"/>
        </section>
    )
}

export default StartSection