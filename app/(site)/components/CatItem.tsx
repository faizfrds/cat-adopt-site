"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Cat } from "@/types/types";

import Image from "next/image";
import { useUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import useNavbar from "@/hooks/useNavbar";

interface CatItemProps {
  cat: Cat;
}

const CatItem: React.FC<CatItemProps> = ({ cat }) => {

  const imagePath = useLoadImage(cat);
  const { user } = useUser();
  const pathname = usePathname();
  const navbarShow = useNavbar();

  return (
    <div className=" group flex flex-col rounded-md items-center overflow-hidden bg-neutral-400/5 cursor-pointer transition shadow-lg shadow-black md:h-[40vh] h-[35vh]">
      <Link href={`/cats/${cat.id}`} className="static h-full w-full overflow-hidden" onClick={navbarShow.onClose}>
          <img
            className="h-full w-full object-cover"
            src={imagePath || "/images/marquee-pic.jpeg"}
          />
      </Link>

      <div className="flex flex-col items-start w-full lg:p-4 p-2 gap-y-1 text-cyan-700 text-bold bg-white">
        <p className="font-semibold text-center w-full lg:text-3xl text-xl">
          {cat.name}
        </p>
      </div>
    </div>
  );
};

export default CatItem;
