import Image from "next/image";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "next-sanity";
import { dataset, projectId } from "@/sanity/env";
import Link from 'next/link';

const builder = imageUrlBuilder({ projectId: projectId!, dataset: dataset! });

export default function Post({ post }: { post: SanityDocument }) {
  const { name, mainImage, myRichTextExample, price } = post;
  return (
    <main className="container mx-auto prose prose-lg p-4 mt-8">
      {name && <h1 className="text-3xl text-emerald-400 text-center p-4">{name}</h1>}
      {mainImage ? (
        <Image
          className="float-left w-1/3 mr-4 rounded-lg"
          src={builder.image(mainImage[0]).width(300).height(650).quality(80).url()}
          width={300}
          height={300}
          alt={mainImage.alt || ''}
        />
      ) : null}
      {myRichTextExample && <PortableText value={myRichTextExample} />}
      <Link href='/products'>
        <button className='float-right m-8 bg-emerald-400 text-white text-2xl font-medium px-4 py-2 rounded shadow hover:text-black'>

        Go to Products
        </button>
        </Link>
    </main>
  );
}
