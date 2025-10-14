import AboutMe from './components/about-me';
import { Header } from './components/header';
import HeroSection from './components/hero-section';
import Skill from './components/skill';

function App() {
  return (
    <div className='font-quicksand'>
      <Header />
      <HeroSection />
      <AboutMe />
      <Skill />
    </div>
  );
}

export default App;
