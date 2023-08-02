import { HiArrowSmRight } from "react-icons/hi";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";


const MobileMenu = () => {

const authModal = useAuthModal();
  return (
    <div className="lg:hidden fixed w-full h-screen bg-cyan-600 text-white">
      <div className="pl-20 mt-10 mb-10 text-3xl">
        <div className="group py-7 flex items-center">
          Breeds
          <HiArrowSmRight className="group-hover:translate-x-2  transition" />
        </div>
        <div className="group py-7 flex items-center">
          How to Adopt
          <HiArrowSmRight className="group-hover:translate-x-2  transition" />
        </div>
        <div className="group py-7 flex items-center">
          More Support
          <HiArrowSmRight className="group-hover:translate-x-2  transition" />
        </div>
      </div>

      <div className="mt-10 mb-10 text-3xl text-left">
        <Button className="bg-transparent pb-7" onClick={authModal.onOpen}>
          Sign Up
        </Button>

        <Button className="bg-transparent" onClick={authModal.onOpen}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
