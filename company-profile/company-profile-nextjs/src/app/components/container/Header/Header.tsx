'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DarkModeToggle from '@/components/ui/DarkModeToggle';

export default function Header() {
  return (
    <div className='sticky top-0 flex mx-auto py-6 items-center justify-between border-b-2 border-gray-300'>
      <Link href={'/'} className='flex gap-2'>
        <Image src='/logo.svg' alt='logo' width={26} height={28} />
        <span className='text-xl font-bold'>Umbara</span>
      </Link>
      <div className='hidden gap-5 lg:flex font-semibold'>
        <Link href={'/'} className='hover:underline hover:text-primary'>
          Home
        </Link>
        <Link href={'/about'} className='hover:underline hover:text-primary'>
          About Us
        </Link>
        <Link href={'/service'} className='hover:underline hover:text-primary'>
          Service
        </Link>
        <Link href={'/team'} className='hover:underline hover:text-primary'>
          Team
        </Link>
        <Link href={'/blog'} className='hover:underline hover:text-primary'>
          Blog
        </Link>
      </div>
      <div className='hidden lg:flex items-center gap-4'>
        <DarkModeToggle />
        <Link href={'/contact'}>
          <Button className='w-full'>Contact Us</Button>
        </Link>
      </div>
      <div className='lg:hidden cursor-pointer hover:text-primary'>
        <Menu />
        {/* <X /> */}
      </div>
    </div>
  );
}
