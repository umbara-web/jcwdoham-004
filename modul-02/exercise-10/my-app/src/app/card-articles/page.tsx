import Image from 'next/image';
export default function Card() {
  return (
    <>
      <div className='container grid grid-cols-2 border border-gray-300 w-[1150px] h-auto mx-auto mt-10 rounded-md shadow-md'>
        <div className='grid grid-cols-1 gap-7 w-[600px] px-10 py-10'>
          <h2 className='font-bold text-3xl'>long established</h2>
          <p className='text-gray-500 font-normal text-base'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that....
          </p>
          <div className='flex gap-3 text-sm text-gray-500 justify-between mr-2'>
            <p>May 20th 2020</p>
            <a href='/articles' className='text-blue-500 hover:underline'>
              Read more
            </a>
          </div>
        </div>
        <div className=''>
          <Image
            src='/image 1.png'
            alt='Article Image'
            width={700}
            height={100}
            className='rounded-r-md'
          />
        </div>
      </div>
      <div className='container flex justify-center mx-auto w-[1150px] gap-8'>
        <div className='container grid grid-cols-1 border border-gray-300 w-[400px] h-auto mx-auto mt-10 rounded-md shadow-md'>
          <div className=''>
            <Image
              src='/image 2.png'
              alt='Article Image'
              width={600}
              height={100}
              className='rounded-t-md'
            />
          </div>
          <div className='grid grid-cols-1 gap-7 px-5 py-5'>
            <h2 className='font-bold text-xl'>long established</h2>
            <p className='text-gray-500 font-normal text-base'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </p>
            <div className='flex gap-3 text-sm text-gray-500 justify-between mr-4'>
              <p>May 20th 2020</p>
              <a href='/articles' className='text-blue-500 hover:underline'>
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className='container grid grid-cols-1 border border-gray-300 w-[400px] h-auto mx-auto mt-10 rounded-md shadow-md'>
          <div className=''>
            <Image
              src='/image 4.png'
              alt='Article Image'
              width={600}
              height={100}
              className='rounded-t-md'
            />
          </div>
          <div className='grid grid-cols-1 gap-7 px-5 py-5'>
            <h2 className='font-bold text-xl'>long established</h2>
            <p className='text-gray-500 font-normal text-base'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </p>
            <div className='flex gap-3 text-sm text-gray-500 justify-between mr-4'>
              <p>May 20th 2020</p>
              <a href='/articles' className='text-blue-500 hover:underline'>
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className='container grid grid-cols-1 border border-gray-300 w-[400px] h-auto mx-auto mt-10 rounded-md shadow-md'>
          <div className=''>
            <Image
              src='/image 5.png'
              alt='Article Image'
              width={600}
              height={100}
              className='rounded-t-md'
            />
          </div>
          <div className='grid grid-cols-1 gap-7 px-5 py-5'>
            <h2 className='font-bold text-xl'>long established</h2>
            <p className='text-gray-500 font-normal text-base'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </p>
            <div className='flex gap-3 text-sm text-gray-500 justify-between mr-4'>
              <p>May 20th 2020</p>
              <a href='/articles' className='text-blue-500 hover:underline'>
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='container grid grid-cols-2 border border-gray-300 w-[1150px] h-auto mx-auto mt-10 mb-10 rounded-md shadow-md items-center justify-center'>
        <div className='grid grid-cols-1 gap-7 w-[600px] px-20 py-10'>
          <h2 className='font-bold text-5xl'>What is Lorem Ipsum?</h2>
          <p className='text-gray-500 font-normal text-base'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that....
          </p>
          <div className='flex gap-3 text-sm text-gray-500 justify-between mr-4'>
            <p>May 20th 2020</p>
            <a href='/articles' className='text-blue-500 hover:underline'>
              Read more
            </a>
          </div>
        </div>
        <div className=''>
          <Image
            src='/image 7.png'
            alt='Article Image'
            width={700}
            height={100}
            className='rounded-r-md'
          />
        </div>
      </div>
    </>
  );
}
