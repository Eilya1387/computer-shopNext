"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt?: string;
  image: string;
  category: string;
  readTime: string;
  views: number;
  size?: "large" | "medium" | "small";
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "راهنمای خرید دوربین عکاسی",
    image: "/images/cam.jpg",
    category: "آموزش",
    readTime: "5 دقیقه",
    views: 98,
    size: "large",
  },
  {
    id: 2,
    title: "بررسی دوربین sony A7 IV آیا ارزش خرید دارد؟",
    image: "/images/cam.jpg",
    category: "مقایسه محصول",
    readTime: "4 دقیقه",
    views: 167,
    size: "medium",
  },
  {
    id: 3,
    title: "بررسی دوربین sony A7 IV آیا ارزش خرید دارد؟",
    image: "/images/cam.jpg",
    category: "مقایسه محصول",
    readTime: "3 دقیقه",
    views: 120,
    size: "medium",
  },
  {
    id: 4,
    title: "بررسی دوربین sony A7 IV آیا ارزش خرید دارد؟",
    excerpt:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و",
    image: "/images/cam.jpg",
    category: "مقایسه محصول",
    readTime: "2 دقیقه",
    views: 85,
    size: "small",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-gradient-to-r from-[#f25c54] to-[#ff7a70] text-white text-sm font-bold px-6 py-2 rounded-full mb-4 shadow-lg">
            وبلاگ تخصصی
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            جدیدترین مقالات <span className="text-[#476f90]">دوربین عکاسی</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            آخرین اخبار، راهنماها و بررسی‌های تخصصی دنیای عکاسی
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href={`/blog/${blogPosts[0].id}`} className="group block h-full">
              <div className="relative h-[500px] sm:h-[600px] lg:h-full min-h-[550px] rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-500 group-hover:from-black/80" />

                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f25c54]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#476f90]/20 rounded-full blur-3xl" />

                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-gradient-to-r from-[#f25c54] to-[#ff7a70] text-white text-sm px-4 py-2 rounded-xl font-bold shadow-2xl backdrop-blur-sm border border-white/20">
                    {blogPosts[0].category}
                  </span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform transition-all duration-500 group-hover:bg-white/15">
                    <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
                      {blogPosts[0].title}
                    </h3>
                    <div className="flex gap-6 text-white/90 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="font-medium">{blogPosts[0].readTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="font-medium">{blogPosts[0].views} بازدید</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>


          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            <Link href={`/blog/${blogPosts[1].id}`} className="group block">
              <div className="relative h-[350px] rounded-3xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <Image
                  src={blogPosts[1].image}
                  alt={blogPosts[1].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#476f90]/95 via-[#476f90]/60 to-transparent transition-all duration-500 group-hover:from-[#476f90]/90" />

                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-[#476f90] text-xs px-3 py-1.5 rounded-lg font-bold shadow-lg">
                    {blogPosts[1].category}
                  </span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-white text-lg sm:text-xl font-bold leading-snug mb-3">
                    {blogPosts[1].title}
                  </h3>
                  <div className="flex gap-4 text-white/90 text-xs">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{blogPosts[1].readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{blogPosts[1].views} بازدید</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

   
            <Link href={`/blog/${blogPosts[2].id}`} className="group block">
              <div className="relative h-[350px] rounded-3xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <Image
                  src={blogPosts[2].image}
                  alt={blogPosts[2].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f25c54]/95 via-[#f25c54]/60 to-transparent transition-all duration-500 group-hover:from-[#f25c54]/90" />

                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-[#f25c54] text-xs px-3 py-1.5 rounded-lg font-bold shadow-lg">
                    {blogPosts[2].category}
                  </span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-white text-lg sm:text-xl font-bold leading-snug mb-3">
                    {blogPosts[2].title}
                  </h3>
                  <div className="flex gap-4 text-white/90 text-xs">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{blogPosts[2].readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{blogPosts[2].views} بازدید</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>


            <Link href={`/blog/${blogPosts[3].id}`} className="group block sm:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] hover:border-[#476f90]/30 h-full flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <div className="inline-block bg-[#476f90]/10 text-[#476f90] text-xs px-3 py-1.5 rounded-lg font-bold mb-4">
                    {blogPosts[3].category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 transition-colors duration-300 group-hover:text-[#476f90] leading-snug">
                    {blogPosts[3].title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-7 mb-6">
                    {blogPosts[3].excerpt}
                  </p>
                  <div className="flex gap-6 text-gray-500 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#476f90]/10 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>{blogPosts[3].readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#476f90]/10 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>{blogPosts[3].views} بازدید</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center sm:justify-end">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#476f90] to-[#3d5a73] flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

 
        <div className="mt-12 sm:mt-16 text-center">
          <Link href="/blog">
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#476f90] to-[#3d5a73] text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(71,111,144,0.4)] active:scale-95">
              مشاهده همه مقالات
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transform transition-transform duration-300 group-hover:-translate-x-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
