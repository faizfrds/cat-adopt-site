"use client";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal";
import Input from "./Input";
import Button from "./Button";

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import uniqid from "uniqid";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

const UploadForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const authModal = useAuthModal();
  const { user } = useUser();
  const uploadModal = useUploadModal();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      image: null,
    },
  });

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    //uploading form data to supabase bucket and database record

    try {
      setIsLoading(true);

      const imageFile = values.image?.[0];

      if (!imageFile || !user) {
        toast.error("Missing fields");
        return;
      }

      const uniqueID = uniqid();

      // Upload image
      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("images")
          .upload(`image-${values.title}-${uniqueID}`, imageFile, {
            cacheControl: "3600",
            upsert: false,
          });

      if (imageError) {
        setIsLoading(false);
        return toast.error("Failed image upload");
      }

      // Create record
      const { error: supabaseError } = await supabaseClient.from("cat").insert({
        user_id: user.id,
        name: values.name,
        age: values.age,
        gender: values.gender,
        breed: values.breed,
        image_path: imageData.path,
      });

      if (supabaseError) {
        return toast.error(supabaseError.message);
      }

      router.refresh();
      setIsLoading(false);
      toast.success("Cat record created!");
      reset();
      uploadModal.onClose();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <p className="text-neutral-600">
          Name
          <Input
            id="name"
            disabled={isLoading}
            {...register("name", { required: true })}
            placeholder="e.g. mio, lulu,..."
          />
        </p>

        <p className="text-neutral-600">
          Age
          <Input
            id="age"
            type="number"
            disabled={isLoading}
            {...register("age", { required: true })}
            placeholder="(if less than 1 year old, enter 0)"
          />
        </p>

        <div className="text-neutral-600 flex">
          <p className="pr-5">Gender</p>
          <select
            className="bg-white border border-neutral-600 rounded-lg pr-3"
            id="gender"
            {...register("gender", { required: true })}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <p className="text-neutral-600">
          Breed
          <Input
            id="breed"
            disabled={isLoading}
            {...register("breed", { required: true })}
            placeholder="angora, bengal,..."
          />
        </p>

        <div>
          <div className="pb-1">Select an image of the cat to display</div>
          <Input
            placeholder="test"
            disabled={isLoading}
            type="file"
            accept="image/*"
            id="image"
            {...register("image", { required: true })}
          />
        </div>
        <Button disabled={isLoading} type="submit">
          Upload
        </Button>
      </form>
    </div>
  );
};

export default UploadForm;
