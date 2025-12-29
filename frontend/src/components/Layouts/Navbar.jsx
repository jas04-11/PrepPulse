import React from "react";
import ProfileInfoCard from "../Cards/ProfileInfoCard";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="
      fixed top-0 left-0 w-full
      h-16
      bg-white/90
      border-b border-gray-200/50
      backdrop-blur-[6px]
      py-2.5 px-4 md:px-0
      z-50
    ">
      <div className="container mx-auto flex items-center justify-between gap-5">
        <Link to="/">
          <h2 className="text-lg md:text-xl font-medium text-black leading-5">
            PrepPulse AI
          </h2>
        </Link>

        <ProfileInfoCard />
      </div>
    </div>
  );
};

export default Navbar;
