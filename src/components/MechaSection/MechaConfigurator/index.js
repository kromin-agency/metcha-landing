import React, {useState} from "react"
import Image from "../../UI/Image"
import * as classes from './mechaConfigurator.module.scss'

const WEAPON_1 = 'weapon_1'
const WEAPON_2 = 'weapon_2'
const WEAPON_3 = 'weapon_3'

const configurations = [
    {
        name: WEAPON_1,
        image: 'Mecha_Config1.png',
        abilities: [
            {label: 'Strength', value: '75%', updateValue: '95%', updateColor: '#34DB21'},
            {label: 'Speed', value: '65%', updateValue: '75%', updateColor: '#FF113A'},
            {label: 'Stability', value: '05%', updateValue: '75%', updateColor: '#FF113A'},
            {label: 'Defence', value: '75%', updateValue: '80%', updateColor: '#34DB21'}
        ]
    },
    {
        name: WEAPON_2,
        image: 'Mecha_Config2.png',
        abilities: [
            {label: 'Strength', value: '75%', updateValue: '95%', updateColor: '#34DB21'},
            {label: 'Speed', value: '65%', updateValue: '75%', updateColor: '#FF113A'},
            {label: 'Stability', value: '05%', updateValue: '75%', updateColor: '#FF113A'},
            {label: 'Defence', value: '75%', updateValue: '80%', updateColor: '#34DB21'}
        ]
    },
    {
        name: WEAPON_3,
        image: 'Mecha_Config2.png',
        abilities: [
            {label: 'Strength', value: '75%', updateValue: '15%', updateColor: '#34DB21'},
            {label: 'Speed', value: '65%', updateValue: '10%', updateColor: '#FF113A'},
            {label: 'Stability', value: '05%', updateValue: '3%', updateColor: '#FF113A'},
            {label: 'Defence', value: '75%', updateValue: '5%', updateColor: '#34DB21'}
        ]
    }
]

const MechaConfigurator = () => {
    const [selectedConfig, setSelectedConfig] = useState(configurations[0])

    return (
        <div>
            <div className="flexbox-end" style={{alignItems: 'start'}}>
                <Image
                    filename={selectedConfig.image}
                    alt={'Configuration'}
                    style={{width: 500}}
                />
                <div>
                    {
                        selectedConfig.abilities.map(({label, value, updateValue, updateColor}, index) => (
                            <div className={classes.singleAbility}>
                                <h5>{label}</h5>
                                <div>
                                    <span style={{width: value, background: '#FFF'}}/>
                                    <span style={{width: updateValue, background: updateColor}}/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MechaConfigurator