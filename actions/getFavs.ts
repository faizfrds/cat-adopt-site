import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import { Cat } from "@/types/types"

//for fetching data

const getFavs = async (): Promise<Cat[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase
        .from('like_songs')
        .select('*')
        .order('created_at', {ascending: true});
    
    if (error) {
        console.log(error);
    }

    return (data as any) || [];
};

export default getFavs;