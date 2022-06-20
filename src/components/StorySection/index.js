import React from "react"
import * as classes from './storySection.module.scss'
import cx from 'classnames'
import Image from "../UI/Image"
import {sections} from "../../helpers/constants"

const StorySection = () => {
    return (
        <section
            id={sections.STORY}
            className={cx("section-small-padding", classes.storySection)}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Build up your unique army</h3>
                        <h4>
                            <span>To face the</span>
                            Biggest multiplanetary crisis
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                        <p>
                            <span>2900 A.C.</span> The Milky Way is teeming with life: humans and aliens are part now of a new order
                            called the <span>Network</span> That is in charge of assigning to every member pool-planets where to
                            extract Mechadium.
                        </p>
                        <p>
                            This task is entrusted to the <span>Mechas</span>: sophisticated robots that make up
                            the army of the Network dedicated to both supplying and defending it from external forces.
                        </p>
                        <p>
                            The Network seems a utopian and perfect system, in which all civilizations cooperate
                            peacefully, but the reality is quite different: many populations, in fact, secretly dream of
                            galactic supremacy, want to take over the governing core of the Net and subdue the other
                            members.
                        </p>
                    </div>
                </div>
            </div>

            <Image filename={"Planet1.png"} alt={"planet"} className={classes.planetLeft}/>
            <Image filename={"Planet2.png"} alt={"planet"} className={classes.planetRight}/>
            <div className={cx("bg-green-line", classes.greenLine)}/>
        </section>
    )
}

export default StorySection