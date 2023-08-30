"use client";

import Button from "@/components/Button";
import useNavbar from "@/hooks/useNavbar";
import Link from "next/link";
import React from "react";

export default function Options() {
  const navbarShow = useNavbar();

  const options = [
    { title: "All Cats", url: "cats" },
    { title: "Upload", url: "upload" },
    { title: "View my Liked", url: "fav" },
    { title: "Support", url: "" },
  ];

  return (
    <div
      className="lg:w-6/12 lg:pt-8 pt-4 md:px-8 px-3 grid md:grid-cols-4 grid-cols-2 md:gap-y-2 md:gap-x-2 gap-x-1 gap-y-1"
      onClick={navbarShow.onClose}
    >
      {options.map((item) => (
        <Link href={`/${item.url}`}>
          <Button className="bg-neutral-200 text-neutral-700 border border-neutral-600 shadow-neutral-800 shadow-md">
            {item.title}
          </Button>
        </Link>
      ))}

    </div>
  );
}
