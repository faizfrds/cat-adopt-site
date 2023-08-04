"use client";

import UploadForm from "@/components/UploadForm";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { BiPencil, BiX } from "react-icons/bi";

export default function Upload() {
  const [isOpen, setIsOpen] = useState(false);

  const Icon = isOpen ? BiX : BiPencil;

  return (
    <div className="flex justify-center w-screen h-fit bg-auto bg-neutral-50">
      <div className="lg:w-8/12 w-11/12">

        <h1 className="text-neutral-600 text-5xl pt-20">
          Get Involved With Saving Cats
        </h1>
        <h3 className="text-neutral-400 text-lg pt-4">
          Help cats find a loving home!
        </h3>

        <div className="pt-5">
          <Button
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden flex text-2xl justify-center gap-x-2 items-center active:bg-cyan-900"
          >
            Put Cat For Adoption
            <Icon />
          </Button>
        </div>

        {isOpen ? (
          <div className="text-xl p-4 mt-3 border border-neutral-400 rounded-lg transition">
            <UploadForm />
          </div>
        ) : (
          <></>
        )}

        <div className="flex lg:pt-10 pt-4 gap-x-2">
          <div className="lg:h-[80vh] md:h-[60vh] h-[50vh] lg:w-8/12 w-screen rounded-lg static overflow-hidden flex flex-col">
            <img src="/images/taro-header.png" className="w-full h-full object-cover"/>
          </div>

          <div className="h-fit w-4/12 border border-neutral-400 rounded-md p-4 lg:block hidden">
            <div className="text-neutral-600 text-2xl pb-4 capitalize">
              put cat up for adoption below
            </div>
            <UploadForm />
          </div>
        </div>

        <div className="h-fit my-2 p-3 rounded-lg border border-neutral-300 lg:w-8/12 px-4 justify-start">
          
          <h1 className="text-2xl text-cyan-700">
            Why You Should Adopt
          </h1>
          <p className="text-sm pt-1">
              Kucing ngeong
          </p>
        </div>
      </div>
    </div>
  );
}
