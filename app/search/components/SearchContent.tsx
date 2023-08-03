"use client";

import { Cat } from "@/types/types";

interface SearchContentProps {
    cats: Cat[];
}

const SearchContent: React.FC<SearchContentProps> = ({cats}) => {

    if (cats.length === 0) {
        return (
            <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
                Sorry, nothing matched your search...
            </div>
        )
    }
    return ( 
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gri-cols-5 2xl:grid-cols-6 gap-4 mt-10">
        
      </div>
     );
}
 
export default SearchContent;