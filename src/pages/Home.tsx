import PageTransition from '../components/shared/PageTransition';
import TechAbyss from '../components/landing/HeroSection';
import FullStackSection from '../components/landing/CustomerSatisfaction';
import ServicesSection from '../components/landing/ConsultingService';
import MarketingSection from '../components/landing/PerformanceMarketing';
import IntroSection from '../components/landing/Introsection';
import CallToAction from '../components/landing/CalltoAction';

const Home = () => {
  return (
    <PageTransition>
      <TechAbyss />
      <FullStackSection />
      <ServicesSection />
      <MarketingSection />
      <IntroSection />
      <CallToAction />
    </PageTransition>
  );
};

export default Home;
