'use client';

import Link from "next/link";
import Image from "next/image";
import { Suspense } from 'react'
import { useStateContext } from '../context/stateContext';
import Search from './Search'


export default function Navlink() {
    const { state, setState } = useStateContext();
    

    return (
        <div className="h-16 border flex items-center justify-center">
            <Link
                href='/'
                className="mr-auto p-4 text-xl md:text-4xl bg-gradient-to-r from-cyan-500 to-green-500 text-transparent bg-clip-text"
             
             >Fruitio</Link>

            <div className="pt-2 mb-2 relative mx-auto  text-gray-600">
                
                <Suspense>
                    <Search />
                </Suspense>
                
                
                <button type="submit" className="hidden md:block absolute right-0 top-0 mt-5 mr-4">
                    <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                        viewBox="0 0 56.966 56.966" style={{ enableBackground: 'new 0 0 56.966 56.966' }} xmlSpace="preserve"
                        width="512px" height="512px">
                        <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                </button>
            </div>

            <Link href='/' className="p-2 md:text-xl hover:scale-110">Home</Link>
            <Link href='/products' className="p-2 md:text-xl hover:scale-110">Products</Link>
            <Link href='/about' className=" p-2 md:text-xl hover:scale-110">About</Link>
            <div className="">
                <Link 
                    href='/cart'
                >
                    <Image
                        src='/shop.png'
                        width={32}
                        height={32}
                        className="m-4 hover:scale-110 cursor-pointer"
                        alt='shopping-cart-icon'
                    />
                    
                </Link>
                
            </div>
                <span className="relative md:mr-20 text-emerald-400 text-xl -ml-2 font-bold">{state.length > 0 && state.length}</span>
        </div>
    );
}
