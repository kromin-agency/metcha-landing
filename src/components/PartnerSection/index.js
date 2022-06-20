import React from "react"
import * as classes from './partnerSection.module.scss'
import {sections} from "../../helpers/constants"
import cx from 'classnames'

const PartnerSection = () => {
    return (
        <div
            id={sections.PARTNERS}
            className={cx("section-big-padding", classes.partnerSection)}
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