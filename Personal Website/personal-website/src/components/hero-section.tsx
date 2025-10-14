import React from 'react';
import Button from '@/components/ui/Button';
// import { Header } from './header';

const HeroSection: React.FC = () => {
  return (
    <>
      <section>
        <div className='pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44'>
          <div className='relative mx-auto flex max-w-6xl flex-col px-6 lg:block'>
            <div className='mx-auto max-w-2xl text-center lg:z-20 lg:ml-0 lg:w-6xl lg:text-left'>
              <h1 className='mt-8 text-xs font-semibold md:text-base lg:mt-16 xl:text-2xl text-base-500'>
                Hai I am
              </h1>
              <h1 className='text-sm font-extrabold md:text-lg xl:text-3xl'>
                DEBI UMBARA
              </h1>
              <h1 className='text-primary text-2xl font-extrabold md:text-4xl xl:text-5xl py-6'>
                Full-Stack Web Developer
              </h1>
              <p className='max-w-2xl text-pretty text-lg text-base-600'>
                Building scalable and high-performance web solutions for your
                business needs.
              </p>

              <div className='mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start'>
                <Button
                  variant='primary'
                  className='px-24 text-lg inset-shadow-sm rounded-full inset-shadow-white/100 dark:inset-shadow-black/80 dark:text-white'
                >
                  <a href='#link'>
                    <span className='text-nowrap font-bold'>
                      Let&apos;s Talk
                    </span>
                  </a>
                </Button>
              </div>
            </div>
            <img
              className='-z-10 order-first mx-auto object-cover lg:absolute lg:inset-0 md:size-2/6 lg:inset-y-0 lg:-right-170 lg:-top-42 lg:order-last lg:h-[600px] lg:object-contain dark:mix-blend-lighten dark:invert-0'
              src='/src/assets/foto.png'
              alt='Abstract Object'
              height='100'
              width='150'
            />
            {/* <img
                className='-z-10 order-first ml-auto h-56 w-full object-cover grayscale sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-20 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0'
                src='/src/assets/foto-gw.png'
                alt='Abstract Object'
                height='4000'
                width='3000'
              /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
