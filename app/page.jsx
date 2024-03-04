'use client'

import Image from 'next/image';

export default function Home() {

  return (
    <div className='bg-white py-4'>
      <div className='flex items-center justify-center bg-brand p-8 mx-20 rounded-2xl'>
        <Image
          src='/homepage.png'
          alt='hockey sticks and puck'
          width={240}
          height={160}
          priority
        />

        <section className='text-white py-20 mx-4'>
          <div className='container text-center'>
            <h1 className='text-4xl font-bold mb-4'>Get Your Hockey Supply Delivered Monthly</h1>
            <p className='text-lg mb-8'>Discover the joy of receiving premium hockey supply every month with our subscription box.</p>
            <a href='#' className='bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-200 hover:text-gray-900'>Subscribe Now</a>
          </div>
        </section>
      </div>

      <section className='flex flex-col items-center justify-center bg-brand p-8 m-20 rounded-2xl'>
        <h2 className='text-3xl font-bold mb-8 pb-4'>Why Choose Us?</h2>
        <div className='flex justify-center items-center'>
          <div className='mx-2 my-4 border-r'>
            <h3 className='text-xl font-semibold mb-4'>High-Quality Gear</h3>
            <p className='text-white'>We source the best hockey equipment from top brands to ensure you get the highest quality gear.</p>
          </div>
          <div className='mx-2 my-4 border-r'>
            <h3 className='text-xl font-semibold mb-4'>Convenient Delivery</h3>
            <p className='text-white'>Your hockey box will be delivered straight to your doorstep every month, hassle-free.</p>
          </div>
          <div className='mx-2 my-4'>
            <h3 className='text-xl font-semibold mb-4'>Customization Options</h3>
            <p className='text-white'>Tailor your subscription to your preferences with customization options available.</p>
          </div>
        </div>
      </section>
    </div>

  );
}
