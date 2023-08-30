"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Cat } from "@/types/types";

import Image from "next/image";
import FavButton from "./FavButton";
import { useUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";
import RemoveButton from "./RemoveButton";
import { usePathname, useRouter } from "next/navigation";
import { HiX } from "react-icons/hi";
import Link from "next/link";

interface CatItemProps {
  cat: Cat;
}

const CatItem: React.FC<CatItemProps> = ({ cat }) => {
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

  const [details, setDetails] = useState(false);

  return (
    <div className="lg:relative group flex flex-col rounded-md items-center overflow-hidden bg-neutral-400/20 cursor-pointer transition shadow-lg shadow-black lg:h-[40vh] h-[50vh]">
      <Link
        href={`/cats/${cat.id}`}
        className="static w-full h-full overflow-hidden"
      >
        <img
          src={imagePath || "/images/marquee-pic.jpeg"}
          className="object-cover w-full h-full"
        />
      </Link>

      <div className="flex flex-col items-start w-full lg:p-4 p-1 gap-y-1 text-cyan-700 text-bold bg-white">
        <p className="font-semibold text-center w-full lg:text-3xl text-xl">
          {cat.name}
        </p>
        <p className="text-cyan-600/40 text-center w-full capitalize">
          age: {cat.age} • {cat.gender}
        </p>
      </div>

      {owner ? (
        <RemoveButton className="lg:absolute lg:top-3 lg:right-2 rounded-full p-2 text-white hover:scale-105 flex gap-x-2 hover:bg-neutral-200/40" catId={cat.id} />
      ) : (
        <FavButton className="lg:absolute lg:top-3 lg:right-2 rounded-full p-2 text-red-500/90 lg:bg-neutral-100/70 hover:scale-105 hover:bg-white" catId={cat.id} />
      )}
    </div>
  );
};

export default CatItem;
