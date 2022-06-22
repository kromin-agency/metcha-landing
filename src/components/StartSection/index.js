import React from "react"
import cx from 'classnames'
import * as classes from "./startSection.module.scss"
import Logo from "../../images/logo-variants/LogoIcon_Mechaversus.svg"
import {sections} from "../../helpers/constants"
import Video from "../UI/Video"
import {useWindowSize} from "../../helpers/useWindowSize"

const StartSection = () => {
    const {width: pageWidth, height: pageHeight} = useWindowSize()

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

            <Video
                idVideo={'M7qbun2D0M8'}
                className={classes.videoContainer}
                iframeClassName={cx("absolute-centered", pageHeight > pageWidth ? classes.iframeH : classes.iframeV)}
            />
            <div className={cx("bg-green-line", classes.greenLine)}/>
            <div className="bg-gradient-bottom"/>
        </section>
    )
}

export default StartSection