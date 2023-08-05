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
    <div
      className="lg:relative group flex flex-col rounded-md items-center overflow-hidden bg-neutral-400/20 cursor-pointer transition shadow-lg shadow-black lg:h-[40vh] h-[50vh]"
    >
      {details ? (
        <div className="flex flex-col p-4 w-full">
          <HiX
            className="lg:absolute lg:top-2 lg:right-2 right-20"
            onClick={() => {
              setDetails(false);
            }}
          />
          <div className="pt-2 text-cyan-800 overflow-x-auto">
            <h1 className="text-lg pb-2">Contact Details:</h1>
            <div className="text-xs">
                {cat.contact}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div onClick={() => setDetails(true)} className="static w-full h-full overflow-hidden">
            <img
              src={imagePath || "/images/marquee-pic.jpeg"}
              className="object-cover w-full h-full"
            />
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
        </>
      )}
    </div>
  );
};

export default CatItem;
