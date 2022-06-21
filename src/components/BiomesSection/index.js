import React, {useState} from "react"
import * as classes from './biomesSection.module.scss'
import cx from 'classnames'
import {sections} from "../../helpers/constants"
import PiratesBg from '../../images/generics/bg1-Mech1.png'
import AliensBg from '../../images/generics/bg1-Mech2.png'
import HumanBg from '../../images/generics/bg1-Mech3.png'
import SmallCard from '../../images/generics/choose_card.svg'
import AliensIcon from '../../assets/icn_mech_alien_biome.svg'
import PiratesIcon from '../../assets/icn_mech_pirate_biome.svg'
import HumanIcon from '../../assets/icn_mech_human_biome.svg'
import Image from "../UI/Image"
import BigCard from '../../images/generics/choose_big_card.svg'
import Hexagon from '../../assets/icn_hexagon.svg'

const PIRATES = 'pirates'
const ALIENS = 'aliens'
const HUMANS = 'humans'

const mechs = [
    {name: PIRATES, background: PiratesBg, text: 'Plasma, electricity and magnetism are the favourite technologies for this alien race. Pirate mechas are fast and well defended thanks to their innovative shields and armors.'},
    {name: ALIENS, background: AliensBg, text: 'Not the strongest mechas, but very prone to defence builds. Aliens mechas equip long distance weapons to destroy opponents mechas and win the Mechadium rush'},
    {name: HUMANS, background: HumanBg, text: 'Strong, not so sleek, but efficients against every kind of obstacle pool planets offer. Highly resistant, but slow, human mechas are a good tradeoff for every situation.'}
]

const BiomesSection = () => {
    const [selectedMech, setSelectedMech] = useState(mechs[0])

    return (
        <section
            id={sections.BIOMES}
            className={cx("section-small-padding", classes.biomesSection)}
            style={{backgroundImage: `url(${selectedMech.background})`}}
        >
            <div className="bg-gradient-top"/>
            <div className="bg-gradient-bottom"/>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Choose your side</h3>
                        <h4>Humans, pirates or aliens</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className={cx("flexbox-center", classes.buttons)}>
                            <div
                                className={cx("flexbox-center", classes.smallCard, selectedMech.name === PIRATES ? classes.activeSmallCard : "")}
                                onClick={() => setSelectedMech(mechs[0])}
                            >
                                <img
                                    src={SmallCard}
                                    alt="Card"
                                />
                                <div className="absolute-centered">
                                    <PiratesIcon/>
                                    <h5>Pirates</h5>
                                </div>
                            </div>
                            <div
                                className={cx("flexbox-center", classes.smallCard, selectedMech.name === ALIENS ? classes.activeSmallCard : "")}
                                onClick={() => setSelectedMech(mechs[1])}
                            >
                                <img
                                    src={SmallCard}
                                    alt="Card"
                                />
                                <div className="absolute-centered">
                                    <AliensIcon/>
                                    <h5>Aliens</h5>
                                </div>
                            </div>
                            <div
                                className={cx("flexbox-center", classes.smallCard, selectedMech.name === HUMANS ? classes.activeSmallCard : "")}
                                onClick={() => setSelectedMech(mechs[2])}
                            >
                                <img
                                    src={SmallCard}
                                    alt="Card"
                                />
                                <div className="absolute-centered">
                                    <HumanIcon/>
                                    <h5>Humans</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className={classes.statsCard}>
                            <img src={BigCard} alt="Big Card"/>
                            <div className={classes.topStats}>
                                <h5>{selectedMech.name}</h5>
                            </div>
                            <p>{selectedMech.text}</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={classes.mechImageWrapper}>
                            <Image
                                filename={'img_mech_pirate.png'}
                                alt={'Mech'}
                                className={cx(classes.mechImage, selectedMech.name === PIRATES ? classes.selectedMech : "")}
                            />
                            <Image
                                filename={'img_mech_Alien.png'}
                                alt={'Mech'}
                                className={cx(classes.mechImage, selectedMech.name === ALIENS ? classes.selectedMech : "")}
                            />
                            <Image
                                filename={'img_mech_human.png'}
                                alt={'Mech'}
                                className={cx(classes.mechImage, selectedMech.name === HUMANS ? classes.selectedMech : "")}
                            />
                        </div>

                    </div>
                </div>
                <div className="row flexbox-center">
                    <div className="col-auto">
                        <div className={classes.points}>
                            <Hexagon className={selectedMech.name === PIRATES ? classes.selectedHex : ""}/>
                            <Hexagon className={selectedMech.name === ALIENS ? classes.selectedHex : ""}/>
                            <Hexagon className={selectedMech.name === HUMANS ? classes.selectedHex : ""}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BiomesSection