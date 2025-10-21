import React from 'react';
import Typography, { Subtitle, Title } from '../ui/Typography';
import { services } from './Service.constants';
import SectionWrapper from '../section-wrapper';
import Image from 'next/image';

const Service: React.FC = () => {
  return (
    <SectionWrapper
      id='service'
      className='flex flex-col py-8 gap-10 lg:py-18 lg:gap-16'
    >
      <div className='flex flex-col gap-3 text-center mb-16'>
        <Title>Smart IT Solutions That Grow With You</Title>
        <Subtitle>
          Tailored tech to boost efficiency, security, and results.
        </Subtitle>
      </div>

      {/* <!-- SERIVICE ROW --> */}
      <div className='grid grid-cols-1 gap-10 lg:grid-cols-3'>
        {services.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className='relative card-service bg-base-50 dark:bg-base-950 border border-base-border dark:border-base-800 py-12 px-5 flex flex-col gap-5 rounded-2xl'
          >
            <Image
              src={icon}
              className='h-16 w-16 absolute -top-8'
              id={title}
              alt={title}
              width={64}
              height={64}
            />
            <div className='text-service flex flex-col gap-1 relative'>
              <Typography weight='bold' size='md'>
                {title}
              </Typography>
              <Typography weight='normal' size='sm'>
                {description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Service;
