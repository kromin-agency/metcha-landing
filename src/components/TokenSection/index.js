import React from "react"
import * as classes from './tokenSection.module.scss'
import GradientLine from "../UI/GradientLine"
import {sections} from "../../helpers/constants"

const TokenSection = () => {
    return (
        <section
            id={sections.TOKEN}
            className={classes.tokenSection}
        >
            <div className={classes.bgGradient}/>
            <GradientLine className={classes.greenLine}/>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Expand your horizons</h3>
                        <h4>Collecting our token</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TokenSection