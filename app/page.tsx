import React from 'react';
import { SanityDocument } from "next-sanity";

import Posts from "./components/Posts";
import Hero from './components/Hero';

import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";



export default async function Page() {
  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY);

  return (
    <>
      <Hero />
      <hr />
      <Posts posts={initial.data} />
    </>
    ) 
}