import HeroSection from "./HeroSection"
import ShowReelSection from "./ShowReelSection"
import OurClientsSection from "./OurClientsSection"
import ServicesSection from "./ServicesSection"
import FeaturedProjectsSection from "./FeaturedProjectsSection"
import AboutSection from "./AboutSection"

const HomeView = () => {
  return (
    <div className="">
      <HeroSection />
      <ShowReelSection />
      <OurClientsSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <AboutSection />
    </div>
  )
}

export default HomeView