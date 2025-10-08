import Header from './header/page';
import Footer from './footer/page';
import HeroSection from './hero-section/page';
import CardArticles from './card-articles/page';
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <CardArticles />
      <Footer />
    </>
  );
}
