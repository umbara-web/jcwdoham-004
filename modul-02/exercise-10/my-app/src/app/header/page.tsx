import Link from 'next/link';

export default function Header() {
  return (
    <div className='sticky top-0 flex mx-auto h-10 px-32 py-10 items-center justify-between border-b-2 border-gray-300'>
      <Link href={'/'}>
        <span className='text-2xl font-bold text-red-700'>MY WEBSITE</span>
      </Link>
      <div className='flex gap-5'>
        <Link href={'/'} className='hover:bg-gray-200 px-3 py-2 rounded-full'>
          Home
        </Link>
        <Link
          href={'/about'}
          className='hover:bg-gray-200 px-3 py-2 rounded-full'
        >
          About
        </Link>
        <Link
          href={'/articles'}
          className='hover:bg-gray-200 px-3 py-2 rounded-full'
        >
          Articles
        </Link>
        <Link
          href={'/contact'}
          className='hover:bg-gray-200 px-3 py-2 rounded-full'
        >
          Contact
        </Link>
      </div>
      <div className='flex gap-5'>
        <Link
          href={'/login'}
          className='hover:bg-gray-200 px-3 py-2 rounded-md cursor-pointer'
        >
          Login
        </Link>
        <Link
          href={'/register'}
          className='hover:bg-gray-200 px-3 py-2 rounded-md cursor-pointer'
        >
          Register
        </Link>
      </div>
    </div>
  );
}
