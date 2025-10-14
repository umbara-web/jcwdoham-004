import Button from './ui/Button';
import { Download } from 'lucide-react';
export default function AboutMe() {
  return (
    <section className='py-2 md:py-4'>
      <div className='mx-auto max-w-6xl space-y-2 px-6 md:space-y-6'>
        <div className='space-y-2 text-center'>
          <h1 className='text-3xl font-bold lg:text-display-xl'>About Me</h1>
          <h6 className='mb-14 text-gray-600'>
            User Interface and User Experience
          </h6>
        </div>
        <div className='grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24'>
          <div className='relative mb-6 sm:mb-0'>
            <div className='bg-linear-to-b aspect-76/59 relative flex items-center justify-center rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700'>
              <img
                src='/src/assets/foto2.png'
                className='hidden rounded-[15px] dark:block'
                alt='illustration dark'
                width={300}
                height={200}
              />
              <img
                src='/src/assets/foto2.png'
                className='rounded-[15px] dark:hidden'
                alt='illustration light'
                width={300}
                height={200}
              />
            </div>
          </div>

          <div className='text-justify mt-16'>
            <h1 className='text-2xl font-bold text-primary'>Hello!</h1>
            <p className='text-gray-600 text-md'>
              My name is <span className='font-bold'>Debi Umbara</span>, and I
              specialize in web development using HTML, CSS, JS, TailwindCSS,
              React, and Next etc. I am a highly motivated and optimistic
              individual, dedicated to writing clear, concise, and robust code
              that is effective. I always strive to continuously learn and
              improve. I enjoy having my perspectives and beliefs challenged,
              allowing me to see the world from a new perspective. I emphasize
              core work principles such as punctuality, attention to detail, and
              clear communication.
            </p>
            <p></p>
            <div className='flex justify-center mt-6'>
              <Button variant='primary' className='rounded-xl text-md px-6'>
                <a href='#link'>
                  <span className='text-nowrap flex items-center justify-center gap-4'>
                    <Download className='w-5 h-5' /> Download CV
                  </span>
                </a>
              </Button>
            </div>
          </div>
          <div></div>

          {/* <div className='relative space-y-4'>
            <p className='text-muted-foreground'>
              Gemini is evolving to be more than just the models.{' '}
              <span className='text-accent-foreground font-bold'>
                It supports an entire ecosystem
              </span>{' '}
              — from products innovate.
            </p>
            <p className='text-muted-foreground'>
              It supports an entire ecosystem — from products to the APIs and
              platforms helping developers and businesses innovate
            </p>

            <div className='pt-6'>
              <blockquote className='border-l-4 pl-4'>
                <p>
                  Using TailsUI has been like unlocking a secret design
                  superpower. It's the perfect fusion of simplicity and
                  versatility, enabling us to create UIs that are as stunning as
                  they are user-friendly.
                </p>

                <div className='mt-6 space-y-3'>
                  <cite className='block font-medium'>John Doe, CEO</cite>
                  <img
                    className='h-5 w-fit dark:invert'
                    src='https://html.tailus.io/blocks/customers/nvidia.svg'
                    alt='Nvidia Logo'
                    height='20'
                    width='auto'
                  />
                </div>
              </blockquote>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
