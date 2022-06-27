import React from "react"
import cx from 'classnames'
import * as classes from "./startSection.module.scss"
import Logo from "../../images/logo-variants/LogoIcon_Mechaversus.svg"
import {sections} from "../../helpers/constants"
import Background from '../../images/backgrounds/start.mp4'
import Thumbnail from '../../images/backgrounds/start_thumb.png'
import Divider from '../../images/generics/div3.svg'
import DividerMobile from '../../images/generics/divMobile1.svg'

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
                                style="background: url(${Thumbnail}) center / cover no-repeat"
                             />`
                }}
            />
            <div className={cx("bg-green-line", classes.greenLine)}/>
            <div className="bg-gradient-bottom"/>
            <img
                src={Divider}
                alt="Divider"
                className={cx("d-none d-md-block", classes.bottomDivider)}
            />
            <img
                src={DividerMobile}
                alt="Divider"
                className={cx("d-block d-md-none", classes.bottomDivider)}
            />
        </section>
    )
}

export default StartSection