'use client';
import Link from 'next/link';
// import { Logo } from '@/components/logo';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';
import Image from 'next/image';

const menuItems = [
  // { name: 'Home', href: '/' },
  { name: 'About Us', href: '/' },
  { name: 'Service', href: '#service' },
  { name: 'Project', href: '#project' },
  { name: 'Team', href: '#team' },
  { name: 'Testimonial', href: '#testimonial' },
  { name: 'Blog List', href: '#blog' },
  { name: 'FAQ', href: '#faq' },
];

export const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className='bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl'
      >
        <div className='mx-auto max-w-6xl px-6 transition-all duration-300'>
          <div className='relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4'>
            <div className='flex w-full items-center justify-between gap-12 lg:w-auto'>
              <Link
                href='/'
                aria-label='home'
                className='flex items-center space-x-2'
              >
                {/* Logo  */}
                <Image src='/titik.png' alt='logo' width={26} height={28} />
                <Image
                  src='/koma.png'
                  alt='logo'
                  width={26}
                  height={28}
                  className='-ml-2'
                />
                {/* <Image src='/logo.svg' alt='logo' width={26} height={28} /> */}
                <span className='text-xl font-bold'>Umbara</span>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className='relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden'
              >
                <Menu className='in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200' />
                <X className='in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200' />
              </button>

              <div className='hidden lg:block mx-23'>
                <ul className='flex gap-8 text-sm font-bold'>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className='text-muted-foreground hover:text-primary hover:underline block duration-150'
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent'>
              <div className='lg:hidden'>
                <ul className='space-y-6 text-base font-bold'>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className='text-muted-foreground hover:text-accent-foreground block duration-150'
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit'>
                <Button
                  asChild
                  variant='outline'
                  size='sm'
                  className='inset-shadow-sm inset-shadow-gray-500/50'
                >
                  <Link href='#'>
                    <span className='font-bold'>Login</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size='sm'
                  className='inset-shadow-sm inset-shadow-white/100 dark:inset-shadow-black/80 dark:text-white'
                >
                  <Link href='#'>
                    <span className='font-bold'>Sign Up</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
