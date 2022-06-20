import React from "react"
import * as classes from './arenaSection.module.scss'
import {sections} from "../../helpers/constants"
import Background from '../../images/generics/ArenasBg.png'
import cx from 'classnames'
import Card from '../../images/generics/CardArenas.svg'
import DeployIcon from '../../assets/icn_deploy.svg'
import MovesIcon from '../../assets/icn_makemoves.svg'
import DefeatIcon from '../../assets/icn_defeat.svg'

const ArenasSection = () => {
    return (
        <section
            id={sections.ARENAS}
            className={classes.arenaSection}
            style={{backgroundImage: `url(${Background})`}}
        >
            <div className="bg-gradient-top"/>
            <div className="bg-gradient-bottom"/>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>Create your unique strategy -</h4>
                        <h3>Battle and collect mechadium in incredible arenas</h3>
                        <div className={cx("flexbox-between", classes.cards)}>
                            <div className={classes.card}>
                                <img src={Card} alt="Card"/>
                                <div className="flexbox-center">
                                    <DeployIcon/>
                                    <h5>
                                        Deploy
                                        <br/>
                                        your merch
                                    </h5>
                                </div>
                            </div>
                            <div className={classes.card}>
                                <img src={Card} alt={'Card'}/>
                                <div className="flexbox-center">
                                    <MovesIcon/>
                                    <h5>
                                        Make
                                        <br/>
                                        your moves
                                    </h5>
                                </div>
                            </div>
                            <div className={classes.card}>
                                <img src={Card} alt={'Card'}/>
                                <div className="flexbox-center">
                                    <DefeatIcon/>
                                    <h5>
                                        Defeat
                                        <br/>
                                        all enemies
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArenasSection