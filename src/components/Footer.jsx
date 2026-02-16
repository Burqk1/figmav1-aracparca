export default function Footer() {
  return (
    <footer className="bg-[#0f2041] text-white font-['Exo_2',sans-serif]">
      {/* Newsletter */}
      <div className="w-[720px] mx-auto pt-[100px] pb-[100px] text-center">
        <h3 className="text-[30px] font-semibold uppercase mb-[23px]">Subscribe to our newsletter</h3>
        <p className="text-[14px] text-white/70 mb-[50px]">
          Be the first to get the latest news about trends, promotions, and much more!
        </p>

        {/* Form */}
        <div className="flex w-full">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-white text-[#808080] rounded-l-[8px] px-[28px] h-[60px] text-[14px] outline-none border border-[#e4e4e4]"
          />
          <button className="bg-[#f6cd46] text-[#0f2041] font-medium text-[14px] w-[150px] h-[60px] rounded-r-[8px] hover:bg-yellow-400 transition">
            JOIN
          </button>
        </div>

        {/* Links */}
        <div className="flex items-center justify-center gap-[40px] mt-[52px] text-[14px] text-white/60">
          <a href="#" className="hover:text-white transition">Returns Policy</a>
          <a href="#" className="hover:text-white transition">Track Your Order</a>
          <a href="#" className="hover:text-white transition">Shipping & Delivery</a>
        </div>

        {/* Social */}
        <div className="flex items-center justify-center gap-[36px] mt-[34px] text-white/60 text-[14px]">
          <a href="#" className="hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-white transition"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-white transition"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-white transition"><i className="fab fa-pinterest-p"></i></a>
          <a href="#" className="hover:text-white transition"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/15">
        <div className="w-[1410px] mx-auto py-[24px] flex items-center justify-between text-[14px] text-white/60">
          <span>&copy;2020 Uomo</span>
          <div className="flex items-center gap-[24px]">
            <span className="flex items-center gap-[6px]">
              <img src="/assets/dropdown-arrow.svg" alt="" className="w-[14px] h-[14px] rotate-180 opacity-60" />
              United Kingdom | English
            </span>
            <span className="flex items-center gap-[6px]">
              <img src="/assets/dropdown-arrow.svg" alt="" className="w-[14px] h-[14px] rotate-180 opacity-60" />
              $ USD
            </span>
          </div>

          {/* Scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-[45px] h-[45px] rounded-full border border-white/30 flex items-center justify-center hover:border-white hover:text-white transition"
          >
            <img src="/assets/arrow-up.svg" alt="" className="w-[14px] h-[14px]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
