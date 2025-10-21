import React from 'react';
import Image from 'next/image';
import { Subtitle, Title } from '../components/ui/Typography';

function Teams() {
  return (
    <div className='mx-auto max-w-6xl py-8 gap-8 md:py-12 md:gap-12 lg:py-20 lg:gap-16'>
      <div className='flex flex-col gap-3 text-center mb-12 md:mb-16'>
        <Title>Meet the Team</Title>
        <Subtitle>A group of future-ready tech makers.</Subtitle>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-14'>
        <div className='flex flex-col gap-5 text-center items-center'>
          <Image
            src='https://randomuser.me/api/portraits/men/29.jpg'
            alt='jasper'
            width={220}
            height={220}
            className='rounded-full overflow-hidden'
          />
          <h5 className='font-bold text-xl'>Isaac Jensen</h5>
          <p className='font-regular text-md text-base-500'>Project Manager</p>
        </div>
        <div className='flex flex-col gap-5 text-center items-center'>
          <Image
            src='https://randomuser.me/api/portraits/men/32.jpg'
            alt='alex'
            width={220}
            height={220}
            className='rounded-full overflow-hidden'
          />
          <h5 className='font-bold text-xl'>Theodore Robinson</h5>
          <p className='font-regular text-md text-base-500'>
            Full-stack Developer
          </p>
        </div>
        <div className='flex flex-col gap-5 text-center items-center'>
          <Image
            src='https://randomuser.me/api/portraits/women/64.jpg'
            alt='mario'
            width={220}
            height={220}
            className='rounded-full overflow-hidden'
          />
          <h5 className='font-bold text-xl'>Gertrude Sanchez</h5>
          <p className='font-regular text-md text-base-500'>UI/UX Designer</p>
        </div>
        <div className='flex flex-col gap-5 text-center items-center'>
          <Image
            src='https://randomuser.me/api/portraits/men/37.jpg'
            alt='kim'
            width={220}
            height={220}
            className='rounded-full overflow-hidden'
          />
          <h5 className='font-bold text-xl'>Jim Hayes</h5>
          <p className='font-regular text-md text-base-500'>Data Scientist</p>
        </div>
      </div>
    </div>
  );
}

export default Teams;
