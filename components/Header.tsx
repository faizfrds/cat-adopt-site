"use client";

import { HiSearch } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import SearchBar from "./SearchBar";

interface HeaderProps {
  className?: string;
  isOpen?: boolean;
}

const Header: React.FC<HeaderProps> = ({ className, isOpen }) => {

  return (
    <div className="flex justify-center w-screen md:h-[50vh] h-fit md:pb-10 pb-20 bg-auto bg-[url('/images/marquee-pic.png')]">
      <div className="w-8/12">
        <div className="flex text-white justify-center text-4xl md:pt-48 pt-32 text-center">
          Find your next fur buddy
        </div>

        <div className="lg:flex hidden justify-center">
            <SearchBar />
        </div>

        <div className="flex lg:hidden">
            
          {!isOpen ? (
            <SearchBar />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
