"use client";
import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { IoHardwareChip } from "react-icons/io5";
import { MdOutlineBluetoothAudio } from "react-icons/md";
import { FaShield } from "react-icons/fa6";

interface ProductDetailProps {
  params: { id: string };
}

const ProductDetailPage = ({ params }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const product = {
    id: params.id,
    name: "Canon EOS R5",
    price: 15000000,
    rating: 4.8,
    reviews: 124,
    description:
      "یک دوربین حرفه‌ای بدون آینه با رزولوشن بالا و سیستم فوکوس پیشرفته. این دوربین برای عکاسان حرفه‌ای و علاقه‌مندان به عکاسی طراحی شده است.",
    images: ["/bag.jpg", "/bag.jpg", "/bag.jpg", "/bag.jpg"],
    features: [
      {
        icon: <BsFillCameraReelsFill />,
        title: "فیلمبرداری 8K",
        description: "ضبط ویدیوی با کیفیت",
      },
      {
        icon: <FaCamera />,
        title: "سنسور فول‌فریم 45MP",
        description: "تصاویر با جزئیات بالا",
      },
      {
        icon: <IoHardwareChip />,
        title: "دو درگاه کارت حافظه",
        description: "ذخیره‌سازی ایمن",
      },
      {
        icon: <MdOutlineBluetoothAudio />,
        title: "Wi-Fi و Bluetooth",
        description: "اتصال بی‌سیم",
      },
      {
        icon: <FaShield />,
        title: "بدنه مقاوم",
        description: "ضد آب و گرد و غبار",
      },
    ],
    specifications: {
      brand: "Canon",
      model: "EOS R5",
      sensor: "فول فریم 45 مگاپیکسل",
      video: "8K RAW 30fps",
      iso: "100-51200",
      weight: "738 گرم",
    },
    stock: 15,
    discount: 10,
  };

  const addToCart = () => {
    toast.success(`${quantity} عدد ${product.name} به سبد خرید اضافه شد`);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.info(
      isFavorite ? "از علاقه‌مندی‌ها حذف شد" : "به علاقه‌مندی‌ها اضافه شد"
    );
  };

  return (
    <div
      className="product-detail-page min-h-screen bg-linear-to-b from-slate-50 to-white py-8 sm:py-12"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <div className="aspect-square relative">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute top-6 right-6 flex flex-col gap-3">
                {product.discount > 0 && (
                  <span className="bg-linear-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-xl font-bold shadow-lg text-sm">
                    {product.discount}% تخفیف
                  </span>
                )}
                {product.stock < 20 && (
                  <span className="bg-linear-to-r from-orange-500 to-amber-600 text-white px-4 py-2 rounded-xl font-bold shadow-lg text-sm">
                    {product.stock} عدد باقی‌مانده
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square rounded-2xl overflow-hidden transition-all duration-300 ${
                    selectedImage === idx
                      ? "ring-4 ring-[#476f90] shadow-lg scale-105"
                      : "ring-2 ring-gray-200 hover:ring-[#f25c54] hover:scale-105"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`تصویر ${idx + 1}`}
                    fill
                    className="object-contain p-2 bg-gray-50"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${
                      i < Math.floor(product.rating)
                        ? "text-amber-500"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-bold text-gray-800">
                {product.rating}
              </span>
              <span className="text-gray-500">({product.reviews} نظر)</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              {product.name}
            </h1>

            <p className="text-gray-600 leading-7 text-base">
              {product.description}
            </p>

            <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">قیمت</p>
                  {product.discount > 0 && (
                    <p className="text-lg text-gray-400 line-through mb-1">
                      {product.price.toLocaleString()} تومان
                    </p>
                  )}
                  <p className="text-3xl font-bold text-[#476f90]">
                    {(
                      (product.price * (100 - product.discount)) /
                      100
                    ).toLocaleString()}{" "}
                    تومان
                  </p>
                </div>
                {product.discount > 0 && (
                  <div className="bg-linear-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-xl">
                    <p className="text-2xl font-bold">{product.discount}%</p>
                    <p className="text-xs">تخفیف</p>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                ویژگی‌های کلیدی
              </h3>
              {product.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl text-[#476f90] border-2 border-gray-100 hover:border-[#476f90]/30 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="w-12 h-12  from- rounded-xl flex items-center justify-center text-2xl transform transition-transform duration-300 ">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{feature.title}</p>
                    <p className="text-sm text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <div className="flex items-center gap-3 bg-white rounded-xl border-2 border-gray-200 px-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#f25c54] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <span className="text-lg font-bold w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() =>
                    setQuantity(Math.min(product.stock, quantity + 1))
                  }
                  className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#f25c54] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <button
                onClick={addToCart}
                className="flex-1 bg-linear-to-r from-[#f25c54] to-[#ff7a70] text-white py-4 rounded-xl font-bold text-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>

        {/* <div className="mt-12 bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">مشخصات فنی</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value], idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200"
              >
                <span className="text-gray-600">
                  {key === "brand"
                    ? "برند"
                    : key === "model"
                    ? "مدل"
                    : key === "sensor"
                    ? "سنسور"
                    : key === "video"
                    ? "ویدیو"
                    : key === "iso"
                    ? "ISO"
                    : "وزن"}
                  :
                </span>
                <span className="font-bold text-gray-800">{value}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductDetailPage;
