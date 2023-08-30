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

interface CatDisplayProps {
  cat: Cat;
}

const CatDisplay: React.FC<CatDisplayProps> = ({ cat }) => {
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
    <div className="justify-center flex">
      <div className="md:w-8/12 w-11/12 h-fit py-10 justify-center flex-col">
        <div className="w-full h-[50vh] bg-black justify-center flex">
          <div className="min-w-[45vh] max-w-[50%] h-full">
            <img
              src={imagePath || "/images/marquee-pic.jpeg"}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="flex justify-center items-start mt-4 gap-x-8 lg:pt-4 p-1 gap-y-1 text-cyan-700 text-bold bg-neutral-200 rounded-lg">
          <div className="flex-col text-center">
            <p className="font-semibold w-full lg:text-4xl text-xl pb-3">
              {cat.name}
            </p>
            <p className="text-cyan-600/40 w-full capitalize">
              {cat.age} • {cat.gender} • {cat.breed}
            </p>
            <div className="text-md pb-3 pt-5 text-neutral-900">
              Inquiries:
              <p className="text-xs text-neutral-500">{cat.contact}</p>
            </div>
          </div>
        </div>

        <div className="cursor-pointer rounded-full mt-4 px-5 justify-center flex">
        {owner ? (
          <div className="bg-cyan-700 hover:bg-cyan-700/80 rounded-full px-5 h-fit items-center text-white py-4 w-fit flex">
            
            <RemoveButton className="w-full" catId={cat.id} />
          </div>
        ) : (
          <div className="bg-cyan-700 hover:bg-cyan-700/80 rounded-full px-5 h-fit items-center text-white py-4 w-fit flex">
            <FavButton className="w-full" catId={cat.id}>
              Favourite
            </FavButton>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default CatDisplay;
