import './App.css'
import CallToAction from './components/landing/CalltoAction'
import Footer from './components/landing/Footer'
import IntroSection from './components/landing/Introsection'
import TechAbyss from './components/landing/HeroSection'
import FullStackSection from './components/landing/CustomerSatisfaction'
import ServicesSection from './components/landing/ConsultingService'
import MarketingSection from './components/landing/PerformanceMarketing'
// import { HeroSection } from './components/landing/HeroSection'
import Logo from './components/partials/Logo'
import { Header } from './components/partials/TopHeader'
import Navbar from './components/partials/TovNav'
// import TopHeader from './components/partials/TopHeader'
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
function App() {

  return (
    <>
    <MantineProvider defaultColorScheme="dark">
   {/* <Logo/> */}
   {/* <Navbar/> */}
   {/* <Header/> */}
   <TechAbyss/>
   <FullStackSection/>
   <ServicesSection/>
   {/* <ServiceSection2/> */}
   <MarketingSection/>
   <IntroSection/>
   <CallToAction/>
   <Footer/>

   </MantineProvider>
   </>
  )
}

export default App
