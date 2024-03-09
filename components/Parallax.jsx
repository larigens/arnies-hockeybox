import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Image from "next/image";

export default function ParallaxDiv({ url }) {
    const parallax = useRef(null);
    
    return (
        <Parallax ref={parallax} pages={2}>
            <ParallaxLayer
                offset={0}
                speed={0}
                factor={2}
                style={{
                    backgroundImage: url('stars', true),
                    backgroundSize: 'cover',
                    backgroundColor: '#010101'
                }}
            />

            <ParallaxLayer offset={0} speed={-0.3} sticky={{ start: 0, end: 0.15 }} className='pointer-events-none opacity-70'>
                <Image src='/items/flying-puck.png' width={200} height={250} style={{ marginLeft: '14%', transform: 'rotate(-20deg)' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={0.1} speed={0.3} className='opacity-65'>
                <Image src='/players/player2.png' width={350} height={350} className='block' style={{ marginLeft: '5%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={0.3} speed={0.6} className='opacity-65'>
                <Image src='/players/goalie1.png' width={350} height={350} className='block' style={{ marginLeft: '75%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={0.4} speed={0.2} className='opacity-65'>
                <Image src='/players/referee2.png' width={220} height={220} className='block' style={{ marginLeft: '45%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={0.65} speed={0.3} className='opacity-85'>
                <h3 className='block text-2xl md:text-3xl lg:text-4xl text-white' style={{ marginLeft: '43%' }}> Why Choose Us?</h3>
            </ParallaxLayer>

            <ParallaxLayer offset={0.75} speed={0.3} className='opacity-85' style={{ marginLeft: '15%' }}>
                <div className='mx-2 my-4'>
                    <div className='flex items-center mb-4'>
                        <Image src='/icons/hockey-puck.png' width={30} height={30} className='white-img mr-2' />
                        <h3 className='text-xl font-semibold'>High-Quality Gear</h3>

                    </div>
                    <p className='text-white'>We source the best hockey equipment from top brands to ensure you get the highest quality gear.</p>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.85} speed={0.3} className='opacity-85' style={{ marginLeft: '15%' }}>
                <div className='mx-2 my-4'>
                <div className='flex items-center mb-4'>
                        <Image src='/icons/hockey-puck.png' width={30} height={30} className='white-img mr-2' />
                    <h3 className='text-xl font-semibold '>Convenient Delivery</h3>
                    </div>
                    <p className='text-white'>Your hockey box will be delivered straight to your doorstep every month, hassle-free.</p>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.95} speed={0.3} className='opacity-85' style={{ marginLeft: '15%' }}>
                <div className='mx-2 mt-4 mb-0'>
                <div className='flex items-center mb-4'>
                        <Image src='/icons/hockey-puck.png' width={30} height={30} className='white-img mr-2' />
                    <h3 className='text-xl font-semibold'>Customization Options</h3>
                    </div>
                    <p className='text-white'>Tailor your subscription to your preferences with customization options available.</p>
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={0.65} speed={0.4}>
                <Image src='/box/box1.png' width={400} height={400} className='flex' style={{ marginLeft: '68%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.5} className='opacity-65'>
                <Image src='/players/player3.png' width={250} height={250} className='block' style={{ marginLeft: '65%' }} />
            </ParallaxLayer>
          
            <ParallaxLayer offset={1.5} speed={0.6} className='opacity-75'>
                <Image src='/players/player4.png' width={320} height={320} className='block' style={{ marginLeft: '10%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.3} speed={0.6} className='opacity-65'>
                <Image src='/players/player5.png' width={200} height={200} className='block' style={{ marginLeft: '35%' }} />
            </ParallaxLayer>

            <ParallaxLayer
                offset={1.4}
                speed={0.3}
                className='pointer-events-none flex items-center justify-center'>
                <Image src='/box/box2.png' width={300} height={300} style={{ marginLeft: '85%' }} />
            </ParallaxLayer>
        </Parallax>
    )
}