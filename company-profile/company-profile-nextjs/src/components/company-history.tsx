import React from 'react';
import { Title } from '../components/ui/Typography';

function CompanyHistory() {
  return (
    <section className='py-2'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-3 text-center mb-12 md:mb-16'>
          <Title> Our Story</Title>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div>
            <div className='space-y-4 text-justify indent-8 text-black dark:text-base-600'>
              <p>
                Founded in 2013, Bloxs began as a small team of passionate
                developers with a vision to revolutionize how businesses
                approach digital transformation. What started as a garage
                operation has grown into a full-service technology company
                serving clients worldwide.
              </p>
              <p>
                Our journey has been marked by continuous innovation and a
                commitment to excellence. We`&apos;`ve helped hundreds of
                businesses modernize their operations, launch successful digital
                products, and achieve sustainable growth in the digital age.
              </p>
              <p>
                Today, we continue to push boundaries, embracing new
                technologies and methodologies to deliver cutting-edge solutions
                that drive real business value.
              </p>
            </div>
          </div>
          <div className='bg-gray-100 dark:bg-base-950 p-8 rounded-3xl border border-base-300 dark:border-base-800'>
            <h3 className='text-2xl font-semibold mb-6'>Key Milestones</h3>
            <div className='space-y-4'>
              <div className='flex items-start'>
                <div className='bg-primary text-white rounded-2xl w-8 h-8 flex items-center justify-center mr-4 mt-1'>
                  <span className='text-sm font-bold'>2013</span>
                </div>
                <div>
                  <h4 className='font-semibold'>Company Founded</h4>
                  <p className='text-gray-600'>
                    Started with a team of 3 passionate developers
                  </p>
                </div>
              </div>
              <div className='flex items-start'>
                <div className='bg-primary text-white rounded-2xl w-8 h-8 flex items-center justify-center mr-4 mt-1'>
                  <span className='text-sm font-bold'>2015</span>
                </div>
                <div>
                  <h4 className='font-semibold'>First 100 Clients</h4>
                  <p className='text-gray-600'>
                    Expanded our services and client base
                  </p>
                </div>
              </div>
              <div className='flex items-start'>
                <div className='bg-primary text-white rounded-2xl w-8 h-8 flex items-center justify-center mr-4 mt-1'>
                  <span className='text-sm font-bold'>2018</span>
                </div>
                <div>
                  <h4 className='font-semibold'>International Expansion</h4>
                  <p className='text-gray-600'>
                    Opened offices in Europe and Asia
                  </p>
                </div>
              </div>
              <div className='flex items-start'>
                <div className='bg-primary text-white rounded-2xl w-8 h-8 flex items-center justify-center mr-4 mt-1'>
                  <span className='text-sm font-bold'>2023</span>
                </div>
                <div>
                  <h4 className='font-semibold'>500+ Projects Completed</h4>
                  <p className='text-gray-600'>
                    Celebrating a decade of innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyHistory;
