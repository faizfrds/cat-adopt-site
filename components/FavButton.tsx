"use client";

import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { FieldValues, SubmitHandler } from "react-hook-form";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

interface FavButtonProps {
  catId: string;
}

const FavButton: React.FC<FavButtonProps> = ({ catId }) => {
  const { user } = useUser();
  const router = useRouter();
  const { supabaseClient } = useSessionContext();
  const authModal = useAuthModal();

  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from("liked_cats")
        .select("*")
        .eq("user_id", user.id)
        .eq("cat_id", catId)
        .single();

      if (!error && data) {
        setIsLiked(true);
      }
    };

    fetchData();
  }, [catId, supabaseClient, user?.id]);

  const Icon = isLiked ? HiHeart : HiOutlineHeart;

  const handleLike = async () => {

    if (!user) return authModal.onOpen();

    if (isLiked) {
      const { error } = await supabaseClient
        .from("liked_cats")
        .delete()
        .eq("user_id", user.id)
        .eq("cat_id", catId);

      if (error) {
        toast.error(error.message);
      } 
      else {
        setIsLiked(false);
      }
    } 
    else {
      const { error } = await supabaseClient.from("liked_cats").insert({
        cat_id: catId,
        user_id: user.id,
      });

      if (error) {
        toast.error(error.message);
      } 
      else {
        setIsLiked(true);
        toast.success("Saved to favourites");
      }
    }

    router.refresh();
  };

  return (
    <button
      className="absolute top-3 right-2 bg-neutral-100/80 rounded-full p-2 text-red-500/90 hover:scale-105 hover:bg-white"
      onClick={handleLike}
    >
      <Icon color="#f23359" size={30} />
    </button>
  );
};

export default FavButton;
