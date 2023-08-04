"use client";

import { Cat } from "@/types/types";
import CatItem from "./CatItem";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";
import { useUser } from "@/hooks/useUser";

interface ShowcaseProps {
  cats: Cat[];
}

const Showcase: React.FC<ShowcaseProps> = ({ cats }) => {
  const { isLoading, user } = useUser();


  if (cats.length === 0) {
    return <div className="mt-4 text-neutral-400">No cats saved yet...</div>;
  } else {
    return (
      <div className="lg:w-9/12 w-screen px-3 pb-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gri-cols-5 2xl:grid-cols-6 gap-4 mt-10 text-black">
        {cats.map((item) => (
          <CatItem key={item.id} onClick={() => {}} cat={item} />
        ))}
      </div>
    );
  }
};

export default Showcase;
