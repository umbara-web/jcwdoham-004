'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Header } from './header';

export default function HeroSection() {
  return (
    <>
      <Header />
      <main className=''>
        <section>
          <div className='pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44'>
            <div className='relative mx-auto flex max-w-6xl flex-col px-6 lg:block'>
              <div className='mx-auto max-w-lg text-center lg:z-20 lg:ml-0 lg:w-6xlxl lg:text-left'>
                <h1 className='mt-8 max-w-2xl text-4xl font-bold md:text-5xl lg:mt-16 xl:text-display-2xl'>
                  Your Tech Partner for{' '}
                  <span className='text-primary'>Smarter Growth</span>
                </h1>
                <p className='mt-8 max-w-2xl text-pretty text-lg'>
                  We deliver tailored IT solutions to help you scale with speed
                  and confidence.
                </p>

                <div className='mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start'>
                  <Button
                    asChild
                    size='lg'
                    className='px-16 text-base inset-shadow-sm rounded-full inset-shadow-white/100 dark:inset-shadow-black/80 dark:text-white'
                  >
                    <Link href='#link'>
                      <span className='text-nowrap font-bold'>
                        Let&apos;s Talk
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                className='-z-10 order-first ml-auto h-56 w-full object-cover invert sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0'
                src='https://ik.imagekit.io/lrigu76hy/tailark/abstract-bg.jpg?updatedAt=1745733473768'
                alt='Abstract Object'
                height='4000'
                width='3000'
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
