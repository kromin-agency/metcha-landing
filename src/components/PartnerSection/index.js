import React from "react"
import * as classes from './partnerSection.module.scss'
import {sections} from "../../helpers/constants"

const PartnerSection = () => {
    return (
        <div
            id={sections.PARTNERS}
            className={classes.partnerSection}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Partner</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerSection