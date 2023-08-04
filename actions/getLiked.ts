import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import { Cat } from "@/types/types"

//for fetching data

const getLiked = async (): Promise<Cat[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const {
        data: {session}
    } = await supabase.auth.getSession();

    const { data, error } = await supabase
        .from('liked_cats')
        .select('*, cat(*)')
        .eq('user_id', session?.user?.id)
        .order('created_at', {ascending: true});
    
    if (error) {
        console.log(error);
        return [];
    }

    if (!data) {
        return [];
    }

    return data.map((item) => ({
        ...item.cat
    }))
};

export default getLiked;