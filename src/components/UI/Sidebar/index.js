import React from "react"
import cx from 'classnames'
import * as classes from "./sidebar.module.scss"

const SECTIONS = [
    {id: '#start', label: 'Start'},
    {id: '#story', label: 'Story'},
    {id: '#token', label: 'Token'},
    {id: '#biomes', label: 'Biomes'},
    {id: '#pilots', label: 'Pilots'},
    {id: '#mecha', label: 'Mecha'},
    {id: '#arenas', label: 'Arenas'},
    {id: '#earn', label: 'Earn by playing mechanics'},
    {id: '#gameExp', label: 'Game experiences'},
    {id: '#nft', label: 'NFT marketplace'},
    {id: '#partners', label: 'Partners'},
    {id: '#channels', label: 'Whitepapers & channels'}
]

const Sidebar = () => {

    return (
        <div className={classes.sidebar}>
            <div className={cx(classes.line, classes.lineTop)}/>
            <nav>
                {
                    SECTIONS.map((section, index) => (
                        <a
                            href={section.id}
                            className={classes.link}
                            key={index}
                        >
                            <span>
                                {section.label}
                            </span>
                        </a>
                    ))
                }
            </nav>
            <div className={cx(classes.line, classes.lineBottom)}/>
        </div>
    )
}

export default Sidebar