import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const RoleInfoHeader = ({
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
}) => {
  return (
    <div className="bg-white relative">
      <div className="container mx-auto px-10 md:mx-0">
        <div className="h-[200px] flex flex-col justify-center relative z-10">
                        <Link to="/dashboard">
        <h2 className="text-lg md:text-xl font-medium text-black leading-5 mb-4">
          <IoIosArrowBack />

        </h2>
      </Link>



          <h2 className="text-2xl font-medium">{role}</h2>

          <p className="text-sm text-gray-900 mt-1">
            {Array.isArray(topicsToFocus)
              ? topicsToFocus.join(", ")
              : topicsToFocus}
          </p>

          <div className="flex items-center gap-3 mt-4">
            <div className="text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full">
              Experience: {experience} {experience === 1 ? "Year" : "Years"}
            </div>

            <div className="text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full">
              {questions?.length || 0} Q&A
            </div>

            <div className="text-[10px] font-semibold text-white bg-black px-3 py-1 rounded-full">
              Last Updated:{" "}
              {lastUpdated ? new Date(lastUpdated).toLocaleDateString() : "N/A"}
            </div>
          </div>
        </div>

        {/* background blobs */}
        <div className="w-[40vw] md:w-[30vw] h-[200px] absolute top-0 right-0 overflow-hidden">
          <div className="w-16 h-16 bg-pink-900 blur-[65px] animate-blob1" />
          <div className="w-16 h-16 bg-pink-700 blur-[65px] animate-blob2" />
          <div className="w-16 h-16 bg-pink-300 blur-[65px] animate-blob3" />
        </div>
      </div>
    </div>
  );
};

export default RoleInfoHeader;
