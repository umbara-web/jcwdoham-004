// import AboutMe from './components/about-me';
import AboutMe from '@/components/about-me';
import FooterSection from './components/footer';
import { Header } from './components/header';
import HeroSection from './components/hero-section';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Skill from './components/skill';

function App() {
  return (
    <div className='font-quicksand'>
      <BrowserRouter>
        <Header />
        {/* <HeroSection /> */}
        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/about-me' element={<AboutMe />} />
        </Routes>
        <FooterSection />
      </BrowserRouter>
      {/* <AboutMe /> */}
      {/* <Skill /> */}
    </div>
  );
}

export default App;
