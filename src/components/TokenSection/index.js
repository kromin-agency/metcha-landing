import React, {useRef} from "react"
import * as classes from './tokenSection.module.scss'
import GradientLine from "../UI/GradientLine"
import {sections} from "../../helpers/constants"
import Background from "../../images/backgrounds/token.mp4"

const TokenSection = () => {
    const playPauseVideo = () => {
        const video = document.getElementById('videoRef')
        const isPaused = video?.paused

        isPaused
            ? video.play()
            : video.pause()
    }

    return (
        <section
            id={sections.TOKEN}
            className={classes.tokenSection}
            onClick={playPauseVideo}
        >
            <div className={classes.bgGradient}/>
            <GradientLine className={classes.greenLine}/>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Expand your horizons</h3>
                        <h4>Collecting our token</h4>
                    </div>
                </div>
            </div>

            <div
                className={classes.background}
                dangerouslySetInnerHTML={{
                    __html: `<video
                                id="videoRef"
                                muted
                                playsInline
                                src=${Background}
                             />`
                }}
            />
        </section>
    )
}

export default TokenSection