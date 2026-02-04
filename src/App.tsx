import './App.css'
import CallToAction from './components/landing/CalltoAction'
import Footer from './components/landing/Footer'
import IntroSection from './components/landing/Introsection'
import TechAbyss from './components/landing/page1'
import FullStackSection from './components/landing/Page2'
import ServicesSection from './components/landing/Page3'
import MarketingSection from './components/landing/Page4'
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
