"use client";

import { useState } from "react";
import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section
      className={`sidebar w-[45%] h-screen bg-gradient-to-br from-[#ffcabe] flex flex-col justify-between items-center pb-12 backdrop-blur-2xl fixed top-0 z-50 lg:hidden transition-all duration-500 ease-in ${
        isOpen ? "translate-x-0" : "translate-x-[470px]"
      }`}
      style={{ right: 0 }}
    >
      <div className="sidebar-items text-black flex flex-col justify-evenly items-center pt-20 relative gap-[4rem]">
        <div
          className="close-btn rounded-full bg-[#ffad9b]/90 w-8 h-8 absolute top-5 left-5 cursor-pointer flex items-center justify-center"
          onClick={onClose}
        >
          <Image src="/Header/XCircle.webp" alt="close" width={32} height={32} />
        </div>

        <button className="sidebar-item--1 flex flex-row-reverse items-center justify-center gap-2 w-full z-10">
          <p>صفحه اصلی</p>
          <Image src="/Header/Home.webp" alt="home" width={24} height={24} className="w-[15%]" />
        </button>

        <div className="sidebar-item__dropdown__wrap flex flex-col relative items-center w-full">
          <button
            className="sidebar__dropdown__button w-full text-center flex flex-row-reverse items-center justify-evenly"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <p>دسته بندی ها</p>
            <Image src="/Header/arrow-down.webp" alt="arrow" width={16} height={16} />
          </button>
          <ul
            className={`side-dropdown flex flex-col transition-all duration-300 ease-in ${
              isDropdownOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <li className="sb-li py-2">تستی</li>
            <li className="sb-li py-2">تستی</li>
            <li className="sb-li py-2">تستی</li>
          </ul>
        </div>

        <button className="sidebar-item--1 flex flex-row-reverse items-center justify-center gap-2 w-full">
          <p>تخفیف دار ها</p>
          <Image src="/Header/discount-svgrepo-com.webp" alt="discount" width={24} height={24} className="w-[15%]" />
        </button>

        <button className="sidebar-item--1 flex flex-row-reverse items-center justify-center gap-2 w-full">
          <p>درباره ما</p>
          <Image src="/Header/InformationCircle.webp" alt="info" width={24} height={24} className="w-[15%]" />
        </button>
      </div>

      <div className="sidebar-login__wrap flex w-[90%] gap-1.5 mb-0">
        <button className="sidebar-login__btn--login w-1/2 bg-[#506e8f] text-white py-3 rounded-lg hover:bg-[#3d5570] transition">
          ورود
        </button>
        <button className="sidebar-login__btn--register w-1/2 bg-white py-3 rounded-lg hover:bg-gray-100 transition">
          ثبت نام
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
