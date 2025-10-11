import Trusted from '@/components/trusted';
import Header from './Header/Header';
import HeroSection from '@/components/hero-section';
import StatsSection from '@/components/stats';
// import About from '@/components/AboutSection/About';
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Trusted />
      <StatsSection />
      {/* <About /> */}
    </>
  );
}
