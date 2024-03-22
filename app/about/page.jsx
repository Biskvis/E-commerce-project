import Link from 'next/link'

export default function Page() {
    return (
        <div className="flex justify-center items-center mt-8">
            <h1 className="text-4xl lg:text-6xl font-bold p-8"><span className="text-emerald-400">fruits</span>.</h1>
            <div>

            <p className="p-2 text-xl">
                <span className="text-emerald-400 text-2xl font-bold">Fruits</span> are nature&apos;s bounty, offering a delightful array of flavors, colors, and nutrients that contribute to our overall well-being. Packed with essential vitamins, minerals, and antioxidants, <span className="text-emerald-400 text-2xl font-bold">Fruits</span> play a crucial role in supporting our immune system, promoting healthy digestion, and reducing the risk of chronic diseases such as heart disease, diabetes, and certain cancers.
            </p>
            <p className="p-2 text-xl">
                Their natural sweetness makes them a delicious alternative to sugary snacks, helping to satisfy cravings while providing a burst of energy. Moreover, <span className="text-emerald-400 text-2xl font-bold">Fruits</span> are hydrating, with high water content that helps maintain optimal hydration levels in the body.
            </p>
            <p className="p-2 text-xl">
                Beyond their nutritional value, <span className="text-emerald-400 text-2xl font-bold">Fruits</span> also offer dietary fiber, aiding in digestion and promoting satiety, which can assist in weight management. Their versatility allows for endless culinary creativity, whether enjoyed fresh, blended into smoothies, or incorporated into savory dishes, adding both flavor and nutrition.
            </p>
            <p className="p-2 text-xl">
                In essence, <span className="text-emerald-400 text-2xl font-bold">Fruits</span> are not just delicious; they are essential components of a balanced diet, contributing to our overall health, vitality, and enjoyment of life.
            </p>
            <Link href='/products'>
                <button className='float-right m-8 bg-emerald-400 text-white text-2xl font-medium px-4 py-2 rounded shadow hover:text-black'>

                Go to Products
                </button>
                </Link>
            </div>
        </div>

    )
}