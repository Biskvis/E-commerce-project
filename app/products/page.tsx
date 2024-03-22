import { SanityDocument } from "next-sanity";

import Products from '@/app/components/Products'

import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
    const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY);
    
    return(
        <div>
            <Products posts={initial.data} />
        </div>
    )
}