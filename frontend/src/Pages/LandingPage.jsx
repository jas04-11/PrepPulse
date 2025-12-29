import React, { useContext, useState } from "react";
import { APP_FEATURES } from "../utils/data.js";
import HERO_IMG from "../assets/HERO_IMG.png";
import { useNavigate } from "react-router-dom";
import { LuSparkles } from "react-icons/lu";
import Login from "./Auth/Login.jsx";
import SignUp from "./Auth/SignUp.jsx";
import { Modal } from "../components/Modal.jsx";
import { UserContext } from "../context/userContext.jsx";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard.jsx";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [openAuthModel, setOpenAuthModel] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModel(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <div className="w-full min-h-full bg-[#FEC5F6] relative overflow-hidden">
        {/* background blur */}
        <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-pink-200/20 blur-[65px] absolute top-0 left-0" />

        <div className="container mx-auto px-4 pt-6 pb-40 relative z-10">
          {/* Header */}
          <header className="flex justify-between items-center mb-12">
            <div className="text-lg sm:text-xl text-black font-bold">
              PrepPulse AI
            </div>

            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className="bg-linear-to-r from-[#C562AF] to-[#DB8DD0] text-xs sm:text-sm font-semibold text-white px-5 sm:px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer"
                onClick={() => setOpenAuthModel(true)}
              >
                Login / Sign Up
              </button>
            )}
          </header>

{/* Hero content */}
<div className="max-w-7xl mx-auto">
  <div className="flex flex-col md:flex-row items-start justify-between gap-12">

    {/* LEFT SECTION */}
    <div className="w-full md:w-1/2">
      <div className="flex items-center mb-4">
        <div className="flex items-center gap-2 text-[12px] sm:text-[13px] text-[#B33791] font-semibold bg-pink-100 px-3 py-1 rounded-full border border-pink-300">
          <LuSparkles /> AI Powered
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
        Start your Interview prepration with <br />
        <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,#B33791_0%,#C562AF_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
          AI-Powered
        </span>{" "}
        Learning
      </h1>
    </div>

    {/* RIGHT SECTION */}
    <div className="w-full md:w-1/2 flex flex-col gap-6 md:mt-10.5">
      <p className="text-[15px] sm:text-[17px] text-gray-900 max-w-md">
        Get role-specific questions, expand answers when you need them,
        dive deeper into concepts, and organize everything in your own
        way. From preparation to mastery – your ultimate toolkit is here.
      </p>

      <button
        className="bg-black w-fit text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-[#B33791] hover:text-white border border-white transition-colors cursor-pointer"
        onClick={handleCTA}
      >
        Get Started
      </button>
    </div>

  </div>
</div>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="w-full relative z-10">
        <section className="flex items-center justify-center -mt-28 md:-mt-36 px-4 mt-10px">
          <img
            src={HERO_IMG}
            alt="hero"
            className="w-full max-w-6xl rounded-lg"
          />
        </section>

        {/* FEATURES */}
        <div className="w-full bg-[#FEC5F6] mt-10">
          <div className="container mx-auto px-4 pt-10 pb-20">
            <section className="mt-5">
              <h2 className="text-xl sm:text-2xl font-medium text-center mb-12">
                Features that make you shine
              </h2>

              <div className="flex flex-col items-center gap-8">
                {/* first 3 cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  {APP_FEATURES.slice(0, 3).map((feature) => (
                    <div
                      key={feature.id}
                      className="bg-[#FFFCEF] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-pink-400 transition border border-pink-100"
                    >
                      <h3 className="text-base font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* remaining */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {APP_FEATURES.slice(3).map((feature) => (
                    <div
                      key={feature.id}
                      className="bg-[#FFFCEF] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-pink-400 transition border border-pink-100"
                    >
                      <h3 className="text-base font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-xs sm:text-sm bg-gray-50 text-secondary text-center p-5 mt-5">
          Copyright &#169; 2026
        </div>
      </div>

      {/* AUTH MODAL */}
      <Modal
        isOpen={openAuthModel}
        onClose={() => {
          setOpenAuthModel(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && (
            <Login setCurrentPage={setCurrentPage} />
          )}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
