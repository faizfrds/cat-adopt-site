"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Cat } from "@/types/types";

import Image from "next/image";
import FavButton from "./FavButton";
import { useUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";
import RemoveButton from "./RemoveButton";

interface CatItemProps {
  cat: Cat;
  onClick: (id: string) => void;
}

const CatItem: React.FC<CatItemProps> = ({ cat, onClick }) => {
  const imagePath = useLoadImage(cat);
  const [owner, setOwner] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    if (cat.user_id === user?.id) setOwner(true);
    else {
      setOwner(false);
    }
  });

  return (
    <div
      onClick={() => onClick(cat.id)}
      className="relative group flex flex-col rounded-md items-center overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer transition shadow-lg shadow-black h-[350px]"
    >
      <div className="relative aspect-square w-full h-full overflow-hidden">
        <Image
          className="object-cover"
          src={imagePath || "/images/marquee-pic.jpeg"}
          fill
          alt="Image"
        />
      </div>

      <div className="flex flex-col items-start w-full p-4 gap-y-1 text-cyan-700 text-bold bg-white">
        <p className="font-semibold text-center w-full text-3xl">{cat.name}</p>
        <p className="text-cyan-600/40 text-center w-full capitalize">
          age: {cat.age} • {cat.gender}
        </p>
      </div>

      {owner ? (
        <div>
          <RemoveButton catId={cat.id}/>
        </div>
      ) : (
        <></>
      )}

      <FavButton catId={cat.id} />
    </div>
  );
};

export default CatItem;
