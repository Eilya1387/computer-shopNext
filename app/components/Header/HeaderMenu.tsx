"use client";

import { useState } from "react";
import Image from "next/image";

interface HeaderMenuProps {
  onOpenSidebar: () => void;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ onOpenSidebar }) => {
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);

  return (
    <menu className="header-menu w-full h-[42px] md:h-[75px]">
      {/* Mobile Menu */}
      <div className="header-menu--mobile flex flex-row-reverse justify-between items-center md:hidden">
        <div className="header-menu__wrap__left w-[78px] h-10 flex items-center gap-2.5">
          <i className="header-menu__wrap__left--1 w-full h-full flex justify-center items-center p-1.5">
            <Image src="/Header/bb2423ec7e3cf88aac03f054fc77aafbc070500e.webp" alt="logo" width={44} height={44} />
          </i>
          <i
            className="header-menu__wrap__left--2 w-full h-full flex justify-center items-center cursor-pointer"
            onClick={onOpenSidebar}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </i>
        </div>

        <div className="header-menu__wrap__right w-[128px] h-10 flex">
          <button className="header-menu__wrap__right--1 w-full h-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M19.333 25.3333C22.6467 25.3333 25.333 22.647 25.333 19.3333C25.333 16.0195 22.6467 13.3333 19.333 13.3333C16.0193 13.3333 13.333 16.0195 13.333 19.3333C13.333 22.647 16.0193 25.3333 19.333 25.3333Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24.6196 25.7931C24.973 26.8598 25.7796 26.9665 26.3996 26.0331C26.9663 25.1798 26.593 24.4798 25.5663 24.4798C24.8063 24.4731 24.3796 25.0665 24.6196 25.7931Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="header-menu__wrap__right--2 w-full h-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="header-menu__wrap__right--3 w-full h-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8.00033 7.99992C9.84127 7.99992 11.3337 6.50753 11.3337 4.66658C11.3337 2.82564 9.84127 1.33325 8.00033 1.33325C6.15938 1.33325 4.66699 2.82564 4.66699 4.66658C4.66699 6.50753 6.15938 7.99992 8.00033 7.99992Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.7268 14.6667C13.7268 12.0867 11.1601 10 8.0001 10C4.8401 10 2.27344 12.0867 2.27344 14.6667" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Tablet Menu */}
      <div className="header-menu--md hidden md:flex lg:hidden h-full justify-between items-center">
        <i className="header-menu__icon__right--md w-[30%] h-full flex justify-center items-center p-1.5">
          <Image src="/Header/bb2423ec7e3cf88aac03f054fc77aafbc070500e.webp" alt="logo" width={44} height={44} />
        </i>
        <i className="header-menu__icon__left--md w-[30%] h-full flex justify-center items-center cursor-pointer" onClick={onOpenSidebar}>
          <Image src="/Header/Category - Iconly Pro.webp" alt="menu" width={24} height={24} />
        </i>
      </div>

      {/* Desktop Menu */}
      <div className="header-menu--lg hidden lg:flex h-full justify-around items-center">
        <div className="header-menu__icon__right--lg h-full flex justify-center items-center p-1.5">
          <Image src="/Header/bb2423ec7e3cf88aac03f054fc77aafbc070500e.webp" alt="logo" width={44} height={44} />
        </div>

        <nav className="header-menu__navbar--lg flex justify-evenly items-center gap-5">
          <div className="navbar__item cursor-pointer hover:text-blue-600 transition">صفحه اصلی</div>

          <div className="navbar__item--dropdown relative">
            <button 
              className="navbar-dropdown__btn flex flex-row-reverse gap-1.5 items-center" 
              onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
            >
              <p>دسته بندی ها</p>
              <Image 
                src="/Header/arrow-down.webp" 
                alt="arrow" 
                width={16} 
                height={16}
                className={`transition-transform duration-300 ${isNavDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <ul 
              className={`navbar-dropdown__items absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg min-w-[200px] transition-all duration-300 ease-in z-50 ${
                isNavDropdownOpen ? "max-h-[500px] opacity-100 visible" : "max-h-0 opacity-0 invisible"
              } overflow-hidden`}
            >
              <li className="nav-li py-2 px-4 hover:bg-gray-100 cursor-pointer first:rounded-t-lg">تستی</li>
              <li className="nav-li py-2 px-4 hover:bg-gray-100 cursor-pointer">تستی</li>
              <li className="nav-li py-2 px-4 hover:bg-gray-100 cursor-pointer">تستی</li>
              <li className="nav-li py-2 px-4 hover:bg-gray-100 cursor-pointer">تستی</li>
              <li className="nav-li py-2 px-4 hover:bg-gray-100 cursor-pointer last:rounded-b-lg">تستی</li>
            </ul>
          </div>

          <div className="navbar__item cursor-pointer hover:text-blue-600 transition">تخفیف دار ها</div>
          <div className="navbar__item cursor-pointer hover:text-blue-600 transition">درباره ما</div>
        </nav>

        <div className="header-menu__icons__left--lg w-[128px] h-10 flex">
          <button className="header-menu__wrap__left--1 w-full h-full flex justify-center items-center">
            <Image src="/Header/MagnifyingGlass.webp" alt="search" width={24} height={24} />
          </button>
          <button className="header-menu__wrap__left--2 w-full h-full flex justify-center items-center">
            <Image src="/Header/ShoppingBag.webp" alt="cart" width={24} height={24} />
          </button>
          <button className="header-menu__wrap__left--3 w-full h-full flex justify-center items-center">
            <Image src="/Header/User.webp" alt="user" width={24} height={24} />
          </button>
        </div>
      </div>
    </menu>
  );
};

export default HeaderMenu;
