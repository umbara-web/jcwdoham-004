// import Header from './header/page';
// import Footer from './footer/page';
// import HeroSection from './hero-section/page';

// import { HeroHeader } from '@/components/header';
import Features from '@/components/features-4';
import FooterSection from '@/components/footer';
import HeroSection from '@/components/hero-section';
import IntegrationsSection from '@/components/integrations-7';

// import CardArticles from './card-articles/page';
export default function Home() {
  return (
    <>
      {/* <Header /> */}
      {/* <HeroSection /> */}
      {/* <CardArticles /> */}
      {/* <Footer /> */}
      {/* <HeroHeader /> */}
      <HeroSection />
      <Features />
      <IntegrationsSection />
      <FooterSection />
    </>
  );
}
