import HomeHeader from './ui/components/HomeHeader'
import HomeFooter from './ui/components/HomeFooter'
import HeroSection from './ui/components/HeroSection'
import AboutUsSection from './ui/components/AboutUsSection'
import AboutYouSection from './ui/components/AboutYouSection'
import ServicesSection from './ui/components/ServicesSection'
import CTASection from './ui/components/CTASection'

export default function Home() {
  return (
    <>
      <HomeHeader/>

      <HeroSection />
    
      <main id="main" className="main">

        < AboutUsSection />

        < AboutYouSection />

        < ServicesSection />

        < CTASection />

      </main>

      <HomeFooter/>

    </>
  );
}
