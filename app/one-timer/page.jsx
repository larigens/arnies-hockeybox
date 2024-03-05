import Image from "next/image";

export default function Products() {
    const products = [
        {
            id: 1,
            name: 'Hockey Pucks (Pack of 6)',
            img: 'puck.png',
            description: 'Official size and weight hockey pucks for practice and game play.',
            price: '$25'
        },
        {
            id: 2,
            name: 'Stick Tape (Pack of 3)',
            img: 'stick-tape.png',
            description: 'High-quality cloth tape for wrapping hockey sticks, providing grip and puck control.',
            price: '$11'
        },
        {
            id: 3,
            name: 'Skate Laces',
            img: 'skate-laces.png',
            description: 'Heavy-duty waxed hockey skate laces designed for secure and tight tying',
            price: '$6'
        },
        {
            id: 4,
            name: 'Hockey Skate Blade Guards',
            img: 'blade-guards.png',
            description: 'Protective covers for hockey skate blades, ideal for storage and transport.',
            price: '$20'
        }
    ]
    return (
        <main>
            <div className="flex flex-wrap justify-center mt-20">
                {products.map((product) => (
                    <div key={product.id} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
                        <Image
                            src={`/${product.img}`}
                            width={85}
                            height={85}
                            className='w-full h-56 m-2 object-contain object-center'
                            alt="product image"
                        />
                        <div className="p-4 max-w-md mx-auto bg-white rounded-xl overflow-hidden">
                            <h2 className="text-gray-800 font-semibold text-xl mb-2">{product.name}</h2>
                            <p className="text-gray-600 text-sm text-justify">{product.description}</p>
                            <p className="text-gray-700 font-bold mt-2">{product.price}</p>
                            <button className="mt-4 bg-brand hover:bg-secondary hover:text-brand text-white font-bold py-2 px-4 rounded">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}