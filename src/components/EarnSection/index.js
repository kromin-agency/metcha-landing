import React from "react"
import * as classes from './earnSection.module.scss'
import {sections} from "../../helpers/constants"
import cx from 'classnames'
import Card from '../../images/generics/Card.svg'
import PlayIcon from '../../assets/icn_play.svg'
import DaoIcon from '../../assets/icn_dao.svg'
import ManagementIcon from '../../assets/icn_management.svg'
import CreationIcon from '../../assets/icn_design.svg'

const EarnSection = () => {
    return (
        <section
            id={sections.EARN_PLAYING_MECHANICS}
            className={classes.earnSection}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Earn by playing</h3>
                        <h4>Discover how</h4>
                        <div className={cx("flexbox-between", classes.cards)}>
                            <div className={cx("flexbox-center", classes.card)}>
                                <img src={Card} alt="Card"/>
                                <PlayIcon/>
                                <div className={classes.cardText}>
                                    <h5>360° P2E</h5>
                                    <p>
                                        Battles, management, reforging and all other game experiences are modelled
                                        on the play to earn concept. Living the Mechaversus world in a 360°
                                        perspective gives you several entertaining ways to earn playing.
                                    </p>
                                </div>
                            </div>
                            <div className={classes.card}>
                                <img src={Card} alt="Card"/>
                                <DaoIcon/>
                                <div className={classes.cardText}>
                                    <h5>Earn by DAO</h5>
                                    <p>
                                        The more Mechadium you hold, the more you reforge, buy, sell, create or battle,
                                        the more relevance you gain inside the Mechaversus world. The decentralised
                                        governance will allow you to vote on how Mechadium flows, form alliances
                                        or be in charge of relevant roles inside the community.
                                    </p>
                                </div>
                            </div>
                            <div className={classes.card}>
                                <img src={Card} alt="Card"/>
                                <ManagementIcon/>
                                <div className={classes.cardText}>
                                    <h5>Earn by management</h5>
                                    <p>
                                        Industries are the core of governance and the key to reforging. Owning
                                        industries gives the possibility to strategically manage resources. Earn,
                                        be a successful businessman, contribute to the wellness and forge the
                                        future of the Mechaversus.
                                    </p>
                                </div>
                            </div>
                            <div className={classes.card}>
                                <img src={Card} alt="Card"/>
                                <CreationIcon/>
                                <div className={classes.cardText}>
                                    <h5>Earn by content creation</h5>
                                    <p>
                                        Follow your creative impulse and a few simple rules, you will be able to
                                        design new Helmets or other NFTs. Sell your creations and start a profitable
                                        artistic career inside the Mechaversus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EarnSection