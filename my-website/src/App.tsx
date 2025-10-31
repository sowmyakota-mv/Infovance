import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
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
import Innovation from './components/Innovation'
import CaseStudiesPage from './pages/CaseStudies'
import InnovationLab from './pages/DiscoverMore'
import Solutions from './pages/Solutions'
import Trainings from './pages/Trainings'
import FullStackDevelopment from './pages/FullStackDevelopment'
import AiAndMl from './pages/AiAndMl'
import DataAnalytics from './pages/DataAnalytics'
import CorporateUpskilling from './pages/CorporateUpskilling'
import GraduateInternship from './pages/GraduateInternship'
import CareerAccelerator from './pages/CareerAccelerator'
import Insights from './pages/Insights'
import Connect from './components/Connect'
import About from './pages/AboutPage'
import InsightsDetails from './pages/InsightDetail'

function App() {

  return (
    <>
    <Router>
      {/* ✅ No horizontal scroll, normal vertical scroll */}
      <div className="w-full min-h-screen overflow-x-hidden overflow-y-hidden relative">
      <ScrollToTop/>
    <Header/>
     <Routes>
        <Route path="/" element={
          <div>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <WhyChooseUs/>
      <Testimonials/>
      <StatsSection/>
      <ContactSection/>
      </div>}/>
      <Route path='/innovation' element={<Innovation/>}/>
      <Route path='/innovation/case-studies' element={<CaseStudiesPage/>}/>
      <Route path='/innovation-lab' element={<InnovationLab/>}/>
      <Route path='/solutions' element={<Solutions/>}/>
      <Route path='/trainings' element={<Trainings/>}/>
      <Route path='trainings/full-stack-development' element={<FullStackDevelopment/>}/>
      <Route path='/trainings/ai-ml' element={<AiAndMl/>}/>
      <Route path='/trainings/data-analytics' element={<DataAnalytics/>}/>
      <Route path='/trainings/corporate-upskilling' element={<CorporateUpskilling/>}/>
      <Route path='/trainings/graduate-internship' element={<GraduateInternship/>}/>
      <Route path='/trainings/career-accelerator' element={<CareerAccelerator/>}/>
      <Route path='/insights' element={<Insights/>}/>
      <Route path='/connect' element={<Connect/>}/>
      <Route path='/about-infovance' element={<About/>}/>
      <Route path='/insights-details' element={<InsightsDetails/>}/>
      </Routes>
      <Footer/>
      </div>
    </Router>
    </> 
  )
}

export default App
