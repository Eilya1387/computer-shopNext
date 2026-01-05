"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <section
        className={`sidebar w-[85%] sm:w-[400px] h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 flex flex-col justify-between items-center pb-8 fixed top-0 z-70 lg:hidden transition-all duration-500 ease-out shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-[120%]"
        }`}
        style={{ right: 0 }}
      >
        {/* Header with Close Button */}
        <div className="w-full relative">
          {/* Decorative Top Bar */}
          <div className="h-2 bg-linear-to-r from-[#476f90] via-[#f25c54] to-[#476f90]" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 left-6 w-10 h-10 rounded-full bg-linear-to-br from-[#f25c54] to-[#ff7a70] flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-90 active:scale-95 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Logo Section */}
          <div className="flex flex-col items-center pt-16 pb-8 px-6">
            <h2 className="text-xl font-bold text-gray-800 mb-1">فروشگاه شاتلند</h2>
            <p className="text-sm text-gray-500">بهترین تجهیزات عکاسی</p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="sidebar-items flex-1 w-full px-6 overflow-y-auto">
          <ul className="space-y-3">
            {/* Home */}
            <li>
              <Link
                href="/"
                className="group flex items-center justify-between w-full p-4 rounded-xl bg-white hover:bg-linear-to-r hover:from-[#476f90] hover:to-[#3d5a73] text-gray-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg transform hover:translate-x-[-4px]"
              >
                <span className="font-medium">صفحه اصلی</span>
                <div className="w-10 h-10 rounded-lg bg-blue-50 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#476f90] group-hover:text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
              </Link>
            </li>

            {/* Categories Dropdown */}
            <li>
              <div className="space-y-2">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="group flex items-center justify-between w-full p-4 rounded-xl bg-white hover:bg-linear-to-r hover:from-[#f25c54] hover:to-[#ff7a70] text-gray-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg transform hover:translate-x-[-4px]"
                >
                  <span className="font-medium">دسته بندی ها</span>
                  <div className="w-10 h-10 rounded-lg bg-orange-50 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 text-[#f25c54] group-hover:text-white transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>

                {/* Dropdown Items */}
                <ul
                  className={`space-y-2 pr-4 transition-all duration-300 ease-in-out ${
                    isDropdownOpen
                      ? "max-h-[300px] opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  {["دوربین دیجیتال", "لنز و اکسسوری", "نورپردازی", "تجهیزات استودیو"].map(
                    (item, index) => (
                      <li key={index}>
                        <Link
                          href={`/category/${index + 1}`}
                          className="block p-3 pr-6 rounded-lg text-gray-600 hover:bg-[#476f90]/10 hover:text-[#476f90] transition-all duration-300 border-r-2 border-transparent hover:border-[#476f90] transform hover:translate-x-[-2px]"
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </li>

            {/* Discounts */}
            <li>
              <Link
                href="/products"
                className="group flex items-center justify-between w-full p-4 rounded-xl bg-white hover:bg-linear-to-r hover:from-[#f25c54] hover:to-[#ff7a70] text-gray-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg transform hover:translate-x-[-4px]"
              >
                <span className="font-medium">محصولات</span>
                <div className="w-10 h-10 rounded-lg bg-orange-50 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#f25c54] group-hover:text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            </li>

            {/* About Us */}
            <li>
              <Link
                href="/contact"
                className="group flex items-center justify-between w-full p-4 rounded-xl bg-white hover:bg-linear-to-r hover:from-[#476f90] hover:to-[#3d5a73] text-gray-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg transform hover:translate-x-[-4px]"
              >
                <span className="font-medium">ارتباط با ما</span>
                <div className="w-10 h-10 rounded-lg bg-blue-50 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#476f90] group-hover:text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login/Register Buttons */}
        <div className="w-full px-6 pt-6 border-t border-gray-200">
          <div className="flex gap-3 mb-4">
            <Link
              href="/auth/login"
              className="flex-1 bg-linear-to-r from-[#476f90] to-[#3d5a73] text-white py-3 rounded-xl font-medium text-center shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              ورود
            </Link>
            <Link
              href="/auth/register"
              className="flex-1 bg-white border-2 border-[#476f90] text-[#476f90] py-3 rounded-xl font-medium text-center shadow-sm transform transition-all duration-300 hover:bg-[#476f90] hover:text-white hover:scale-105 active:scale-95"
            >
              ثبت نام
            </Link>
          </div>

         
        </div>
      </section>
    </>
  );
};

export default Sidebar;
