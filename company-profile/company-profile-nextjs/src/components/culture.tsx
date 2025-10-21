import React from 'react';
import { Subtitle, Title } from '../components/ui/Typography';

function Culture() {
  return (
    <section className='py-10'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <Title>Our Culture & Values</Title>
          <Subtitle>The principles that guide everything we do</Subtitle>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='text-center'>
            <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-3xl'>🚀</span>
            </div>
            <h3 className='text-xl font-semibold mb-2'>Innovation</h3>
            <p className='text-gray-600'>
              We embrace new technologies and creative solutions to solve
              complex problems.
            </p>
          </div>
          <div className='text-center'>
            <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-3xl'>🤝</span>
            </div>
            <h3 className='text-xl font-semibold mb-2'>Collaboration</h3>
            <p className='text-gray-600'>
              We believe in the power of teamwork and open communication.
            </p>
          </div>
          <div className='text-center'>
            <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-3xl'>🎯</span>
            </div>
            <h3 className='text-xl font-semibold mb-2'>Excellence</h3>
            <p className='text-gray-600'>
              We strive for the highest quality in everything we deliver.
            </p>
          </div>
          <div className='text-center'>
            <div className='bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-3xl'>🌱</span>
            </div>
            <h3 className='text-xl font-semibold mb-2'>Growth</h3>
            <p className='text-gray-600'>
              We invest in our people and continuously improve our processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Culture;
