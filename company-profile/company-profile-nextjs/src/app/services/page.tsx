import React from 'react';
import { Header } from '@/components/header';
import { Subtitle, Title } from '../../components/ui/Typography';
import Process from '@/components/ProcessSection';
import Service from '@/components/ServiceSection';
import Industry from '@/components/IndustrySection';
import Portfolio from '@/components/PortfolioSection';
import Footer from '@/components/Footer';
import Testimonial from '@/components/TestimonialSection';

function ServicesPage() {
  return (
    <>
      <Header />
      <section className='pt-20 md:pt-24 lg:pt-32'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='text-center mb-16'>
            <Title>Our Services</Title>
            <Subtitle>
              Comprehensive solutions to drive your business forward with
              cutting-edge technology and expert guidance.
            </Subtitle>
          </div>
        </div>
        <Process />
        <Service />
        <Industry />
        <Portfolio />
        <Testimonial />
      </section>
      <Footer />
    </>
  );
}

export default ServicesPage;
