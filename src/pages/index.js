import * as React from "react"
import Seo from "../components/Seo/seo"
import Layout from "../layout";
import SocialIcons from "../components/UI/SocialIcons"
import Sidebar from "../components/UI/Sidebar"
import StartSection from "../components/StartSection"
import MobileMenu from "../components/UI/MobileMenu"
import StorySection from "../components/StorySection"
import TokenSection from "../components/TokenSection"
import {sections} from "../helpers/constants"
import BiomesSection from "../components/BiomesSection"
import PilotsSection from "../components/PilotsSection"
import MechaSection from "../components/MechaSection"
import ArenasSection from "../components/ArenasSection"
import EarnSection from "../components/EarnSection"
import ExperiencesSection from "../components/ExperiencesSection"
import NftSection from "../components/NftSection"
import PartnerSection from "../components/PartnerSection"

const SECTIONS = [
    {id: `#${sections.START}`, label: 'Start'},
    {id: `#${sections.STORY}`, label: 'Story'},
    {id: `#${sections.TOKEN}`, label: 'Token'},
    {id: `#${sections.BIOMES}`, label: 'Biomes'},
    {id: `#${sections.PILOTS}`, label: 'Pilots'},
    {id: `#${sections.MECHA}`, label: 'Mecha'},
    {id: `#${sections.ARENAS}`, label: 'Arenas'},
    {id: `#${sections.EARN_PLAYING_MECHANICS}`, label: 'Earn by playing mechanics'},
    {id: `#${sections.GAME_EXPERIENCES}`, label: 'Game experiences'},
    {id: `#${sections.NFT_MARKETPLACE}`, label: 'NFT marketplace'},
    {id: `#${sections.PARTNERS}`, label: 'Partners'},
    {id: `#${sections.WHITEPAPERS_CHANNELS}`, label: 'Whitepapers & channels'}
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
        <TokenSection/>
        <BiomesSection/>
        <PilotsSection/>
        <MechaSection/>
        <ArenasSection/>
        <EarnSection/>
        <ExperiencesSection/>
        <NftSection/>
        <PartnerSection/>
    </Layout>
)

export default IndexPage
