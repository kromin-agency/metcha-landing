import React from "react"
import * as classes from './pilotsSection.module.scss'
import cx from 'classnames'
import HelmetVideo from '../../images/generics/220610 - Helmet Animation light.mp4'
import HumanIcon from '../../assets/icn_human.svg'
import AlienIcon from '../../assets/icn_alien.svg'
import PirateIcon from '../../assets/icn_pirate.svg'
import {sections} from "../../helpers/constants"


const PilotsSection = () => {
    return (
        <section
            id={sections.PILOTS}
            className={classes.pilotsSection}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Farm the best pilots in the galaxy</h3>
                        <h4>Creating and forging unique items</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <video
                            muted
                            autoPlay
                            playsInline
                            src={HelmetVideo}
                            className={classes.helmetVideo}
                            onClick={({target: video}) => video.play()}
                        />
                    </div>
                    <div className="col-12 col-lg-5 offset-lg-1">
                        <div className={cx("flexbox-end", classes.icons)}>
                            <div className="flexbox-center">
                                <HumanIcon/>
                            </div>
                            <div className="flexbox-center">
                                <AlienIcon/>
                            </div>
                            <div className="flexbox-center">
                                <PirateIcon/>
                            </div>
                        </div>
                        <p>
                            In Mechaversus, <span><strong>NFTs</strong></span> can be <span><strong>collected</strong></span> in the form
                            of <span><strong>mech pilots in Helmets.</strong></span>
                            <br/>
                            The reforging system allows players to pursue rarity mixing two different helmets in order
                            to craft a new NFT that can be used in-game or traded on the marketplace.
                            Different attributes for each trait grant a variety of marvellous helmets ready to battle.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PilotsSection