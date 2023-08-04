import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import { Cat } from "@/types/types"

//for fetching data

const getCatHome = async (): Promise<Cat[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase
        .from('cat')
        .select('name, image_path')
        .order('created_at', {ascending: true})
        .limit (5);
    
    if (error) {
        console.log(error);
    }

    return (data as any) || [];
};

export default getCatHome;