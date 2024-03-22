'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation'


export default function Hero() {
    const router = useRouter();

    
    function handleClick() {
      router.push('/about');
    }

    return (
        <div className="flex max-h-screen">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">Find your favorite <span className="text-emerald-400">fruit</span> today</h1>
                <div className="w-20 h-2 bg-emerald-400 my-4"></div>
                <p className="text-xl mb-10">Fruits are nutrient-packed powerhouses, offering vitamins, minerals, and antioxidants vital for health. They boost immunity, aid digestion, and satisfy sweet cravings guilt-free. Incorporate fruits for a delicious and effortless path to wellness!</p>
                <button 
                  className="bg-emerald-400 text-white text-2xl font-medium px-4 py-2 rounded shadow hover:text-black"
                  onClick={handleClick}
                >Learn More</button>
              </div>
            </header>
          </div>
        </div>
        <Image
            src='/hero.jpg'
            width={600}
            height={200}
            className="ml-auto p-2 rounded-xl"
            alt='orange-tree-picture'
        />
      </div> 
    )
}