import React from 'react';
import { Header } from '@/components/header';
import { Subtitle, Title } from '../../components/ui/Typography';
import CompanyHistory from '@/components/company-history';
import TeamPreview from '@/components/team-preview';
import Culture from '@/components/culture';
import Footer from '@/components/Footer';
import Teams from '@/components/teams';

function About() {
  return (
    <>
      <Header />
      <section className='pt-20 md:pt-24 lg:pt-32'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='text-center mb-16'>
            <Title>About Us</Title>
            <Subtitle>
              Learn about our journey, our team, and the values that drive us to
              deliver exceptional results.
            </Subtitle>
          </div>
        </div>
        <CompanyHistory />
        <TeamPreview />
        <Teams />
        <Culture />
      </section>
      <Footer />
    </>
  );
}

export default About;
