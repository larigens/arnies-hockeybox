import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Hero({ url }) {
    const router = useRouter();

    const handleClick = () => {
        router.push('/defense-pinching');
    };

    return (
        <div className="flex flex-col items-center content-center h-screen" style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
            backgroundColor: '#010101'
        }}>
            <div className="flex items-start justify-center">
                <motion.img
                    src="/arnies.png"
                    alt="Arnies"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: -80, x: 100 }}
                    transition={{ duration: 1 }}
                    width={420}
                    height={220}
                    priority
                />
                <motion.h1
                    initial={{ opacity: 0, y: 160 }}
                    animate={{ opacity: 1, y: 180, x: -30 }}
                    transition={{ duration: 1 }}
                    className="text-2xl md:text-3xl lg:text-4xl text-white font-bold"
                >
                    Hockey<span className="text-brand">Box</span>
                </motion.h1>
                <motion.img
                    src='/box/box3.png'
                    alt="Arnies hockey box"
                    initial={{ opacity: 0, y: -100, x: 50, rotate: -180 }}
                    animate={{ opacity: 1, y: -80, x: -110, rotate: -360 }}
                    transition={{ duration: 1 }}
                    width={400}
                    height={200}
                    priority
                />
            </div>
            <div className="flex flex-col items-center content-start">
                <motion.p
                    initial={{ opacity: 0, y: -250 }}
                    animate={{ opacity: 1, y: -100 }}
                    transition={{ duration: 1 }}
                    className="text-xl md:text-2xl lg:text-3xl text-white mb-8 text-center"
                >
                    Your Ultimate Hockey Supply Subscription
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, y: -100 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    onClick={handleClick}
                    className="bg-white text-brand py-2 px-6 rounded-full font-semibold text-xl hover:bg-secondary hover:text-brand text-center"
                >
                    Subscribe Now
                </motion.button>
            </div>
            <div className="flex items-baseline">
                <motion.img
                    src='/players/player1.png'
                    initial={{ opacity: 0, x: -800, y: -75 }}
                    animate={{ opacity: 1, x: -650 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    width={300}
                    height={300}
                    priority
                />
                <motion.img
                    src='/icons/down-arrow.png'
                    initial={{ opacity: 0, scale: 0.5, y: -75, x:-600 }}
                    animate={{ opacity: 0.8, scale: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    width={50}
                    height={50}
                    className='white-img'
                    priority
                />
            </div>

        </div>
    )
}