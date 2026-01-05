"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  discount?: number;
}

type SortType = "newest" | "popular" | "cheapest" | "expensive";

const ProductsPage = () => {
  const [selectedSort, setSelectedSort] = useState<SortType>("newest");
  const [favorites, setFavorites] = useState<number[]>([]);

  const sortOptions: { id: SortType; label: string }[] = [
    { id: "newest", label: "جدیدترین" },
    { id: "popular", label: "محبوب‌ترین" },
    { id: "cheapest", label: "ارزان‌ترین" },
    { id: "expensive", label: "گران‌ترین" },
  ];

  const products: Product[] = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `کیف دوربین Profox ${i + 1}`,
    price: 800000 + i * 50000,
    rating: 3.2 + (i % 3) * 0.5,
    image: "/bag.jpg",
    discount: i % 4 === 0 ? 15 : undefined,
  }));

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const addToCart = (product: Product) => {
    console.log("Added to cart:", product);
  };

  return (
    <div
      className="products-page-wrapper min-h-screen bg-linear-to-b from-slate-50 to-white py-8 sm:py-12"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="mb-8 sm:mb-12">
          <div className="md:hidden mb-6">
            <h3 className="text-lg sm:text-xl text-gray-600 flex items-center gap-2">
              <span className="text-gray-400">شات لند</span>
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
              همه محصولات
            </h3>
          </div>

          <div className="md:hidden flex gap-2 overflow-x-auto pb-4 hide-scrollbar">
            {sortOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedSort(option.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 whitespace-nowrap transition-all duration-300 ${
                  selectedSort === option.id
                    ? "bg-linear-to-r from-[#f25c54] to-[#ff7a70] text-white border-[#f25c54] shadow-lg scale-105"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#f25c54] hover:text-[#f25c54]"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
                </svg>
                <span className="text-sm font-medium">{option.label}</span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-linear-to-br from-[#476f90] to-[#3d5a73] rounded-xl flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                </svg>
              </div>
              <p className="text-lg font-bold text-gray-800">مرتب سازی:</p>
            </div>

            <div className="flex gap-3 flex-wrap">
              {sortOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedSort(option.id)}
                  className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 transform ${
                    selectedSort === option.id
                      ? "bg-linear-to-r from-[#f25c54] to-[#ff7a70] text-white shadow-lg scale-105"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700 hover:scale-105"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        <main className="products-grid">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group product-card bg-white rounded-3xl border-2 border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-[#476f90]/30 relative"
              >
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                  {product.discount && (
                    <span className="bg-linear-to-r from-red-500 to-pink-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                      {product.discount}% تخفیف
                    </span>
                  )}
                </div>

                <Link href={`/products/${product.id}`}>
                  <div className="relative w-full h-56 sm:h-64 flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className=" w-60 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                    />
                  </div>
                </Link>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <Link href={`/products/${product.id}`}>
                      <h4 className="text-base sm:text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-[#476f90] line-clamp-1">
                        {product.name}
                      </h4>
                    </Link>
                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
                      <span className="text-sm font-bold text-gray-700">
                        {product.rating}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-amber-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      {product.discount && (
                        <span className="text-xs text-gray-400 line-through">
                          {product.price.toLocaleString()} تومان
                        </span>
                      )}
                      <span className="text-lg font-bold text-gray-800">
                        {product.discount
                          ? (
                              product.price *
                              (1 - product.discount / 100)
                            ).toLocaleString()
                          : product.price.toLocaleString()}{" "}
                        تومان
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(product)}
                      className="cursor-pointer w-12 h-12 bg-linear-to-br from-[#f25c54] to-[#ff7a70] rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 active:scale-95"
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
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ProductsPage;
