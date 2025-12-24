"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  comment: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "معین رضایی",
    image: "/images/person.jpg",
    rating: 5,
    comment:
      "پشتیبانی فروشگاه خیلی عالی بود و من رو در انتخاب دوربیـن مناسب کمک کردنـد. توضیحاتشــون کامــلاً واضح و کاربردی بود. تجربه خرید خیلی خوبی داشتم.",
  },
  {
    id: 2,
    name: "سارا محمدی",
    image: "/images/person.jpg",
    rating: 5,
    comment:
      "کیفیت محصولات عالی و قیمت‌ها واقعاً مناسب بود. ارسال هم سریع انجام شد و همه چیز طبق وعده پیش رفت. حتماً دوباره خرید می‌کنم.",
  },
  {
    id: 3,
    name: "علی اکبری",
    image: "/images/person.jpg",
    rating: 4,
    comment:
      "دوربینی که خریدم دقیقاً همون چیزی بود که می‌خواستم. مشاوره تیم فروش واقعاً حرفه‌ای بود. ممنون از تیم شما.",
  },
  {
    id: 4,
    name: "مریم حسینی",
    image: "/images/person.jpg",
    rating: 5,
    comment:
      "بهترین فروشگاهی که تا حالا ازش خرید کردم. هم از نظر کیفیت محصولات و هم از نظر خدمات پس از فروش عالی بودند.",
  },
];

const TestimonialsSlider: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="slider-container w-full min-h-[300px] sm:min-h-[320px] md:min-h-[280px] font-vazir my-10 mx-auto flex items-center justify-center px-5">
      <div className="relative w-full h-full">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 4.5,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full h-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="!w-[90%] sm:!w-[85%] md:!w-[80%] lg:!w-[75%]"
            >
              <div className="slider bg-[#4C637C] w-full mx-auto flex flex-col gap-4 sm:gap-6 relative text-white rounded-2xl h-auto min-h-[250px] sm:min-h-[280px] md:min-h-[250px] px-4 sm:px-6 py-4 sm:py-5 shadow-lg">
                {/* Top Section */}
                <div className="slider-top__con flex gap-4 sm:gap-7 items-center">
                  <div className="slider-top__pic w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-white/30 overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="slider-top__content flex flex-col sm:flex-row gap-2 sm:justify-between w-full sm:w-[70%]">
                    <h3 className="slider-top__name text-base sm:text-lg font-semibold">
                      {testimonial.name}
                    </h3>

                    <div className="slider-top__rating flex gap-0.5">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill={index < testimonial.rating ? "#FFC107" : "#E0E0E0"}
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="slider-bottom__con w-full flex-1 pr-4 sm:pr-8 pl-2 sm:pl-3 pb-12 sm:pb-14">
                  <p className="slider-bottom__content font-vazir text-sm sm:text-base leading-6 sm:leading-7 text-white/95">
                    {testimonial.comment}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="slider-btn__con absolute -bottom-5 sm:-bottom-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-6 sm:gap-8 z-10">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="slider-btn__right bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="22"
              viewBox="0 0 22 24"
              fill="none"
              className="sm:w-[22px] sm:h-[24px]"
            >
              <path
                d="M0 12.0118V17.0222C0 23.2337 4.31103 25.7858 9.57599 22.6707L13.8136 20.1561L18.0513 17.6415C23.3162 14.5264 23.3162 9.4409 18.0513 6.32579L13.8136 3.81118L9.57599 1.29658C4.31103 -1.76223 0 0.771138 0 7.00136V12.0118Z"
                fill="#4C637C"
              />
            </svg>
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="slider-btn__left bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="22"
              viewBox="0 0 22 24"
              fill="none"
              className="rotate-180 sm:w-[22px] sm:h-[24px]"
            >
              <path
                d="M0 12.0118V17.0222C0 23.2337 4.31103 25.7858 9.57599 22.6707L13.8136 20.1561L18.0513 17.6415C23.3162 14.5264 23.3162 9.4409 18.0513 6.32579L13.8136 3.81118L9.57599 1.29658C4.31103 -1.76223 0 0.771138 0 7.00136V12.0118Z"
                fill="#4C637C"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
