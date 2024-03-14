import Workflow from './components/Workflow'
import FeatureSection from './components/FeatureSection'
import HeroSection from './components/HeroSection'
import NavbarComponent from './components/NavbarComponent'
import NavbarComponent2 from './components/NavbarComponent2'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavbarComponent /> 
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>

    </>
  )
}

export default App
