import React, {useState} from "react"
import Image from "../../UI/Image"
import * as classes from './mechaConfigurator.module.scss'
import cx from 'classnames'
import Hexagon from "../../../assets/icn_hexagon.svg"

const WEAPON_1 = 'weapon_1'
const WEAPON_2 = 'weapon_2'
const WEAPON_3 = 'weapon_3'

const configurations = [
    {
        name: WEAPON_1,
        image: 'Mecha_Config1.png',
        abilities: [
            {label: 'Strength', value: '75%', updateValue: '15%', updateColor: '#34DB21'},
            {label: 'Speed', value: '65%', updateValue: '10%', updateColor: '#FF113A'},
            {label: 'Stability', value: '70%', updateValue: '5%', updateColor: '#FF113A'},
            {label: 'Defence', value: '75%', updateValue: '5%', updateColor: '#34DB21'}
        ]
    },
    {
        name: WEAPON_2,
        image: 'Mecha_Config2.png',
        abilities: [
            {label: 'Strength', value: '75%', updateValue: '10%', updateColor: '#34DB21'},
            {label: 'Speed', value: '75%', updateValue: '15%', updateColor: '#34DB21'},
            {label: 'Stability', value: '75%', updateValue: '10%', updateColor: '#34DB21'},
            {label: 'Defence', value: '75%', updateValue: '10%', updateColor: '#34DB21'}
        ]
    },
    {
        name: WEAPON_3,
        image: 'Mecha_Config3.png',
        abilities: [
            {label: 'Strength', value: '75%', updateValue: '5%', updateColor: '#34DB21'},
            {label: 'Speed', value: '75%', updateValue: '25%', updateColor: '#34DB21'},
            {label: 'Stability', value: '75%', updateValue: '5%', updateColor: '#34DB21'},
            {label: 'Defence', value: '65%', updateValue: '5%', updateColor: '#FF113A'}
        ]
    }
]

const MechaConfigurator = () => {
    const [selectedConfig, setSelectedConfig] = useState(configurations[0])

    const onSelectConfiguration = (configurationName) => {
        const newConfiguration = configurations.find(e => e.name === configurationName)
        setSelectedConfig(newConfiguration)
    }

    return (
        <div>
            <div className={cx("flexbox-end", classes.configuration)}>
                <Image
                    filename={selectedConfig.image}
                    alt={'Configuration'}
                />
                <div className={classes.stats}>
                    {
                        selectedConfig.abilities.map(({label, value, updateValue, updateColor}, index) => (
                            <div className={classes.singleAbility} key={index}>
                                <h5>{label}</h5>
                                <div className="flexbox-start">
                                    <div style={{width: value, background: '#FFF'}}/>
                                    <div style={{width: updateValue, background: updateColor}}/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={classes.points}>
                <Hexagon className={selectedConfig.name === WEAPON_1 ? classes.selectedHex : ""}/>
                <Hexagon className={selectedConfig.name === WEAPON_2 ? classes.selectedHex : ""}/>
                <Hexagon className={selectedConfig.name === WEAPON_3 ? classes.selectedHex : ""}/>
            </div>
            <div className={cx("flexbox-center", classes.buttons)}>
                <button onClick={() => onSelectConfiguration(WEAPON_1)}>
                    <Image
                        filename={"weapon1.png"}
                        alt={"weapon 1"}
                        draggable={false}
                    />
                    <Image
                        filename={"weapon1_selected.png"}
                        alt={"weapon 1"}
                        draggable={false}
                        style={{position: "absolute", inset: 0, opacity: +(selectedConfig.name === WEAPON_1), transition: "ease-in-out 300ms"}}
                    />
                </button>
                <button onClick={() => onSelectConfiguration(WEAPON_2)}>
                    <Image
                        filename={"weapon2.png"}
                        alt={"weapon 2"}
                        draggable={false}
                    />
                    <Image
                        filename={"weapon2_selected.png"}
                        alt={"weapon 2"}
                        draggable={false}
                        style={{position: "absolute", inset: 0, opacity: +(selectedConfig.name === WEAPON_2), transition: "ease-in-out 300ms"}}
                    />
                </button>
                <button onClick={() => onSelectConfiguration(WEAPON_3)}>
                    <Image
                        filename={"weapon3.png"}
                        alt={"weapon 3"}
                        draggable={false}
                    />
                    <Image
                        filename={"weapon3_selected.png"}
                        alt={"weapon 3"}
                        draggable={false}
                        style={{position: "absolute", inset: 0, opacity: +(selectedConfig.name === WEAPON_3), transition: "ease-in-out 300ms"}}
                    />
                </button>
            </div>
        </div>
    )
}

export default MechaConfigurator