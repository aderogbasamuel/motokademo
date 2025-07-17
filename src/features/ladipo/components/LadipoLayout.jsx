import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Icon } from "@iconify/react";
import { formatCurrency } from "../../../utils/formatCurrency";
import { maskCurrency } from "../../../utils/formatCurrency";

export default function LadipoLayout({ children, title, subTitle, mainContentTitle }) {
  
    const [showBalance, setShowBalance] = useState(() => {
      const savedState = localStorage.getItem("showBalance");
      return savedState !== null ? JSON.parse(savedState) : true;
    });
    const balance = 300000; // Example balance, replace with actual data
    
    useEffect(() => {
      localStorage.setItem("showBalance", JSON.stringify(showBalance));
    }, [showBalance]);
  const navigate = useNavigate();
  return (
    <>
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative mb-3 justify-between grid grid-cols-3">
          <button
            onClick={() => navigate("/dashboard")}
            className=" flex h-8 w-8 items-center justify-center rounded-full bg-[#E1E6F4] text-[#697C8C] transition-colors hover:bg-[#E5F3FF]"
          >
            <IoIosArrowBack className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-center text-xl font-medium text-[#05243F] md:text-2xl">
              {title}
            </h1>
            <p className="mt-2 text-center text-sm font-normal text-[#05243F]/40">
              {subTitle}
            </p>
          </div>
          <div className=" justify-self-end flex cursor-pointer items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm sm:gap-3 sm:px-4 sm:py-2 w-fit">
                    <span onClick={() => setShowBalance(!showBalance)}>
                      {showBalance ? (
                        <Icon icon="mingcute:eye-fill" fontSize={20} color="#697C8C" />
                      ) : (
                        <Icon icon="majesticons:eye-off" fontSize={20} color="#697C8C" />
                      )}
                    </span>
                    <span
                      className={`text-lg font-semibold text-[#2389E3] transition-opacity duration-300 ease-in-out sm:text-base ${
                        showBalance ? "opacity-100" : "opacity-70"
                      }`}
                    >
                      {showBalance ? (
                        formatCurrency(balance)
                      ) : (
                        <>
                        {/* <Icon
                          icon="mdi:shield-lock-outline"
                          fontSize={20}
                          color="#2389E3"
                        /> */}NGN
                        {maskCurrency(balance)}
                        </>
                      )}
                    </span>

          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-4 max-w-4xl rounded-[20px] bg-white pt-5 pb-10 shadow-sm sm:mx-auto">
        {children}
      </div>
    </>
  );
}
