"use client";

import { twMerge } from "tailwind-merge";
import {
  HiHeart,
  HiMenu,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineX,
  HiArrowSmRight,
  HiHome
} from "react-icons/hi";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useMemo, useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import Button from "./Button";
import Header from "./Header";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useNavbar from "@/hooks/useNavbar";

interface NavbarProps {
  className?: string;
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ className, children }) => {


  const router = useRouter();
  const authModal = useAuthModal();
  const navbarShow = useNavbar();


  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const pathname = usePathname();

  const checkPath = () => {
    if (pathname == "/") {
      return <Header />;
    }
  };

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      navbarShow.onClose;
      router.push("/");
      toast.success("Logged Out");
    }
  };

  const checkLogin = () => {
    if (!user) {
      return authModal.onOpen;
    } else {
      navbarShow.onClose;
      router.push("/fav");
    }
  };

  useLayoutEffect(() => {
    if (window.innerWidth > 1023) {
      if (pathname !== "/") navbarShow.onClose;
      else {
        navbarShow.onOpen;
      }
    } else {
      navbarShow.onClose();
      console.log("HLLELOEJFEFIJEO")
      console.log(navbarShow.isOpen)
    }
  }, []);


  return (
    <>
      <div className="flex justify-center stick bg-black">
        <div
          className={twMerge(
            "h-fit lg:w-8/12 w-full items-center p-4",
            className
          )}
        >
          <div className="flex items-center justify-between">
            <div className="text-cyan-600 font-bold p-4 flex items-center">
              <a className="text-3xl mr-12" href="/">
                Cats4You
              </a>

              <HiHome onClick={() => {router.push("/")}} className="hidden md:flex mr-4 hover:cursor-pointer" size={30}/>

              <button
                onClick={navbarShow.onToggle}
                className="group hidden lg:flex text-white font-bold hover:text-cyan-600 transition gap-x-2 text-lg"
              >
                More About Cats
                {!navbarShow.isOpen ? (
                  <HiOutlineChevronDown
                    className="group-hover:translate-y-0.5"
                    size={25}
                  />
                ) : (
                  <HiOutlineChevronUp
                    className="group-hover:translate-y-0.5"
                    size={25}
                  />
                )}
              </button>
            </div>

            <div className="flex gap-x-3 items-center">
              <button className="flex rounded-full p-2 bg-black justify-center hover:scale-105 hover:bg-white transition text-white hover:text-red-500 gap-x-2">
                <HiHeart onClick={checkLogin} size={25} />
                
              </button>

              <button
                onClick={navbarShow.onToggle}
                className="flex lg:hidden rounded-full p-2 bg-black justify-center hover:opacity-75 hover:scale-105 hover:bg-cyan-900 transition text-white gap-x-2"
              >
                <HiMenu className="text-white transition" size={25} />
              </button>

              {user ? (
                <div className="lg:flex hidden items-center gap-x-4">
                  <Button
                    onClick={handleLogout}
                    className="text-white bg-transparent"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="hidden md:flex justify-between items-center gap-x-2">
                  <>
                    <div>
                      <Button
                        className="bg-transparent text-white"
                        onClick={authModal.onOpen}
                      >
                        Sign Up
                      </Button>
                    </div>
                    <div>
                      <Button onClick={authModal.onOpen}>Login</Button>
                    </div>
                    
                  </>
                </div>
              )}
            </div>
          </div>
        </div>

        {navbarShow.isOpen ? (
          <>
            <div className="hidden lg:flex justify-between absolute w-full h-fit mt-24 bg-cyan-600 text-white text-lg">
              <div className="w-8/12 flex justify-center py-4 gap-x-20 ml-5" onClick={navbarShow.onClose}>
                <button
                  onClick={() => {
                    router.push("/cats");
                  }}
                >
                  All Cats
                </button>
                <button
                  onClick={() => {
                    navbarShow.onClose;
                    router.push("/upload");
                  }}
                >
                  Put Cat For Adoption
                </button>

                <button
                  onClick={() => {
                    navbarShow.onClose;
                    router.push("/");
                  }}
                >
                  Support
                </button>
              </div>
            </div>

            <div className="lg:hidden w-full h-screen bg-cyan-600 text-white fixed">
              <button onClick={navbarShow.onClose}>
                <HiOutlineX
                  className="text-white absolute top-[30px] right-[30px] inline-flex appearance-none items-center justify-center rounded-full focus:outline"
                  size={30}
                />
              </button>
              <div className="pl-12 mt-10 mb-10 text-2xl">
                <button
                  onClick={() => {
                    navbarShow.onClose;
                    router.push("/cats");
                  }}
                  className="group py-7 flex items-center"
                >
                  All Cats
                  <HiArrowSmRight />
                </button>
                <button
                  onClick={() => {
                    navbarShow.onClose;
                    router.push("/upload");
                  }}
                  className="group py-7 flex items-center"
                >
                  Upload Adoption Form
                  <HiArrowSmRight />
                </button>
                <button
                  onClick={() => router.push("/")}
                  className="group py-7 flex items-center"
                >
                  More Support
                  <HiArrowSmRight />
                </button>
              </div>

              {user ? (
                <div className="bg-cyan-700 mt-10 mb-10 py-10 text-3xl text-left">
                  <Button onClick={handleLogout} className="bg-trasparent pb-7">
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="bg-cyan-700 mt-10 py-10 mb-10 text-3xl text-left">
                  <Button
                    className="bg-transparent pb-7"
                    onClick={authModal.onOpen}
                  >
                    Sign Up
                  </Button>

                  <Button className="bg-transparent" onClick={authModal.onOpen}>
                    Login
                  </Button>
                </div>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>

      {checkPath()}
      {children}
    </>
  );
};

export default Navbar;
