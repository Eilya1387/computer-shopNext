"use client";

import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";

const schema = Yup.object({
  phone: Yup.string()
    .matches(/^09\d{9}$/, "شماره همراه معتبر نیست")
    .required("شماره همراه الزامی است"),
  name: Yup.string()
    .min(2, "نام باید حداقل ۲ کاراکتر باشد")
    .required("نام الزامی است"),
});

export default function Register() {
  const router = useRouter();
  const fullText = "به شات لند خوش آمدید";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const renderText = () => {
    const highlight = "شات لند";
    const startIndex = displayedText.indexOf(highlight);
    if (startIndex === -1) return displayedText;
    return (
      <>
        {displayedText.slice(0, startIndex)}
        <span className="text-orange-400 font-bold">
          {displayedText.slice(startIndex, startIndex + highlight.length)}
        </span>
        {displayedText.slice(startIndex + highlight.length)}
      </>
    );
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center md:justify-start bg-cover bg-center md:px-20"
      style={{ backgroundImage: "url('/images/camera.jpg')" }}
    >
      <div className="w-full max-w-[460px] bg-[#5B6E82]/95 rounded-2xl p-8 sm:p-10 text-white backdrop-blur mx-4">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Image src="/images/logo.png" alt="logo" width={40} height={40} />
          </div>
        </div>

        <p className="text-center mb-6 text-black text-lg">{renderText()}</p>

        <p className="text-right text-sm mb-4 text-gray-50">ثبت نام</p>

        <Formik
          initialValues={{ phone: "", name: "" }}
          validationSchema={schema}
          onSubmit={(values) => {
            // ذخیره شماره تلفن در localStorage برای استفاده در صفحه code
            if (typeof window !== "undefined") {
              localStorage.setItem("userPhone", values.phone);
              localStorage.setItem("userName", values.name);
            }
            toast.success(`${values.name} عزیز، کد تایید ارسال شد`);
            setTimeout(() => {
              router.push("/auth/code");
            }, 1000);
          }}
        >
          {({ values, handleChange, errors, touched }) => {
            const isValid =
              values.phone.length === 11 && values.name.length > 0;

            return (
              <Form className="space-y-6">
                {/* Phone Input */}
                <div className="relative">
                  <div className="flex bg-white rounded-md overflow-hidden text-black">
                    <div className="px-2 flex items-center">
                      <Image
                        src="/images/iran.png"
                        alt="iran flag"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className="px-2 text-gray-500 flex items-center">
                      +98
                    </div>
                    <div className="w-px bg-gray-300 my-2"></div>
                    <input
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      placeholder="شماره همراه"
                      maxLength={11}
                      className="peer flex-1 p-3 outline-none text-right placeholder:text-right rounded-md"
                    />
                  </div>
                  {errors.phone && touched.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-orange-500 transition-all duration-500 ease-out peer-focus:w-full" />
                </div>

                {/* Name Input */}
                <div className="relative">
                  <div className="bg-white rounded-md overflow-hidden">
                    <input
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="نام و نام خانوادگی"
                      className="peer w-full p-3 outline-none text-black text-right placeholder:text-right rounded-md"
                    />
                  </div>
                  {errors.name && touched.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-orange-500 transition-all duration-500 ease-out peer-focus:w-full" />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`group relative w-full py-3 rounded-md overflow-hidden transition-all duration-300 ${
                    isValid
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-gray-400 text-gray-900 cursor-not-allowed"
                  }`}
                >
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    ←
                  </span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                    تایید و ادامه
                  </span>
                </button>

                {/* Login Link */}
                <p className="text-center text-sm text-gray-300">
                  قبلاً عضو شده‌اید؟{" "}
                  <span
                    className="text-orange-400 cursor-pointer hover:underline"
                    onClick={() => router.push("/auth/login")}
                  >
                    وارد شوید
                  </span>
                </p>

                {/* Divider */}
                <div className="flex items-center my-4">
                  <div className="flex-1 h-px bg-gray-400"></div>
                  <span className="px-3 text-sm text-gray-300">یا</span>
                  <div className="flex-1 h-px bg-gray-400"></div>
                </div>

                {/* Google Login */}
                <button
                  type="button"
                  className="w-full border border-white rounded-md py-3 flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
                >
                  <Image src="/images/google.png" alt="google" width={20} height={20} />
                  <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent font-semibold">
                    ورود با گوگل
                  </span>
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
