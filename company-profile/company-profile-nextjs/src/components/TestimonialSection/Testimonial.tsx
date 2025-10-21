import React from 'react';
import Typography, { Subtitle, Title } from '../ui/Typography';
import SectionWrapper from '../section-wrapper';
import { testimonials } from './Testimonial.constants';
import Image from '../ui/Image';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

const Testimonial: React.FC = () => {
  return (
    <SectionWrapper
      id='testimonials'
      className='flex flex-col py-8 gap-8 md:py-12 md:gap-12 lg:py-20 lg:gap-16 overflow-hidden relative'
    >
      <div className='flex flex-col gap-3 text-center mb-12 md:mb-16'>
        <Title>What Partners Say About Working With Us</Title>
        <Subtitle>Trusted voices. Real experiences. Proven results.</Subtitle>
      </div>

      <div id='review-slideshow' className='flex justify-center gap-4 md:gap-5'>
        <InfiniteSlider speedOnHover={20} speed={40} gap={80}>
          {testimonials.map((t) => (
            <div
              key={t.id}
              className='flex flex-col gap-4 px-4 pt-4 pb-12 rounded-2xl bg-base-50 dark:bg-base-950 border border-base-border dark:border-base-800 text-center relative z-10 w-[361px] md:w-[500px] lg:w-[594px] lg:px-6 lg:pt-6 lg:pb-12'
            >
              <div className='absolute max-w-12 md:max-w-16 -top-6 md:-top-8 z-50'>
                <Image
                  src={t.quoteIconSrc}
                  id='quote-icon'
                  alt=''
                  width={64}
                  height={64}
                />
              </div>

              <div className='rating-testimoni flex flex-col gap-3 items-center relative md:gap-4 lg:gap-4'>
                <Image
                  className='max-w-[100px] md:max-w-[136px]'
                  src={t.ratingSrc}
                  id='rating-icon'
                  alt=''
                  width={136}
                  height={24}
                />
                <Typography weight='semibold' size='sm'>
                  {t.quote}
                </Typography>
              </div>

              <div className='user-testimoni'>
                <Typography weight='semibold' size='sm'>
                  {t.name}
                </Typography>
                <Typography
                  weight='semibold'
                  size='sm'
                  className='text-primary'
                >
                  {t.role}
                </Typography>
              </div>
            </div>
          ))}
        </InfiniteSlider>

        <div className='bg-linear-to-r from-background absolute inset-y-0 left-0 w-12 md:w-20'></div>
        <div className='bg-linear-to-l from-background absolute inset-y-0 right-0 w-12 md:w-20'></div>
        <ProgressiveBlur
          className='pointer-events-none absolute left-0 top-0 h-full w-12 md:w-20'
          direction='left'
          blurIntensity={1}
        />
        <ProgressiveBlur
          className='pointer-events-none absolute right-0 top-0 h-full w-12 md:w-20'
          direction='right'
          blurIntensity={1}
        />
      </div>
    </SectionWrapper>
  );
};

export default Testimonial;
