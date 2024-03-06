'use client'

import Hero from '@/components/Hero';
import Parallax from '@/components/Parallax';

export default function Home() {

  const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

  return (
    <>
      <Hero url={url} />
      <Parallax url={url} />
    </>
  );
};
