import React, {useState} from "react"
import Image from "../../UI/Image"
import * as classes from './mechaConfigurator.module.scss'
import cx from 'classnames'

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
            <div className={cx("flexbox-center", classes.buttons)}>
                <button onClick={() => onSelectConfiguration(WEAPON_1)}>
                <Image
                    filename={selectedConfig.name === WEAPON_1 ? "weapon1_selected.png" : "weapon1.png"}
                    alt={"weapon 1"}
                    draggable={false}
                />
                </button>
                <button onClick={() => onSelectConfiguration(WEAPON_2)}>
                    <Image
                        filename={selectedConfig.name === WEAPON_2 ? "weapon2_selected.png" : "weapon2.png"}
                        alt={"weapon 1"}
                        draggable={false}
                    />
                </button>
                <button onClick={() => onSelectConfiguration(WEAPON_3)}>
                    <Image
                        filename={selectedConfig.name === WEAPON_3 ? "weapon3_selected.png" : "weapon3.png"}
                        alt={"weapon 1"}
                        draggable={false}
                    />
                </button>
            </div>
        </div>
    )
}

export default MechaConfigurator