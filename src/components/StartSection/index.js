import React from "react"
import cx from 'classnames'
import * as classes from "./startSection.module.scss"
import Logo from "../../images/logo-variants/LogoIcon_Mechaversus.svg"
import Background from '../../images/backgrounds/start.mp4'
const StartSection = () => {
    return (
        <section
            id="start"
            className={classes.startSection}
        >
            <video
                loop
                muted
                autoPlay
                playsInline
                src={Background}
                className={classes.background}
            />
            <div className="container">
                <div className="row">
                    <div className={cx("col-12 flexbox-center", classes.content)}>
                        <img src={Logo} alt={'Mechaversus logo'}/>
                        <h1>Mechaversus</h1>
                        <h2>Deploy | Battle | Earn</h2>
                    </div>
                </div>
            </div>

            <div className={classes.bgGradient}/>
        </section>
    )
}

export default StartSection