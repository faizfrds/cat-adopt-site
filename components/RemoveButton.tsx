"use client";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

import { BiTrash } from "react-icons/bi";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

interface RemoveButtonProps {
  catId: string;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ catId }) => {
  const { user } = useUser();
  const router = useRouter();
  const { supabaseClient } = useSessionContext();
  const authModal = useAuthModal();

  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleDelete = async () => {
    if (!user) return authModal.onOpen();

    const { error } = await supabaseClient
      .from("cat")
      .delete()
      .eq("user_id", user.id)
      .eq("id", catId);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Removed Successfully");
    }

    router.refresh();
  };

  return (
    <button
      className=" lg:absolute lg:top-3 lg:left-2 rounded-full p-2 text-white hover:scale-105 flex gap-x-2 hover:bg-neutral-200/40"
      onClick={handleDelete}
    >
      Remove
      <BiTrash size={20} />
    </button>
  );
};

export default RemoveButton;
