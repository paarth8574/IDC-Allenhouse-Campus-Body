import BuildSection from "../components/BuildSection"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import ImpactSection from "../components/ImpactSection"
import LegacyCTA from "../components/LegacyCTA"

function Home() {
  return (
    <div>
      <Hero />
      <BuildSection/>
      <ImpactSection/>
      <LegacyCTA/>
    </div>
  )
}

export default Home