// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "product" && defined(slug)]`;

export const POST_QUERY = groq`*[_type == "product" && slug.current == $slug][0]`;