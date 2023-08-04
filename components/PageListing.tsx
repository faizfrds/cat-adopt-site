"use client";

import { Cat } from "@/types/types";
import CatItem from "@/components/CatItem"

interface PageListingProps {
  cats: Cat[];
}

const PageListing: React.FC<PageListingProps> = ({ cats }) => {
  if (cats.length === 0) {
    return <div className="mt-4 text-neutral-400">No cats available for adoption for now!</div>;
  } 
  else {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gri-cols-5 2xl:grid-cols-6 gap-4 mt-10">
        {cats.map((item) => (
          <CatItem key={item.id} onClick={() => {}} cat={item} />
        ))}
      </div>
    );
  }
};

export default PageListing;