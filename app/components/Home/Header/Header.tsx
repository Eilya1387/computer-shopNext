"use client";

import { useState } from "react";
import Image from "next/image";
import HeaderMenu from "./HeaderMenu";
import Sidebar from "./Sidebar";

const Header: React.FC = () => {


  return (
    <>
      <header className="header w-full min-h-[663px]">


        <div className="header-main-wrapper flex w-full gap-5">
          <section className="header-banner relative overflow-clip h-[588px] rounded-b-3xl md:rounded-t-3xl bg-[#506e8f] flex flex-col justify-center items-center gap-3 w-full min-w-[375px] md:flex-row-reverse">
            <div className="header__socails text-white absolute top-5 right-7 z-50">
              <h3 className="mb-2">ما را دنبال کنید</h3>
              <ul className="flex justify-between gap-2">
                <li>
                  <Image src="/Header/facebook 1.webp" alt="facebook" width={24} height={24} />
                </li>
                <li>
                  <Image src="/Header/instagram 1.webp" alt="instagram" width={24} height={24} />
                </li>
                <li>
                  <Image src="/Header/facebook 1.webp" alt="facebook" width={24} height={24} />
                </li>
              </ul>
            </div>

            <div className="header-banner__picture w-[334px] h-[335px] flex justify-center items-center md:w-full lg:max-w-[850px]">
              <Image src="/Header/c59cb0675d84097aa2a312c929999cc3293bf7f2.png" alt="header banner" width={850} height={335} className="banner__img w-full" />
            </div>

            <div className="banner-bottom text-white w-[80%] h-full flex flex-col justify-evenly items-start md:text-balance md:items-center md:h-[40%] md:justify-between">
              <h4 className="banner__bottom__title flex-wrap text-xl w-full font-vasir-light md:text-3xl md:w-full md:text-center">
                فروشــــــگاه تخصصـی انواع تجهیزات عکاسی و نورپردازی
              </h4>
              <p className="banner__botstom__text flex-wrap w-[90%] font-extralight text-sm font-vasir-light md:text-lg md:text-center">
                بهترین تجهیزات عکاســی برای ثبت زیبایـــی های زندگی، همیـــن جا در دسترس شماست!
              </p>
              <button className="banner__bottom__text flex-wrap w-full text-md bg-[#F26E50] mx-auto rounded-xl h-[3rem] md:hidden hover:bg-[#d95a3c] transition">
                فروشگاه
              </button>
            </div>
          </section>

          <section className="header-side-section w-[30%] h-full hidden lg:grid justify-between">
            <div className="side-sec__top flex justify-center items-center flex-col">
              <Image src="/Header/sale.webp" alt="sale" width={300} height={200} className="w-[95%]" />
            </div>
            <div className="side-sec__mid p-5 flex flex-col items-start gap-7">
              <p className="side-sec__mid__text text-sm">
                تخفیف های ویژه روی جدیترین مدل های دوربین و تجهیزات عکاسی! فرصت را از دست ندهید.دوربین های سفری و کامپکت و..
              </p>
              <button className="side-sec__mid__button w-[80%] h-12 bg-[#c7715e] border-4 border-[#ffbfb09f] rounded-md text-white hover:bg-[#a85d4d] transition">
                مشاهده تخفیف ها
              </button>
            </div>
            <div className="side-sec__bottom gap-2.5 flex flex-col w-full">
              <div className="side-sec__bottom__title flex items-center gap-1.5 text-center">
                <i className="side-sec__bottom__icon w-5">
                  <Image src="/Header/camera.webp" alt="camera" width={20} height={20} />
                </i>
                <h3 className="side-sec__bottom__text text-xl text-center">محبوب ترین برند ها:</h3>
              </div>
              <div className="side-sec__bottom__items grid grid-cols-3 grid-rows-2 w-[90%] gap-1.5">
                {["تستی", "تستی", "تستی", "تستی", "تستی", "تستی"].map((item, idx) => (
                  <div key={idx} className="side-sec__bottom__item p-2 bg-gray-100 rounded text-center cursor-pointer hover:bg-gray-200 transition">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </header>


    </>
  );
};

export default Header;
