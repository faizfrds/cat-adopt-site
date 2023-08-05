"use client";

import { Cat } from "@/types/types";
import CatItem from "@/components/CatItem";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";
import { useUser } from "@/hooks/useUser";

interface PageListingProps {
  cats: Cat[];
}

const LikedCats: React.FC<PageListingProps> = ({ cats }) => {
  const authModal = useAuthModal();
  const { isLoading, user } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      authModal.onOpen();
    }
  }, []);

  if (cats.length === 0) {
    return <div className="mt-4 text-neutral-400">No cats saved yet...</div>;
  } else {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gri-cols-5 2xl:grid-cols-6 gap-4 mt-10">
        {cats.map((item) => (
          <CatItem key={item.id} cat={item} />
        ))}
      </div>
    );
  }
};

export default LikedCats;
