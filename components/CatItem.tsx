"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Cat } from "@/types/types";

import Image from "next/image";
import FavButton from "./FavButton";
import { useUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";
import RemoveButton from "./RemoveButton";
import { usePathname, useRouter } from "next/navigation";

interface CatItemProps {
  cat: Cat;
  onClick: (id: string) => void;
}

const CatItem: React.FC<CatItemProps> = ({ cat, onClick }) => {
  const imagePath = useLoadImage(cat);
  const [owner, setOwner] = useState(false);
  const [button, setButtons] = useState(true);
  const { user } = useUser();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      if (cat.user_id === user?.id) setOwner(true);
      else {
        setOwner(false);
      }
    } else {
      setButtons(false);
    }
  });

  return (
    <div
      onClick={() => onClick(cat.id)}
      className="lg:relative group flex flex-col rounded-md items-center overflow-hidden bg-neutral-400/20 cursor-pointer transition shadow-lg shadow-black h-[40vh]"
    >
      <div className="static w-full h-full overflow-hidden">
        <img src={imagePath || "/images/marquee-pic.jpeg"} className="object-cover w-full h-full" />
      </div>

      <div className="flex flex-col items-start w-full lg:p-4 p-1 gap-y-1 text-cyan-700 text-bold bg-white">
        <p className="font-semibold text-center w-full lg:text-3xl text-xl">
          {cat.name}
        </p>
        <p className="text-cyan-600/40 text-center w-full capitalize">
          age: {cat.age} • {cat.gender}
        </p>
      </div>

      {owner ? (
        <div>
          <RemoveButton catId={cat.id} />
        </div>
      ) : (
        
        <FavButton catId={cat.id} />
        
      )}
    </div>
  );
};

export default CatItem;