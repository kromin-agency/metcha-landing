import * as React from "react"
import Seo from "../components/Seo/seo"
import Layout from "../layout";
import Image from "../components/UI/Image";
import AlienIcon from "../assets/icn_alien.svg"
import SocialIcons from "../components/UI/SocialIcons"
import Sidebar from "../components/UI/Sidebar"
import StartSection from "../components/StartSection"

const IndexPage = () => (
    <Layout>
        <Seo title="Home"/>

        {/* fixed components */}
        <SocialIcons/>
        <Sidebar/>

        {/* sections */}
        <StartSection/>



        {/*<div className="text-center">
            <Image filename={"Mecha_Config1.png"} alt={"Mecha1"} style={{width:300}}/>
            <h1>
                Welcome to <b>Mecha!</b>
            </h1>
            <p>
                sample paragraph with an icon in .svg
                <AlienIcon/>
            </p>
        </div>*/}
    </Layout>
)

export default IndexPage
