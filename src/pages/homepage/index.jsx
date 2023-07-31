import BannerSection from "../../components/BannerSection/BannerSection.jsx"
import AboutSection from "../../components/AboutSection/AboutMeSection.jsx"
import TechSection from "../../components/TechSection/TechSection.jsx"
import ProjectSection from "../../components/ProjectsSection/ProjectSection.jsx"
import DefaultTemplate from "../../components/DefaultTemplate/DefaultTemplate.jsx"




const HomePage = () => {
    return (

        <DefaultTemplate>

            <BannerSection />
            <AboutSection />
            <TechSection />
            <ProjectSection />

        </DefaultTemplate>




    )
}

export default HomePage