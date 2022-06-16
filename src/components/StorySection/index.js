import React from "react"
import * as classes from './storySection.module.scss'
import GradientLine from "../UI/GradientLine"
import Image from "../UI/Image"

const planetLeftPath = "Planet1.png"
const planetRightPath = "Planet2.png"

const StorySection = () => {
    return (
        <div
            id="story"
            className={classes.storySection}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Build up your unique army</h3>
                        <h4>
                            <span>To face the</span>
                            Biggest multiplanetary crisis
                        </h4>
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

            <Image filename={planetLeftPath} alt={"planet"} className={classes.planetLeft}/>
            <Image filename={planetRightPath} alt={"planet"} className={classes.planetRight}/>
            <GradientLine className={classes.greenLine}/>
        </div>
    )
}

export default StorySection