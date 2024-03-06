'use client'

import Image from 'next/image';
import Head from 'next/head';
import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';

const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

export default function Home() {
  const parallax = useRef(null);
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
    <main>
      <Head>
        <title>Arnie's Hockey Box</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#010101' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#010101' }} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
            backgroundColor: '#010101'
          }}
        >
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex items-center justify-center">
              <motion.img
                src="/arniesletter.png"
                alt="Arnies"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: -200 }}
                transition={{ duration: 1 }}
                width={400}
                height={200}
              />
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: -180, x: -65 }}
                transition={{ duration: 1 }}
                className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-20 mx-0"
              >
                Hockey<span className="text-brand">Box</span>
              </motion.h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: -250 }}
                transition={{ duration: 1 }}
                className="text-xl md:text-2xl lg:text-3xl text-white mb-8 text-center"
              >
                Your Ultimate Hockey Supply Subscription
              </motion.p>
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, y: -220 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="bg-white text-brand py-2 px-6 rounded-full font-semibold text-xl hover:bg-secondary hover:text-brand text-center"
              >
                Subscribe Now
              </motion.button>
            </div>
          </div>

        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={-0.3} sticky={{ start: 0.75, end: 0.8 }} style={{ pointerEvents: 'none', opacity: 0.6 }}>
          <img src='/items/flying-puck.png' style={{ width: '15%', marginLeft: '59%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.9} speed={0.1} style={{ opacity: 0.65 }}>
          <img src='/players/player10.png' style={{ display: 'block', width: '20%', marginLeft: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.98} speed={0.3} style={{ opacity: 0.65 }}>
          <img src='/players/player14.png' style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.1} speed={0.9} style={{ opacity: 0.6 }}>
          <img src='/players/player3.png' style={{ display: 'block', width: '20%', marginLeft: '65%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={0.3} style={{ opacity: 0.6 }}>
          <img src='/players/referee2.png' style={{ display: 'block', width: '18%', marginLeft: '7%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={0.4} style={{ opacity: 0.8 }}>
          <img src='/box/box1.png' style={{ display: 'block', width: '15%', marginLeft: '8.5%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.9} speed={0.6} style={{ opacity: 0.6 }}>
          <img src='/players/player6.png' style={{ display: 'block', width: '23%', marginLeft: '10%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.85} speed={0.6} style={{ opacity: 0.6 }}>
          <img src='/players/player12.png' style={{ display: 'block', width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.1} speed={0.5} style={{ opacity: 0.6 }}>
          <img src='/players/player7.png' style={{ display: 'block', width: '20%', marginLeft: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.4} style={{ opacity: 0.6 }}>
          <img src='/players/player11.png' style={{ display: 'block', width: '15%', marginLeft: '75%' }} />

        </ParallaxLayer>

        <ParallaxLayer
          offset={2.25}
          speed={0.3}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src='/items/zamboni.png' style={{ width: '15%', marginLeft: '0%', opacity: 0.4 }} />
          <img src='/box/box2.png' style={{ width: '30%', marginLeft: '58%' }} className='rotate-100' />
        </ParallaxLayer>

        {/* First Part of the landing page */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src='/box/box3.png' style={{ width: '25%' }} className='rolling-image' />
          <img src='/players/player1.png' style={{ width: '28%', marginLeft: '18%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.6}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src='/players/player4.png' style={{ width: '30%', opacity: 0.9 }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.55}
          speed={0.2}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}>
          <img src='/box/puck-brand.png' style={{ width: '15%', opacity: 0.8, marginLeft: '12%' }} className='rolling-image2' />
        </ParallaxLayer>
      </Parallax>
    </main>
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
