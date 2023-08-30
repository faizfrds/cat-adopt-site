import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import getCat from "@/actions/getCat";

import React from 'react'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Cat } from "@/types/types";
import { cookies } from "next/headers";
import CatDisplay from "@/components/CatDisplay";


const getSpecificCat = async (Id: string): Promise<Cat> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase
        .from('cat')
        .select('*')
        .eq('id', Id)
    
    if (error) {
        console.log(error);
    }

    console.log(data)

    return (data as any) || "";
};

export default async function CatsSpecific({params}: {params: {slug : string}}) {

  const cat: any = await getSpecificCat(params.slug);
  console.log(cat);

  return (
    <div>
        <CatDisplay cat={cat[0]}/>
    </div>
  )
}
