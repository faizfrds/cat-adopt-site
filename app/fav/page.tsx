import getLiked from "@/actions/getLiked";
import React from "react";
import PageListing from "@/components/PageListing";
import getCat from "@/actions/getCat";
import LikedCats from "./components/LikedCats";

export const revalidate = 0;


const Liked = async () => {

  const cats = await getLiked();

  return ( 
    <div className="flex justify-center w-screen h-fit bg-auto bg-neutral-50">
    <div className="lg:w-3/4 w-11/12">
      <h1 className="text-neutral-600 text-5xl pt-20">
        Liked
      </h1>

      <div className="mt-2 mb-7 px-6">
        <LikedCats cats={cats} />
      </div>
    </div>
  </div>
   );
}
 
export default Liked;
