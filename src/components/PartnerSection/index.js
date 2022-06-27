import React from "react"
import * as classes from './partnerSection.module.scss'
import {sections} from "../../helpers/constants"
import cx from 'classnames'
import Divider from '../../images/generics/div3.svg'
import DividerMobile from '../../images/generics/divMobile1.svg'

const PartnerSection = () => {
    return (
        <div
            id={sections.PARTNERS}
            className={cx("section-big-padding", classes.partnerSection)}
        >
            <img
                src={Divider}
                alt="Divider"
                className={cx("d-none d-md-block", classes.topDivider)}
            />
            <img
                src={DividerMobile}
                alt="Divider"
                className={cx("d-block d-md-none", classes.topDivider)}
            />

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