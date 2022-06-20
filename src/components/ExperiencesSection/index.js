import React from "react"
import * as classes from './experiencesSection.module.scss'
import cx from 'classnames'
import {sections} from "../../helpers/constants"
import CustomizeIcon from '../../assets/icn_building.svg'
import BattleIcon from '../../assets/icn_battling.svg'
import NftIcon from '../../assets/icn_nft.svg'
import GalaxyIcon from '../../assets/icn_galaxy.svg'

const ExperiencesSection = () => {
    return (
        <div
            id={sections.GAME_EXPERIENCES}
            className={classes.experiencesSection}
        >
            <div className={cx("whiteDivider", classes.whiteLineDivider)}/>

            <div className="container">
                <div className="row">
                    <div className={cx("col-12", classes.title)}>
                        <h3>4 experiences in 1 game</h3>
                        <h4>Live them all</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className={cx("flexbox-start", classes.list)}>
                            <ListItem number={1} icon={<CustomizeIcon/>} text={'Customization of your mecha'}/>
                            <ListItem number={2} icon={<BattleIcon/>} text={'Mecha battles'}/>
                            <ListItem number={3} icon={<NftIcon/>} text={'NFT marketplace'}/>
                            <ListItem number={4} icon={<GalaxyIcon/>} text={'Galactic conquest of the Mechaversus'}/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 offset-lg-1">
                        <p>
                            In the Mechaversus world, players will compete with each other using complex strategies
                            and tactics to attain top rankings or be rewarded with resources and tools. They
                            will contribute to an economy with its own laws, which are influenced
                            by the players themselves.
                        </p>
                        <p>
                            <span><strong>Players hold Mechadium</strong></span>, the official in-game currency,
                            which interfaces between the game and the world of cryptocurrencies. They
                            will acquire not only currency but also NFTs that can be traded, crafted and sold.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperiencesSection

function ListItem({number, icon, text}) {
    return (
        <div className={cx("flexbox-start", classes.listItem)}>
            <h5>{number}</h5>
            {icon}
            <span>{text}</span>
        </div>
    )
}