import Image from 'next/image';
export default function HeroSection() {
  return (
    <div className='flex justify-center px-36 py-10 bg-gray-100'>
      <div className='flex flex-col mt-32 z-10'>
        <h1 className='text-4xl font-bold mb-4'>Welcome to My Website</h1>
        <p className='text-lg text-gray-600'>
          This is a simple hero section to showcase the main features of the
          website.
        </p>
      </div>
      <div>
        <Image src='/hero.svg' alt='Hero Image' width={600} height={400} />
      </div>
    </div>
  );
}
