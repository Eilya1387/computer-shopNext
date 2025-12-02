import React from "react";

type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "دوربین کنون",
    price: "53.000.000تومان",
    image: "/images/canon.webp",
  },
  {
    id: 2,
    title: "دوربین کنون",
    price: "53.000.000تومان",
    image: "/images/canon.webp",
  },
  {
    id: 3,
    title: "دوربین کنون",
    price: "53.000.000تومان",
    image: "/images/canon.webp",
  },
  {
    id: 4,
    title: "دوربین کنون",
    price: "53.000.000تومان",
    image: "/images/canon.webp",
  },
];

const BestSellerProducts: React.FC = () => (
  <section className="bg-gray-100 mt-12 py-8 px-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
      محصولات پرفروش فروشگاه
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {products.map((p) => (
        <div key={p.id} className="bg-white rounded-lg shadow p-4 text-center">
          <img src={p.image} alt={p.title} className="mx-auto mb-4" />
          <p className="text-lg font-medium text-gray-800">{p.title}</p>
          <p className="text-blue-600 font-bold mt-2">{p.price}</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            اضافه کردن به سبد خرید
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default BestSellerProducts;
