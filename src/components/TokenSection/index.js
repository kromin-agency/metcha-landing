import React, {useEffect, useRef} from "react"
import * as classes from './tokenSection.module.scss'
import {sections} from "../../helpers/constants"
import BoxList from "../UI/BoxList"
import cx from 'classnames'
import TradingIcon from '../../assets/icn_trading.svg'
import CollectingIcon from '../../assets/icn_collecting.svg'
import BettingIcon from '../../assets/icn_betting.svg'
import BusinessIcon from '../../assets/icn_business.svg'
import ManagementIcon from '../../assets/icn_management.svg'
import DesignIcon from '../../assets/icn_design.svg'
import BuildingIcon from '../../assets/icn_building.svg'
import BattlingIcon from '../../assets/icn_battling.svg'
import AchievingIcon from '../../assets/icn_win.svg'
import Background from "../../images/backgrounds/token.mp4"
import Thumbnail from "../../images/backgrounds/token_thumb.png"

const TokenSection = ({scrollFromTop, setCurrentSectionCb}) => {
    const sectionRef = useRef()

    useEffect(() => {
        const sectionOffset = sectionRef.current?.offsetTop
        const sectionHeight = sectionRef.current?.scrollHeight

        if(
            sectionOffset <= scrollFromTop
            && sectionOffset + sectionHeight >= scrollFromTop
        ) {
            setCurrentSectionCb(sections.TOKEN)
        }
    }, [sectionRef, scrollFromTop])

    const playBgVideo = () => {
        const video = document.getElementById("tokenBgVideo")

        if(video?.paused) video?.play()
    }

    return (
        <section
            id={sections.TOKEN}
            className={classes.tokenSection}
            ref={sectionRef}
        >
            <div
                className={classes.topSection}
                onClick={playBgVideo}
            >
                <div className="bg-gradient-top"/>
                <div className="bg-gradient-bottom"/>
                <div className={cx("bg-green-line", classes.greenLine)}/>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Expand your horizons</h3>
                            <h4>Collecting our token</h4>
                            <h3 className={classes.largeMargin}>4 Phases</h3>
                            <h4>For a unique experience</h4>
                        </div>
                    </div>
                </div>

                <div
                    className={classes.background}
                    dangerouslySetInnerHTML={{
                        __html: `<video
                                id="tokenBgVideo"
                                muted
                                autoplay
                                playsInline
                                src=${Background}
                                style="background: url(${Thumbnail}) center / cover no-repeat"
                             />`
                    }}
                />
            </div>

            <div className={cx("container", classes.bottomSection)}>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <BoxList
                            number={'01'}
                            color={'#33AAA4'}
                            items={[
                                {
                                    icon: <TradingIcon/>,
                                    title: 'Trading',
                                    list: <>
                                        <li><strong>Buy and sell</strong> Helmets, mecha modules, lands and arenas in the NFT Marketplace.</li>
                                    </>
                                },
                                {
                                    icon: <CollectingIcon/>,
                                    title: 'Collecting',
                                    list: <>
                                        <li><strong>Seek</strong> for collectible Helmets.</li>
                                    </>
                                }
                            ]}
                        />
                        <BoxList
                            number={'02'}
                            color={'#57D282'}
                            style={{marginTop: 40}}
                            items={[
                                {
                                    icon: <BettingIcon/>,
                                    title: 'Betting',
                                    list: <>
                                        <li><strong>Reforge Helmets</strong> in forges and pursuit rare genes.</li>
                                        <li><strong>Reforge nexus</strong> and <strong>mecha modules</strong> in factories.</li>
                                    </>
                                },
                                {
                                    icon: <BusinessIcon/>,
                                    title: 'Business',
                                    list: <>
                                        <li><strong>Rent</strong> all types of industries, lands, mechas or other properties.</li>
                                    </>
                                }
                            ]}
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <BoxList
                            number={'03'}
                            color={'#5357C3'}
                            items={[
                                {
                                    icon: <ManagementIcon/>,
                                    title: 'Management',
                                    list: <>
                                        <li><strong>Buy industries, manage</strong> and <strong>mine lands</strong>.</li>
                                        <li>
                                            Create the community and <strong>outline</strong> together the
                                            <strong>future</strong> of the <strong>Mechaversus</strong>.
                                        </li>
                                    </>
                                },
                                {
                                    icon: <DesignIcon/>,
                                    title: 'Design',
                                    list: <>
                                        <li><strong>Design</strong>, craft and sell <strong>new NFTs</strong>.</li>
                                    </>
                                },
                                {
                                    icon: <BuildingIcon/>,
                                    title: 'Building',
                                    list: <>
                                        <li>
                                            <strong>Customise</strong> your <strong>mecha</strong> in the workshop and
                                            create your "deck" of mechas.
                                        </li>
                                        <li>Build hangars to repair broken mecha modules.</li>
                                    </>
                                }
                            ]}
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <BoxList
                            number={'04'}
                            color={'#A4295A'}
                            items={[
                                {
                                    icon: <BattlingIcon/>,
                                    title: 'Battling',
                                    list: <>
                                        <li><strong>Battle in the arenas</strong>.</li>
                                    </>
                                },
                                {
                                    icon: <AchievingIcon/>,
                                    title: 'Achieving',
                                    list: <>
                                        <li><strong>Achieve</strong> daily and weekly <strong>rewards</strong>.</li>
                                        <li><strong>Improve</strong> your Rank and climb the leaderboard.</li>
                                    </>
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TokenSection