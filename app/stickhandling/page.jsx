'use client'

import { motion, useDragControls } from "framer-motion"
import Image from 'next/image';

export default function Stickhandling() {
    const controls = useDragControls();

    function startDrag(event) {
        controls.start(event);
    }

    return (
        <div className="flex justify-center items-center">
            <div onPointerDown={startDrag}>
                <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
                    <Image
                        src={`/products/puck.png`}
                        width={85}
                        height={85}
                        className='w-full h-56 m-2 object-contain object-center'
                        alt="product image"
                        priority
                    />
                    <div className="p-4 max-w-md mx-auto bg-white rounded-xl overflow-hidden">
                        <h2 className="text-gray-800 font-semibold text-xl mb-2">Puck</h2>
                    </div>
                </div>
            </div>
            <motion.div drag dragControls={controls}>
                <motion.img
                    src='/box/box4.png'
                    width={150}
                    height={150}
                    className='white-img'
                />
            </motion.div>
        </div>
    );
}
