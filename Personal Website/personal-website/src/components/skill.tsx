import React from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

const Skill: React.FC = () => {
  return (
    <>
      <section className='bg-background pb-2 md:pb-2'>
        <div className='group relative m-auto max-w-6xl px-6'>
          <div className='font-bold text-3xl lg:text-display-xl text-center'>
            <p>Skill</p>
          </div>
          <div className='flex flex-col items-center justify-center md:flex-row'>
            <div className='relative py-16 md:w-full'>
              <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                <div className='flex gap-2 items-center justify-center'>
                  <img
                    className='mx-auto h-[34px] lg:h-7 min-w-7 dark:filter dark:grayscale dark:brightness-90'
                    src='/src/assets/html.png'
                    alt='html-logo'
                    height='48'
                    width='48'
                  />
                  <span className='text-amber-600 font-bold dark:filter dark:grayscale dark:brightness-90'>
                    HTML
                  </span>
                </div>

                <div className='flex gap-1.5 items-center justify-center'>
                  <img
                    className='mx-auto h-[34px] lg:h-7 min-w-7 dark:filter dark:grayscale dark:brightness-90'
                    src='/src/assets/css.png'
                    alt='css-logo'
                    height='48'
                    width='48'
                  />
                  <span className='text-blue-400 font-bold dark:filter dark:grayscale dark:brightness-90'>
                    CSS
                  </span>
                </div>

                <div className='flex gap-2 items-center justify-center'>
                  <img
                    className='mx-auto h-[34px] lg:h-7 min-w-7 dark:filter dark:grayscale dark:brightness-90'
                    src='/src/assets/js.png'
                    alt='javascript-logo'
                    height='48'
                    width='48'
                  />
                  <span className='text-yellow-400 font-bold dark:filter dark:grayscale dark:brightness-90'>
                    Javascript
                  </span>
                </div>

                <div className='flex'>
                  <img
                    className='mx-auto h-7 lg:h-10 min-w-24 dark:filter dark:grayscale dark:brightness-90'
                    src='/src/assets/react.png'
                    alt='react-logo'
                    height='48'
                    width='133'
                  />
                </div>

                <div className='flex'>
                  <img
                    className='mx-auto h-12 lg:h-12 min-w-28 dark:filter dark:invert-70'
                    src='/src/assets/next.png'
                    alt='next-logo'
                    height='68'
                    width='133'
                  />
                </div>

                <div className='flex'>
                  <img
                    className='mx-auto h-[34px] lg:h-12 min-w-[98px] dark:filter dark:grayscale dark:brightness-90'
                    src='/src/assets/postman.svg'
                    alt='postman-logo'
                    height='48'
                    width='133'
                  />
                </div>
                <div className='flex gap-2 justify-center items-center'>
                  <img
                    className='mx-auto h-[34px] lg:h-7 min-w-7 dark:filter dark:grayscale dark:brightness-90'
                    src='/src/assets/tailwind.svg'
                    alt='tailwind-logo'
                    height='48'
                    width='48'
                  />
                  <span className='font-bold dark:filter dark:invert-40'>
                    tailwindcss
                  </span>
                </div>

                <div className='flex'>
                  <img
                    className='mx-auto h-[34px] lg:h-10 min-w-[98px] dark:filter dark:grayscale dark:brightness-90'
                    src='/src/assets/angular.png'
                    alt='angular-logo'
                    height='48'
                    width='133'
                  />
                </div>

                <div className='flex'>
                  <img
                    className='mx-auto h-[34px] lg:h-12 min-w-[98px] dark:filter dark:grayscale dark:brightness-90'
                    src='/src/assets/node-js.png'
                    alt='node-logo'
                    height='48'
                    width='133'
                  />
                </div>

                <div className='flex'>
                  <img
                    className='mx-auto h-[34px] lg:h-12 min-w-[98px] dark:filter dark:invert-30'
                    src='/src/assets/django.png'
                    alt='node-logo'
                    height='48'
                    width='133'
                  />
                </div>

                <div className='flex'>
                  <img
                    className='mx-auto h-[34px] lg:h-12 min-w-[98px] dark:filter dark:grayscale dark:brightness-90'
                    src='/src/assets/ruby.png'
                    alt='ruby-logo'
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
};

export default Skill;
