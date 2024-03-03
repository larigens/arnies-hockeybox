'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Nav() {
    let pathname = usePathname()
    const navlinks = [
        {
            name: "One-Timer",
            icon: 'skates.png',
            href: '/one-timer',
            current: { pathname } = '/one-timer'
        },
        {
            name: "Defense pinching",
            icon: 'defensive.png',
            href: '/defense-pinching',
            current: { pathname } = '/defense-pinching'
        },
        {
            name: "Glove Save",
            icon: 'gloves.png',
            href: '/glove-save',
            current: { pathname } = '/glove-save'
        },
        {
            name: "Stickhandling",
            icon: 'hockey.png',
            href: '/stickhandling',
            current: { pathname } = '/stickhandling'
        }
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }


    return (
        <div class="bg-brand flex">
            <Link href={'/'} className='bg-secondary rounded-full mx-3 my-2 rolling-image'>
                <Image
                    src='/arnieslogo-removebg.png'
                    alt='Arnies Logo'
                    width={180}
                    height={180}
                />
            </Link>
            <nav className='flex items-center justify-center mx-auto'>
                {navlinks.map((link) => (
                    <Link
                        key={link.id}
                        href={link.href}
                        className={classNames(
                            link.current
                                ? 'text-white bg-main-brand'
                                : 'text-main-brand hover:bg-main-brand hover:text-white',
                            'flex items-center gap-2 p-4 mb-1 rounded-l-lg'
                        )}
                    >
                        <Image
                            src={`/icons/${link.icon}`}
                            width={25}
                            height={25}
                            class='white-img'
                        />
                        {link.name}
                    </Link>
                )
                )}
            </nav>
            <div class="flex justify-end text-right h-42 items-center mx-2">
                <p class="flex items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Get started &nbsp;
                    <code class="font-mono font-bold">Faceoff</code>
                </p>
            </div>
        </div>
    )
}