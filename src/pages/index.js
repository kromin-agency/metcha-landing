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
import ChannelsSection from "../components/ChannelsSection"
import BackToTop from '../images/generics/Backtotop.png'
import {useCallback, useState, useEffect} from "react"
import {useWindowSize} from "../helpers/useWindowSize"

const SECTIONS = [
    {id: sections.START, label: 'Start'},
    {id: sections.STORY, label: 'Story'},
    {id: sections.TOKEN, label: 'Token'},
    {id: sections.BIOMES, label: 'Biomes'},
    {id: sections.PILOTS, label: 'Pilots'},
    {id: sections.MECHA, label: 'Mecha'},
    {id: sections.ARENAS, label: 'Arenas'},
    {id: sections.EARN_PLAYING_MECHANICS, label: 'Earn'},
    {id: sections.GAME_EXPERIENCES, label: 'Game experiences'},
    {id: sections.NFT_MARKETPLACE, label: 'NFT marketplace'},
    {id: sections.PARTNERS, label: 'Partners'},
    {id: sections.WHITEPAPERS_CHANNELS, label: 'Whitepapers & channels'}
]

const IndexPage = () => {
    const {width: pageWidth, height: pageHeight} = useWindowSize()
    const [currentSection, setCurrentSection] = useState(sections.START)
    const [scrollFromTop, setScrollFromTop] = useState(0)

    useEffect(() => {
        if(pageWidth >= 1200) {
            document.addEventListener(
                "scroll",
                () => setScrollFromTop(document.documentElement.scrollTop + (pageHeight / 2))
            )
        }

    }, [pageWidth, pageHeight])

    const setCurrentSectionCb = useCallback((newSection) => setCurrentSection(newSection), [])

    return (
        <Layout>
            <Seo title="Home"/>

            {/* fixed components */}
            <SocialIcons/>
            <Sidebar
                sections={SECTIONS}
                currentSection={currentSection}
            />
            <MobileMenu sections={SECTIONS}/>
            <img
                src={BackToTop}
                alt="back to top"
                className={"back-to-top"}
                onClick={() => window?.scrollTo(0, 0)}
            />

            {/* sections */}
            <StartSection
                scrollFromTop={scrollFromTop}
                setCurrentSectionCb={setCurrentSectionCb}
            />
            <StorySection
                scrollFromTop={scrollFromTop}
                setCurrentSectionCb={setCurrentSectionCb}
            />
            <TokenSection
                scrollFromTop={scrollFromTop}
                setCurrentSectionCb={setCurrentSectionCb}
            />
            <BiomesSection
                scrollFromTop={scrollFromTop}
                setCurrentSectionCb={setCurrentSectionCb}
            />
            <PilotsSection
                scrollFromTop={scrollFromTop}
                setCurrentSectionCb={setCurrentSectionCb}
            />
            <MechaSection
                scrollFromTop={scrollFromTop}
                setCurrentSectionCb={setCurrentSectionCb}
            />
            <ArenasSection
                scrollFromTop={scrollFromTop}
                setCurrentSectionCb={setCurrentSectionCb}
            />
            <EarnSection
                scrollFromTop={scrollFromTop}
                setCurrentSectionCb={setCurrentSectionCb}
            />
            <ExperiencesSection
                scrollFromTop={scrollFromTop}
                setCurrentSectionCb={setCurrentSectionCb}
            />
            <NftSection
                scrollFromTop={scrollFromTop}
                setCurrentSectionCb={setCurrentSectionCb}
            />
            <PartnerSection
                scrollFromTop={scrollFromTop}
                setCurrentSectionCb={setCurrentSectionCb}
            />
            <ChannelsSection
                scrollFromTop={scrollFromTop}
                setCurrentSectionCb={setCurrentSectionCb}
            />
        </Layout>
    )
}

export default IndexPage
