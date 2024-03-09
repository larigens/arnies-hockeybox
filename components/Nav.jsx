'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react';

export default function Nav() {
    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState(null);
    const navlinks = [
        {
            id: 1,
            name: 'One-Timer',
            icon: 'skates.png',
            href: '/one-timer',
            current: pathname === '/one-timer'
        },
        {
            id: 2,
            name: 'Defense pinching',
            icon: 'defensive.png',
            href: '/defense-pinching',
            current: pathname === '/defense-pinching'
        },
        {
            id: 3,
            name: 'Glove Save',
            icon: 'gloves.png',
            href: '/glove-save',
            current: pathname === '/glove-save'
        },
        {
            id: 4,
            name: 'Stickhandling',
            icon: 'hockey.png',
            href: '/stickhandling',
            current: pathname === '/stickhandling'
        }
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }


    return (
        <div className='bg-dark flex items-center justify-between px-4 py-2 h-40'>
            <Link href={'/'} className='shadow-md p-2'>
                <Image
                    src='/arnieslogo.png'
                    alt='Arnies Logo'
                    width={200}
                    height={200}
                />
            </Link>

            <nav className='flex flex-grow justify-center'>
                {navlinks.map((link) => (
                    <Link
                        key={link.id}
                        href={link.href}
                        className={classNames(
                            link.current ? 'text-secondary' : 'text-white hover:text-secondary',
                            'flex items-center gap-2 p-4',
                            { 'active': link.id === activeLink } // Add 'active' class if link is active
                        )}
                        onClick={() => setActiveLink(link.id)} // Set the active link onClick
                    >
                        <span className='text-xl'>{link.name}</span>
                        <Image
                            src={`/icons/${link.icon}`}
                            width={25}
                            height={25}
                            className='white-img'
                        />
                        {/* Puck icon for active link */}
                        {link.id === activeLink && <Image src="/icons/hockey-puck.png" width={25} height={25} className="white-img" />}
                    </Link>
                ))}
            </nav>

            <div className='flex items-center'>
                <code className='font-mono font-bold mr-3 px-2'>Login</code>
            </div>
        </div>
    )
}