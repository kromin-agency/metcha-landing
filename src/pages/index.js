import * as React from "react"
import Seo from "../components/Seo/seo"
import Layout from "../layout";
import SocialIcons from "../components/UI/SocialIcons"
import Sidebar from "../components/UI/Sidebar"
import StartSection from "../components/StartSection"
import MobileMenu from "../components/UI/MobileMenu"
import StorySection from "../components/StorySection"

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

const IndexPage = () => (
    <Layout>
        <Seo title="Home"/>

        {/* fixed components */}
        <SocialIcons/>
        <Sidebar sections={SECTIONS}/>
        <MobileMenu sections={SECTIONS}/>

        {/* sections */}
        <StartSection/>
        <StorySection/>
    </Layout>
)

export default IndexPage
