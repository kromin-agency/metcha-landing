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
                            </div>
                            <div className={classes.card}>
                                <img src={Card} alt="Card"/>
                                <DaoIcon/>
                            </div>
                            <div className={classes.card}>
                                <img src={Card} alt="Card"/>
                                <ManagementIcon/>
                            </div>
                            <div className={classes.card}>
                                <img src={Card} alt="Card"/>
                                <CreationIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EarnSection