'use client';

import Image from "next/image";
import { dataset, projectId } from "@/sanity/env";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { useStateContext } from '../context/stateContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const builder = imageUrlBuilder({ projectId: projectId!, dataset: dataset! });

export default function Posts({ posts }: { posts: SanityDocument[] }) {

  const { state, setState } = useStateContext();
  const notify = (item) => toast(`${item} added to cart.`);
  const notifyE = (item) => toast.info(`${item} already in cart.`);

  function handleClick(post) {
    if (!state.some(item => item.name === post.name)) {
        setState(prevState => [...prevState, post]);
        notify(post.name)
    }
    else {
      notifyE(post.name)
    }
  }


  return (
    <main className="m-4 mt-20 mb-20 scrollbar scrollbar-thumb-emerald-400 overflow-x-scroll overflow-y-hidden flex">
      <ToastContainer />
  {posts?.length > 0 ? (
    posts.map((post) => (
      <div key={post._id} className="flex-shrink-0 flex flex-col justify-center items-center -ml-20 mx-2 w-96">
        <Image
          className="m-2 w-1/2 mr-4 rounded-lg"
          src={builder.image(post.mainImage[0]).width(300).height(300).quality(80).url()}
          width={300}
          height={300}
          alt={post.mainImage[0].alt || ''}
        />
        <Link
          href={post.slug.current}
        >
          <h2 className="p-2 text-xl hover:scale-125">{post.name}</h2>
        </Link>
        <h2 className="">{post.price}€</h2>
        <button

         className="p-2 hover:scale-125 text-emerald-400"
         onClick={() => handleClick(post)}
         
         >Add to Cart</button>
      </div>
    ))
  ) : (
    <div className="p-4 text-red-500">No posts found</div>
  )}
</main>

  );
}