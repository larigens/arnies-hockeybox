import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="container flex flex-col items-center justify-content-center mt-10">

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative rounded-3xl mx-6"
            src="/homepage.png"
            alt="hockey sticks and puck"
            width={180}
            height={107}
            priority
          />

          <section class="text-white py-20">
            <div class="container mx-auto text-center">
              <h1 class="text-4xl font-bold mb-4">Get Your Hockey Gear Delivered Monthly</h1>
              <p class="text-lg mb-8">Discover the joy of receiving premium hockey gear every month with our subscription box.</p>
              <a href="#" class="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-200 hover:text-gray-900">Subscribe Now</a>
            </div>
          </section>
        </div>

        <section class="py-16">
          <div class="container items-center text-center">
            <h2 class="text-3xl font-bold mb-8">Why Choose Us?</h2>
            <div class="flex justify-center space-x-12">
              <div class="max-w-md mx-2">
                <h3 class="text-xl font-semibold mb-4">High-Quality Gear</h3>
                <p class="text-white">We source the best hockey equipment from top brands to ensure you get the highest quality gear.</p>
              </div>
              <div class="max-w-md">
                <h3 class="text-xl font-semibold mb-4">Convenient Delivery</h3>
                <p class="text-white">Your hockey box will be delivered straight to your doorstep every month, hassle-free.</p>
              </div>
              <div class="max-w-md">
                <h3 class="text-xl font-semibold mb-4">Customization Options</h3>
                <p class="text-white">Tailor your subscription to your preferences with customization options available.</p>
              </div>
            </div>
          </div>
        </section>


        {/* <div className="my-20 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="/one-timer"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              One-timer{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore our products without committing to our subscription box.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Defense pinching{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Discover Our Hockey Box Subscription and Setup Guide.
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Glove save{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find essential items for your upcoming game.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Stickhandling{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              Instantly make changes to your hockey box.
            </p>
          </a>
        </div> */}
      </main>
    </>
  );
}
