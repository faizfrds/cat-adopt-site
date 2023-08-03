import { useSupabaseClient } from "@supabase/auth-helpers-react"

import { Cat } from "@/types/types";

const useLoadImage = (cat: Cat) =>{

    const supabaseClient = useSupabaseClient();

    if (!cat){
        return null;
    }

    const { data: imageData} = supabaseClient
        .storage
        .from('images')
        .getPublicUrl(cat.image_path);

    return imageData.publicUrl;
}

export default useLoadImage;