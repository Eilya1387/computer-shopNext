import BestSellerProducts from "./components/Home/BestSellerProducts";
import BlogSection from "./components/Home/BlogSection";
import Header from "./components/Home/Header/Header";
import TestimonialsSlider from "./components/Home/TestimonialsSlider";
import Whyus from "./components/Home/WhyUs";

export default function Home() {
  return (
    <>
      <main className="bg-white font-sans" dir="rtl">
        <Header/>
        <Whyus />
        <BestSellerProducts />
        <BlogSection/>
        <TestimonialsSlider />
      </main>
    </>
  );
}
