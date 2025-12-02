import BestSellerProducts from "./components/BestSellerProducts";
import Whyus from "./components/WhyUs";

export default function Home() {
  return (
    <>
      <main className="bg-white font-sans" dir="rtl">
      <Whyus />
      <BestSellerProducts />
    </main>
    </>
  );
}
