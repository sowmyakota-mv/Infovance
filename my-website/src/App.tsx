import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServiceSection'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import StatsSection from './components/StatsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ScrollToTop from './animation/ScrollToTop'

function App() {

  return (
    <>
    <Router>
      {/* ✅ No horizontal scroll, normal vertical scroll */}
      <div className="w-full min-h-screen overflow-x-hidden overflow-y-hidden relative">
      <ScrollToTop/>
    <Header/>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <WhyChooseUs/>
      <Testimonials/>
      <StatsSection/>
      <ContactSection/>
      <Footer/>
      </div>
    </Router>
    </>
  )
}

export default App
