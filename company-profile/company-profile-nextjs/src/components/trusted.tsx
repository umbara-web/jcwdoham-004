import React from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import Image from 'next/image';

export default function Trusted() {
  return (
    <>
      <section className='bg-background pb-2 md:pb-2'>
        <div className='group relative m-auto max-w-6xl px-6'>
          <div className='font-bold text-md md:text-2xl text-center'>
            <p>Trusted by Global Innovators & Leading Brands</p>
          </div>
          <div className='flex flex-col items-center md:flex-row'>
            <div className='relative py-16 md:w-full'>
              <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                <div className='flex'>
                  <Image
                    className='mx-auto h-[34px] lg:h-12 min-w-[98px] dark:filter dark:grayscale dark:brightness-90'
                    src='/adobe.svg'
                    alt='adobe-logo'
                    height='48'
                    width='133'
                  />
                </div>

                <div className='flex'>
                  <Image
                    className='mx-auto h-[34px] lg:h-12 min-w-[98px] dark:filter dark:grayscale dark:brightness-90'
                    src='/upwork.svg'
                    alt='upwork-logo'
                    height='48'
                    width='133'
                  />
                </div>

                <div className='flex'>
                  <Image
                    className='mx-auto h-[34px] lg:h-12 min-w-[98px] dark:filter dark:grayscale dark:brightness-90'
                    src='/zoom.svg'
                    alt='zoom-logo'
                    height='48'
                    width='133'
                  />
                </div>

                <div className='flex'>
                  <Image
                    className='mx-auto h-[34px] lg:h-12 min-w-[98px] dark:filter dark:grayscale dark:brightness-90'
                    src='/postman.svg'
                    alt='postman-logo'
                    height='48'
                    width='133'
                  />
                </div>
                <div className='flex'>
                  <Image
                    className='mx-auto h-[34px] lg:h-12 min-w-[98px] fdark:filter dark:grayscale dark:brightness-90'
                    src='/databricks.svg'
                    alt='databricks-logo'
                    height='48'
                    width='133'
                  />
                </div>

                <div className='flex'>
                  <Image
                    className='mx-auto h-[34px] lg:h-12 min-w-[98px] dark:filter dark:grayscale dark:brightness-90'
                    src='/airbnb.svg'
                    alt='airbnb-logo'
                    height='48'
                    width='133'
                  />
                </div>

                <div className='flex'>
                  <Image
                    className='mx-auto h-[34px] lg:h-12 min-w-[98px] dark:filter dark:grayscale dark:brightness-90'
                    src='/dropbox.svg'
                    alt='dropbox-logo'
                    height='48'
                    width='133'
                  />
                </div>

                <div className='flex'>
                  <Image
                    className='mx-auto h-[34px] lg:h-12 min-w-[98px] dark:filter dark:grayscale dark:brightness-90'
                    src='/paypal.svg'
                    alt='paypal-logo'
                    height='48'
                    width='133'
                  />
                </div>

                <div className='flex'>
                  <Image
                    className='mx-auto h-[34px] lg:h-12 min-w-[98px] dark:filter dark:grayscale dark:brightness-90'
                    src='/netflix.svg'
                    alt='netflix-logo'
                    height='48'
                    width='133'
                  />
                </div>
              </InfiniteSlider>

              <div className='bg-linear-to-r from-background absolute inset-y-0 left-0 w-20'></div>
              <div className='bg-linear-to-l from-background absolute inset-y-0 right-0 w-20'></div>
              <ProgressiveBlur
                className='pointer-events-none absolute left-0 top-0 h-full w-20'
                direction='left'
                blurIntensity={1}
              />
              <ProgressiveBlur
                className='pointer-events-none absolute right-0 top-0 h-full w-20'
                direction='right'
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
