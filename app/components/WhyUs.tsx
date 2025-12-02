import React from "react";
import { FiCheckCircle, FiCreditCard, FiBarChart2, FiTruck } from "react-icons/fi";

const features = [
  { icon: FiCheckCircle, text: "ضمانت اصالت کالا" },
  { icon: FiCreditCard, text: "پرداخت نقد و اقساط" },
  { icon: FiBarChart2, text: "قیمت های رقابتی" },
  { icon: FiTruck, text: "ارسال به سراسر ایران" },
];

const Whyus: React.FC = () => (
  <section>
    <header className="text-center py-8">
      <h1 className="text-4xl font-bold text-gray-800">چرا شاتلند</h1>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 text-center">
      {features.map(({ icon: Icon, text }, idx) => (
        <div key={idx}>
          <Icon className="mx-auto w-12 h-12 text-blue-600" />
          <p className="mt-2 text-gray-700">{text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Whyus;
