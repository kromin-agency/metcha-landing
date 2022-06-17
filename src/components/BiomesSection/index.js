import React, {useState} from "react"
import * as classes from './biomesSection.module.scss'
import cx from 'classnames'
import {sections} from "../../helpers/constants"
import PiratesBg from '../../images/generics/bg1-Mech1.png'
import AliensBg from '../../images/generics/bg1-Mech2.png'
import HumanBg from '../../images/generics/bg1-Mech3.png'

const PIRATES = 'pirates'
const ALIENS = 'aliens'
const HUMAN = 'human'

const mechs = [
    {name: PIRATES, background: PiratesBg, image: 'img_mech_pirate.png'},
    {name: ALIENS, background: AliensBg, image: 'img_mech_Alien.png'},
    {name: HUMAN, background: HumanBg, image: 'img_mech_human.png'}
]

const BiomesSection = () => {
    const [selectedMech, setSelectedMech] = useState(mechs[0])

    return (
        <section
            id={sections.BIOMES}
            className={classes.biomesSection}
            style={{backgroundImage: `url(${selectedMech.background})`}}
        >
            <div className="bgGradientTop"/>
            <div className="bgGradientBottom"/>
            <div className={cx("whiteDivider", classes.whiteDivider)}/>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Choose your side</h3>
                        <h4>Humans, pirates or aliens</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BiomesSection