export default function Box() {
    <div className="bg-brand">
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
    </div>
}