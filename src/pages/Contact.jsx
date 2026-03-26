import CommunitySection from "../components/contact/CommunitySection"
import ContactHeroSection from "../components/contact/ContactHeroSection"
import ContactInfoSection from "../components/contact/ContactInfoCards"
import FAQSection from "../components/contact/FAQSection"
import FinalCTASection from "../components/contact/FinalCTASection"

const Contact = () => {
  return (
    <div>
      <ContactHeroSection/>
      <ContactInfoSection/>
      <CommunitySection/>
      <FAQSection/>
      <FinalCTASection/>
    </div>
  )
}

export default Contact