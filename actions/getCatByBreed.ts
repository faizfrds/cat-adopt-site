import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import { Cat } from "@/types/types"
import getCat from "./getCat";

//for fetching data

const getCatByBreed = async (breed: string): Promise<Cat[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    if (!breed){
        const allCats = await getCat();
        return allCats;
    }

    const { data, error } = await supabase
        .from('cat')
        .select('*')
        .ilike('breed', '%${breed}%')
        .order('created_at', {ascending: true});
    
    if (error) {
        console.log(error);
    }

    return (data as any) || [];
};

export default getCatByBreed;