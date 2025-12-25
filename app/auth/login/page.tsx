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
    .required("وارد کردن شماره الزامی است"),
});

export default function Login() {
  const router = useRouter();
  const fullText = "با خنده وارد شوید";
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
    const highlight = "خنده";
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

        <Formik
          initialValues={{ phone: "" }}
          validationSchema={schema}
          onSubmit={(values) => {
            if (typeof window !== "undefined") {
              localStorage.setItem("userPhone", values.phone);
            }
            toast.success(`کد تایید به ${values.phone} ارسال شد`);
            setTimeout(() => {
              router.push("/auth/code");
            }, 1000);
          }}
        >
          {({ values, handleChange, errors, touched }) => {
            const isValid = values.phone.length === 11;

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
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`w-full py-3 rounded-md transition-all duration-300 ${
                    isValid
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-gray-400 text-gray-900 cursor-not-allowed"
                  }`}
                >
                  تایید و ادامه
                </button>

                {/* Register Link */}
                <p className="text-center text-sm text-gray-300 mt-2">
                  عضو نیستید؟{" "}
                  <span
                    className="text-orange-400 cursor-pointer hover:underline"
                    onClick={() => router.push("/auth/register")}
                  >
                    عضو شوید
                  </span>
                </p>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
