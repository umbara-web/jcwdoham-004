import React from 'react';
import { Subtitle, Title } from '../components/ui/Typography';
import Image from 'next/image';

function TeamPreview() {
  return (
    <section className='py-10'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <Title>Meet Our Leadership Team</Title>
          <Subtitle>
            The visionaries driving our company`&apos;`s success
          </Subtitle>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-gray-100 dark:bg-base-950 p-6 rounded-lg shadow-lg text-center border border-base-300 dark:border-base-800'>
            <div className='w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center'>
              <Image
                src='https://randomuser.me/api/portraits/men/46.jpg'
                alt='jasper'
                width={220}
                height={220}
                className='rounded-full overflow-hidden'
              />
            </div>
            <h3 className='text-xl font-semibold mb-2'>Logan Hanson</h3>
            <p className='text-primary font-bold mb-2'>CEO & Founder</p>
            <p className='text-gray-600 text-sm'>
              Visionary leader with 15+ years in technology and business
              strategy.
            </p>
          </div>
          <div className='bg-gray-100 dark:bg-base-950 p-6 rounded-lg shadow-lg text-center border border-base-300 dark:border-base-800'>
            <div className='w-24 h-24 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center'>
              <Image
                src='https://randomuser.me/api/portraits/women/32.jpg'
                alt='jasper'
                width={220}
                height={220}
                className='rounded-full overflow-hidden'
              />
            </div>
            <h3 className='text-xl font-semibold mb-2'>Noelle Mills</h3>
            <p className='text-primary font-bold mb-2'>CTO</p>
            <p className='text-gray-600 text-sm'>
              Technical expert specializing in scalable architecture and
              innovation.
            </p>
          </div>
          <div className='bg-gray-100 dark:bg-base-950 p-6 rounded-lg shadow-lg text-center border border-base-300 dark:border-base-800'>
            <div className='w-24 h-24 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center'>
              <Image
                src='https://randomuser.me/api/portraits/men/95.jpg'
                alt='jasper'
                width={220}
                height={220}
                className='rounded-full overflow-hidden'
              />
            </div>
            <h3 className='text-xl font-semibold mb-2'>Virgil Gonzalez</h3>
            <p className='text-primary font-bold mb-2'>Head of Design</p>
            <p className='text-gray-600 text-sm'>
              Creative director focused on user experience and brand identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamPreview;
