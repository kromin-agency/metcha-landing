import React from "react"
import * as classes from './nftsection.module.scss'
import cx from 'classnames'
import HelmetIcon from '../../assets/icn_helmet.svg'
import TrapsIcon from '../../assets/icn_traps.svg'
import ArenasIcon from '../../assets/icn_arenas.svg'
import MechsIcon from '../../assets/icn_mech.svg'
import NexusIcon from '../../assets/icn_nexus.svg'
import LandsIcon from '../../assets/icn_Lands.svg'
import {sections} from "../../helpers/constants"
import Image from "../UI/Image"

const NftSection = () => {
    return (
        <div
            id={sections.NFT_MARKETPLACE}
            className={classes.nftSection}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Enjoy a full nft marketplace</h3>
                        <h4>Farm, collect, rent or sell</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <Image filename={'img_marketplace'} alt={'Marketplace'}/>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="row">
                            <div className="col-12">
                                <p>
                                    Acquire Mechadium or NFTs by purchasing them, even with other cryptocurrencies,
                                    through a digital wallet.
                                </p>
                                <p>
                                    Rent industries, mechas or districts, buy and sell them, explore new
                                    possibilities of profit.
                                </p>
                            </div>
                        </div>
                        <div className="row" style={{marginTop: 40}}>
                            <div className="col-6 offset-3 offset-sm-0">
                                <div className={cx("flexbox-start", classes.listItem)}>
                                    <HelmetIcon/>
                                    <span>Helmets</span>
                                </div>
                                <div className={cx("flexbox-start", classes.listItem)}>
                                    <ArenasIcon/>
                                    <span>Arenas</span>
                                </div>
                                <div className={cx("flexbox-start", classes.listItem)}>
                                    <NexusIcon/>
                                    <span>Nexus</span>
                                </div>
                            </div>
                            <div className="col-6 offset-3 offset-sm-0">
                                <div className={cx("flexbox-start", classes.listItem)}>
                                    <TrapsIcon/>
                                    <span>Traps</span>
                                </div>
                                <div className={cx("flexbox-start", classes.listItem)}>
                                    <MechsIcon/>
                                    <span>Mechs</span>
                                </div>
                                <div className={cx("flexbox-start", classes.listItem)}>
                                    <LandsIcon/>
                                    <span>Lands</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NftSection