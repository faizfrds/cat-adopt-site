import getCat from "@/actions/getCat";
import React from "react";
import PageListing from "@/components/PageListing";

export const revalidate = 0;

export default async function cats() {
  const cats = await getCat();

  return (
    <div className="flex justify-center w-screen h-fit bg-auto bg-neutral-50">
      <div className="lg:w-3/4 w-11/12">
        <h1 className="text-neutral-600 text-5xl pt-20">
          Adopt a Cat Today
        </h1>
        <h3 className="text-neutral-400 text-lg pt-4">
          Cats looking for homes
        </h3>

        <div className="flex justify-center pb-5">
          <PageListing cats={cats} />
        </div>
      </div>
    </div>
  );
}
