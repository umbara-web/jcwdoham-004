import Trusted from '@/components/trusted';
import HeroSection from '@/components/hero-section';
import StatsSection from '@/components/stats';
// import Process from '@/components/ProcessSection';
// import Service from '@/components/ServiceSection';
// import Industry from '@/components/IndustrySection';
// import Portfolio from '@/components/PortfolioSection';
import Testimonial from '@/components/TestimonialSection';
import Qna from '@/components/QnaSection';
import ContactMe from '@/components/ContactMeSection';
import Footer from '@/components/Footer';

// import Teams from '@/components/teams';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Trusted />
      <StatsSection />
      {/* <Process /> */}
      {/* <Service /> */}
      {/* <Industry /> */}
      {/* <Portfolio /> */}
      <Testimonial />
      <Qna />
      <ContactMe />
      <Footer />
      {/* <Teams /> */}
    </>
  );
}
