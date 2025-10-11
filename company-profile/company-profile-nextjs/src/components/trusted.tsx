import React from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

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
                  <img
                    className='mx-auto h-5 w-fit dark:invert'
                    src='https://html.tailus.io/blocks/customers/nvidia.svg'
                    alt='Nvidia Logo'
                    height='20'
                    width='auto'
                  />
                </div>

                <div className='flex'>
                  <img
                    className='mx-auto h-4 w-fit dark:invert'
                    src='https://html.tailus.io/blocks/customers/column.svg'
                    alt='Column Logo'
                    height='16'
                    width='auto'
                  />
                </div>
                <div className='flex'>
                  <img
                    className='mx-auto h-4 w-fit dark:invert'
                    src='https://html.tailus.io/blocks/customers/github.svg'
                    alt='GitHub Logo'
                    height='16'
                    width='auto'
                  />
                </div>
                <div className='flex'>
                  <img
                    className='mx-auto h-5 w-fit dark:invert'
                    src='https://html.tailus.io/blocks/customers/nike.svg'
                    alt='Nike Logo'
                    height='20'
                    width='auto'
                  />
                </div>
                <div className='flex'>
                  <img
                    className='mx-auto h-5 w-fit dark:invert'
                    src='https://html.tailus.io/blocks/customers/lemonsqueezy.svg'
                    alt='Lemon Squeezy Logo'
                    height='20'
                    width='auto'
                  />
                </div>
                <div className='flex'>
                  <img
                    className='mx-auto h-4 w-fit dark:invert'
                    src='https://html.tailus.io/blocks/customers/laravel.svg'
                    alt='Laravel Logo'
                    height='16'
                    width='auto'
                  />
                </div>
                <div className='flex'>
                  <img
                    className='mx-auto h-7 w-fit dark:invert'
                    src='https://html.tailus.io/blocks/customers/lilly.svg'
                    alt='Lilly Logo'
                    height='28'
                    width='auto'
                  />
                </div>

                <div className='flex'>
                  <img
                    className='mx-auto h-6 w-fit dark:invert'
                    src='https://html.tailus.io/blocks/customers/openai.svg'
                    alt='OpenAI Logo'
                    height='24'
                    width='auto'
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
