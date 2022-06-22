import React from "react"
import PropTypes from "prop-types"

const Video = ({idVideo, iframeClassName, iframeStyle, ...rest}) => {
    return (
        <div {...rest}>
            <iframe
                src={`https://www.youtube.com/embed/${idVideo}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=${idVideo}`}
                allow="autoplay"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                title={"Video"}
                className={iframeClassName}
                style={iframeStyle}
            />
        </div>
    )
}

export default Video

Video.propTypes = {
    idVideo: PropTypes.string,
    iframeClassName: PropTypes.string,
    iframeStyle: PropTypes.object
}