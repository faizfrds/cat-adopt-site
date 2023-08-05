export interface UserDetails {

    id: string;
    username: string;
    full_name: string;
    avatar_url: string;
    website: string;

}

export interface Cat {

    user_id: string;
    id: string;
    name: string;
    image_path: string;
    age: number;
    gender: string;
    breed: string;
    contact: string;
}

export interface LikedCats {
    user_id: string;
    cat_id: string;
}