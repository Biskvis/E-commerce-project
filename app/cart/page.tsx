'use client'

import { useStateContext } from '../context/stateContext';
import Image from 'next/image';
import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";
import Link from "next/link";



const builder = imageUrlBuilder({ projectId: projectId!, dataset: dataset! });

export default function Page() {

    const { state, setState } = useStateContext();

    function addItem(index) {
        setState(prevState => 
            prevState.map((v, i) =>
             i === index ? {...v, quantity: v.quantity + 1} : v)
        );
    }

    function removeItem(index) {
        setState(prevState => 
            prevState.map((v, i) =>
             i === index ? {...v, quantity: v.quantity !== 1 ? v.quantity - 1 : 1 } : v)
        );
    }

    function delItem(index) {
        setState(prevState => prevState.filter((item, i) => index !== i))
    }
    

    const cart = state.map((item, index) => 
        <div className='flex flex-row border border-emerald-400 rounded-lg p-2 m-2' key={item._id}>
            <Image
            className="m-2 w-1/2 mr-4 rounded-lg"
            src={builder.image(item.mainImage[0]).width(150).height(150).quality(80).url()}
            width={150}
            height={100}
            alt={item.mainImage[0].alt || ''}
            />
            <div className='flex flex-col mt-2'>

                
                <p className='text-xl'>
                {item.name}
                </p>
                <p className='mb-auto mt-auto'>
                Price: {item.price * item.quantity} €
                </p>
                <div>
                    <button className='bg-emerald-400 text-white w-8 m-2 hover:text-black' 
                        onClick={() => addItem(index)}
                    >+</button>
                    <span>{item.quantity}</span>
                    <button className='bg-emerald-400 text-white w-8 m-2 hover:text-black'
                        onClick={() => removeItem(index)}
                    >-</button>
                    <button className='text-red-500 font-bold w-2'
                        onClick={() => delItem(index)}
                    >X</button>
                </div>
            </div>
        </div>
        )

    const total = state.map(item => 
        <div key={item._id} className='flex flex-row text-xl text-right p-2 m-2'>
            <p className=''>{item.name} <small className='ml-auto'>x</small> {item.quantity}</p> <b className='ml-auto'>{item.price * item.quantity} €</b>
            </div>
        )

        const totalSum = state.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);

    return (
        <div className='flex flex-col justify-center items-center m-8'>
            <h1 className='text-3xl text-emerald-400 m-8'>{cart.length  > 0 ? 'Your cart' : 'Shopping cart empty'}</h1>
            {cart.length === 0 && <Link href='/products'>
                <button className='bg-emerald-400 text-white text-2xl font-medium px-4 py-2 rounded shadow hover:text-black'>

                Go to Products
                </button>
                </Link>}
            <div className='grid md:grid-cols-2'>
                {cart}
            </div>
            {cart.length > 0 && 
            
            <div className='border border-emerald-400 w-96 mt-8'>
                <h1 className='text-emerald-400 text-3xl text-center'>Total</h1>
                <div className='flex flex-row text-xl font-bold'>

                <p className='ml-4'>Item</p><p className='ml-2'>Amount</p><p className='ml-auto mr-2'>Price</p>
                </div>
                <hr />
                {total}
                <hr />
                <p className='float-right text-xl p-2'>Total price: {totalSum} €</p>
                <Link href='details'>
                    <button className='bg-emerald-400 text-white text-2xl font-medium px-4 py-2 rounded shadow hover:text-black float-right m-2'>Proceed to payment</button> 
                </Link>
            </div>
            }
        </div>
    )
}