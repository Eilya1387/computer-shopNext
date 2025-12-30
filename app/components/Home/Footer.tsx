import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t border-gray-200" dir="rtl">
      <div className="w-full flex justify-center mt-8 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#476f90] text-white rounded-2xl shadow-lg px-6 py-5 w-full max-w-4xl gap-6 md:gap-8">
          
          <div className="text-right flex-1 w-full">
            <h4 className="text-lg font-bold mb-1">از تخفیف‌هامون باخبر شید!</h4>
            <p className="text-xs text-blue-100 font-light opacity-90">به جمع ۲۰۰۰+ کاربر ما بپیوندید</p>
          </div>

          <div className="w-full md:w-auto flex-1 max-w-md">
            <div className="relative flex items-center w-full">
              <input
                type="email"
                placeholder="آدرس ایمیل شما..."
                className="w-full h-12 rounded-xl pr-4 pl-24 text-sm text-gray-700 outline-none border-2 border-transparent focus:border-blue-300 focus:ring-2 focus:ring-blue-200 transition-all bg-white text-right shadow-inner"
              />
              <button className="absolute left-1.5 top-1.5 bottom-1.5 bg-[#f25c54] text-white rounded-lg px-5 text-sm font-medium transition-all duration-300 hover:bg-[#d94a42] hover:shadow-md active:scale-95">
                عضویت
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-evenly items-start py-10 text-gray-600">

        <div className="flex flex-col gap-6 lg:col-span-4 items-center order-last ">
          <div className="flex flex-row gap-4 items-center justify-end bg-white p-2 rounded-lg shadow-sm border border-gray-100">
            <Image src="/logo2.jpg" alt="logo2" width={90} height={40} className="object-contain" />
            <div className="w-px h-8 bg-gray-300"></div>
            <Image src="/logo1.jpg" alt="logo1" width={80} height={40} className="object-contain" />
          </div>

          <p className="text-sm text-right leading-7 text-gray-500 max-w-xs">
            ما در فروشگاه کامپیوتر شاپ تلاش می‌کنیم بهترین قطعات و لوازم جانبی را با ضمانت اصالت و بهترین قیمت به دست شما برسانیم.
          </p>

          <div className="flex flex-row gap-4 mt-2 justify-center w-full">
            {[
              { src: "/tel.png", alt: "Telegram", bg: "hover:bg-blue-500" },
              { src: "/in.png", alt: "Instagram", bg: "hover:bg-pink-600" },
              { src: "/wh.png", alt: "WhatsApp", bg: "hover:bg-green-500" },
            ].map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 transition-all duration-300 ${item.bg} hover:text-white group`}
              >
                <Image src={item.src} alt={item.alt} width={20} height={20} className="group-hover:brightness-0 group-hover:invert transition-all" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-20 text-right">
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-gray-800 mb-5 flex items-center gap-2 text-lg">
              دسترسی سریع <span className="text-[#f25c54]">.</span>
            </h3>
            <ul className="space-y-3 text-sm flex flex-col items-center">
              {['صفحه اصلی', 'فروشگاه', 'وبلاگ', 'تماس با ما'].map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="relative group inline-block py-1">
                    <span className="relative z-10 transition-colors group-hover:text-[#476f90]">{item}</span>
                    <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#f25c54] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-gray-800 mb-5 flex items-center gap-2 text-lg">
              راه های ارتباطی <span className="text-[#f25c54]">.</span>
            </h2>
            <ul className="space-y-4 text-sm text-gray-600 w-full flex flex-col items-center">
              <li className="flex items-center gap-2 hover:text-gray-900 transition-colors cursor-default">
                <span className=" p-1.5 rounded-md">تماس:</span>
                <span className="font-mono">0912 345 6789</span> 
              </li>
              <li className="flex items-center gap-2 hover:text-gray-900 transition-colors cursor-default">
                <span className=" p-1.5 rounded-md">ایمیل:</span>
                <span className="font-mono">info@example.com</span> 
              </li>
              <li className="flex items-center gap-2 hover:text-gray-900 transition-colors cursor-default text-right">
              <span className=" p-1.5 rounded-md">آدرس:</span>
                <span>تهران، خیابان ولیعصر...</span> 
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-bold text-gray-800 mb-5 flex items-center gap-2 text-lg">
              خدمات مشتریان <span className="text-[#f25c54]">.</span>
            </h3>
            <ul className="space-y-3 text-sm flex flex-col items-center">
              {['راهنمای خرید', 'ارسال سفارشات', 'پیگیری سفارش', 'قوانین و مقررات'].map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="relative group inline-block py-1">
                    <span className="relative z-10 transition-colors group-hover:text-[#476f90]">{item}</span>
                    <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#f25c54] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          

        </div>
      </div>

      <div className="w-full bg-[#3d5a73] text-blue-100 text-xs py-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row-reverse justify-between items-center px-6 gap-2">
          <p className="text-right">
            © تمامی حقوق مادی و معنوی برای <span className="font-bold text-white">کامپیوتر شاپ</span> محفوظ است.
          </p>
          <p className="font-mono text-[10px] opacity-60">Designed & Developed by EDH</p>
        </div>
      </div>
    </footer>
  );
}
