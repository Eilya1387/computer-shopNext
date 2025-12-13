import BestSellerProducts from "./components/BestSellerProducts";
import Header from "./components/Header/Header";
import Whyus from "./components/WhyUs";

export default function Home() {
  return (
    <>
      <main className="bg-white font-sans" dir="rtl">
        <Header />
        <Whyus />
        <BestSellerProducts />
      </main>
    </>
  );
}
