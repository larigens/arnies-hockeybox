'use client'

import Head from 'next/head';
import Image from 'next/image';
import Nav from '@/components/Nav';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    controls.start({ scaleX: scrollY / 100 });
  }, [scrollY]);

  return (
    <div>
      <Head>
        <title>Arnie's Hockey Box</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-brand">
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("/bg/1.png")',
                transform: `translateY(-${scrollY * 0.5}px)`,
              }}
            ></div>
          </div>
          <div className="relative z-20 text-center">
            <Image
              src='/homepage.png'
              alt='hockey sticks and puck'
              className='slide-right'
              width={240}
              height={160}
              priority
            />
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-4"
            >
              Welcome to Arnie's Hockey Box
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-xl md:text-2xl lg:text-3xl text-white mb-8"
            >
              Your Ultimate Hockey Supply Subscription
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="bg-white text-gray-900 py-2 px-6 rounded-full font-semibold text-xl hover:bg-gray-100"
            >
              Subscribe Now
            </motion.button>
          </div>
        </section>
      </main>
      <Nav />
    </div>
  );
};



// import Hero from '@/components/Hero';
// export default function Home() {

//   return (
//     <div className='bg-white py-4'>
//       <div className='flex items-center justify-center'>
//         <Image
//           src='/homepage.png'
//           alt='hockey sticks and puck'
//           className='slide-right'
//           width={240}
//           height={160}
//           priority
//         />
//         <Hero />
//       </div>

//       <section className='flex flex-col items-center justify-center bg-brand p-8 m-20 rounded-2xl'>
//         <h2 className='text-3xl font-bold mb-8 pb-4'>Why Choose Us?</h2>
//         <div className='flex justify-center items-center'>
//           <div className='mx-2 my-4 border-r'>
//             <h3 className='text-xl font-semibold mb-4'>High-Quality Customer Service</h3>
//             <p className='text-white'>We're dedicated to serving you around the clock. Whether it's day or night, whenever you have questions, don't hesitate to reach out. We guarantee a response within 24 hours.</p>
//           </div>
//           <div className='mx-2 my-4 border-r'>
//             <h3 className='text-xl font-semibold mb-4'>Convenient Delivery</h3>
//             <p className='text-white'>Your hockey box will be delivered straight to your doorstep every month, hassle-free.</p>
//           </div>
//           <div className='mx-2 my-4'>
//             <h3 className='text-xl font-semibold mb-4'>Customization Options</h3>
//             <p className='text-white'>Tailor your subscription to your preferences with customization options available.</p>
//           </div>
//         </div>
//       </section>
//     </div>

//   );
// }
