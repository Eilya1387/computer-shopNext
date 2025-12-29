"use client";

import React, { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import Link from "next/link";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("لطفاً تمام فیلدها را پر کنید");
      return;
    }
    toast.success("پیام شما با موفقیت ارسال شد");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-wrapper w-full font-vazir">
      <header className="contact-header relative w-full min-h-[200px] sm:min-h-[250px] bg-gradient-to-r from-[#476f90] to-[#3d5a73] flex items-center justify-between px-6 sm:px-10 lg:px-20 py-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f25c54]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 animate-fade-in-down">
            تماس با ما
          </h1>
          <div className="flex items-center gap-3 text-sm sm:text-base text-blue-100">
            <span className="hover:text-white transition-colors cursor-pointer">
                <Link href="/">
              خانه
              </Link>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-white font-medium">ارتباط با ما</span>
          </div>
        </div>

        <div className="hidden lg:block relative w-[300px] h-[200px] animate-float">
          <Image
            src="/images/775aa7ec0716898696e7963963a501b8bb33d2ee.png"
            alt="contact illustration"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </header>

      <main className="contact-main max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="group contact-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#476f90] to-[#3d5a73] rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-800">شماره تماس</h2>
              <p className="text-lg text-gray-600 font-mono">۰۲۱-۲۲۰۰۲۲۰۰</p>
            </div>
          </div>

          <div className="group contact-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#f25c54] to-[#ff7a70] rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-800">ایمیل</h2>
              <p className="text-lg text-gray-600">support@email.com</p>
            </div>
          </div>

          <div className="group contact-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100 sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-800">آدرس</h2>
              <p className="text-base text-gray-600 leading-7">
                تهران، میدان ولیعصر، پاساژ امیری، پلاک ۰۱
              </p>
            </div>
          </div>
        </div>
      </main>

      <section className="contact-us bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <span className="inline-block bg-gradient-to-r from-[#f25c54] to-[#ff7a70] text-white text-sm font-bold px-6 py-2 rounded-full mb-4 shadow-lg">
              پیام به ما
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              با ما در تماس باشید
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-8 max-w-3xl mx-auto">
              از اینکه فروشگاه ما را برای خرید تجهیزات عکاسی انتخاب کرده‌اید،
              سپاسگزاریم. ما همیشه آماده پاسخگویی به سوالات، ارائه مشاوره تخصصی
              و دریافت نظرات ارزشمند شما هستیم.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 order-2 lg:order-1"
            >
              <div className="group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="نام و نام خانوادگی"
                  className="w-full h-14 px-5 bg-white rounded-2xl border-2 border-gray-200 text-gray-800 outline-none transition-all duration-300 focus:border-[#476f90] focus:ring-4 focus:ring-[#476f90]/20 placeholder:text-gray-400"
                />
              </div>

              <div className="group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ایمیل"
                  className="w-full h-14 px-5 bg-white rounded-2xl border-2 border-gray-200 text-gray-800 outline-none transition-all duration-300 focus:border-[#f25c54] focus:ring-4 focus:ring-[#f25c54]/20 placeholder:text-gray-400"
                />
              </div>

              <div className="group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="پیام شما..."
                  rows={6}
                  className="w-full px-5 py-4 bg-white rounded-2xl border-2 border-gray-200 text-gray-800 outline-none transition-all duration-300 focus:border-[#476f90] focus:ring-4 focus:ring-[#476f90]/20 resize-none placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="group relative w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#f25c54] to-[#ff7a70] text-white rounded-2xl font-bold text-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  ارسال پیام
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transform transition-transform duration-300 group-hover:-translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a70] to-[#f25c54] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>

            <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform transition-all duration-500 hover:scale-[1.02]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d70310.59734218048!2d2.2897549333938074!3d48.825974179972654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2sfr!4v1766864965619!5m2!1sfa!2sfr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px] lg:min-h-[550px]"
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
