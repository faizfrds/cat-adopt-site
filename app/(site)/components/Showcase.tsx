"use client";

import { Cat } from "@/types/types";
import CatItem from "./CatItem";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";

interface ShowcaseProps {
  cats: Cat[];
}

const Showcase: React.FC<ShowcaseProps> = ({ cats }) => {
  const { isLoading, user } = useUser();

  const router = useRouter();


  if (cats.length === 0) {
    return <div className="mt-4 text-neutral-400">No cats saved yet...</div>;
  } else {
    return (
      <div onClick={() => {router.push("/cats")}} className="lg:w-8/12 w-screen px-3 pb-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 text-black">
        {cats.map((item) => (
          <CatItem key={item.id} cat={item} />
        ))}
      </div>
    );
  }
};

export default Showcase;
