import React, {useEffect, useRef} from "react"
import {sections} from "../../helpers/constants"
import * as classes from './mechaSection.module.scss'
import cx from 'classnames'
import MechaConfigurator from "./MechaConfigurator"
import Divider from '../../images/generics/div2.svg'
import DividerMobile from '../../images/generics/divMobile1.svg'

const MechaSection = ({scrollFromTop, setCurrentSectionCb}) => {
    const sectionRef = useRef()

    useEffect(() => {
        const sectionOffset = sectionRef.current?.offsetTop
        const sectionHeight = sectionRef.current?.scrollHeight

        if(
            sectionOffset <= scrollFromTop
            && sectionOffset + sectionHeight >= scrollFromTop
        ) {
            setCurrentSectionCb(sections.MECHA)
        }
    }, [sectionRef, scrollFromTop])

    return (
        <section
            id={sections.MECHA}
            className={classes.mechaSection}
            ref={sectionRef}
        >
            <div className={cx("whiteDivider", classes.whiteDivider)}/>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-5">
                        <h3>Enpower your mechas army</h3>
                        <h4>Upgrade, breed, reforge</h4>
                        <p>
                            Each mech of the Mechaversus is a combination of separate modules which
                            can be equipped as you please. Each component serves a different
                            purpose and this grants the opportunity to strategically balance
                            the mech team. <span>Rent, buy, equip</span> <strong>different</strong> mecha
                            modules, choose the right core and connect sockets. Build your mecha alongside your strategy!
                        </p>
                    </div>
                    <div className="col-12 col-lg-7">
                        <MechaConfigurator/>
                    </div>
                </div>
            </div>

            <img
                src={Divider}
                alt="Divider"
                className={cx("d-none d-md-block", classes.bottomDivider)}
            />
            <img
                src={DividerMobile}
                alt="Divider"
                className={cx("d-block d-md-none", classes.bottomDivider)}
            />
        </section>
    )
}

export default MechaSection