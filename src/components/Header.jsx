export default function Header() {
  return (
    <header className="bg-[#0f2041] w-full font-['Exo_2',sans-serif]">
      {/* Top Bar - border spans full width */}
      <div className="border-b border-white/20">
        <div className="w-[1410px] mx-auto">
          <div className="flex items-center justify-between pt-[10px] pb-[8px] text-white text-[13px] font-normal">
            <div className="flex items-center gap-[24px]">
              <a href="#" className="hover:text-[#f6cd46] transition">Shipping</a>
              <a href="#" className="hover:text-[#f6cd46] transition">FAQ</a>
              <a href="#" className="hover:text-[#f6cd46] transition">Contact</a>
              <a href="#" className="hover:text-[#f6cd46] transition">Track Order</a>
            </div>
            <div className="flex items-center gap-[20px]">
              <div className="flex items-center gap-[24px] text-white text-[12px]">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
              </div>
              <div className="flex items-center gap-[16px] ml-[20px]">
                <button className="flex items-center gap-[6px] text-white text-[13px]">
                  English <img src="/assets/dropdown-arrow.svg" alt="" className="w-[12px] h-[12px] rotate-180" />
                </button>
                <button className="flex items-center gap-[6px] text-white text-[13px]">
                  $ USD <img src="/assets/dropdown-arrow.svg" alt="" className="w-[12px] h-[12px] rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="w-[1410px] mx-auto pt-[43px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="block">
            <img src="/assets/logo.svg" alt="UOMO" className="h-[27px]" />
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-[40px] text-white text-[15px] font-semibold">
            <a href="#" className="hover:text-[#f6cd46] transition">HOME</a>
            <a href="#" className="hover:text-[#f6cd46] transition">SHOP</a>
            <a href="#" className="hover:text-[#f6cd46] transition">COLLECTION</a>
            <a href="#" className="hover:text-[#f6cd46] transition">JOURNAL</a>
            <a href="#" className="hover:text-[#f6cd46] transition">LOOKBOOK</a>
            <a href="#" className="hover:text-[#f6cd46] transition">PAGES</a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-[20px]">
            <span className="text-white text-[15px] font-semibold uppercase">Need help? 0020 500</span>
            <div className="flex items-center gap-[20px]">
              {/* User */}
              <a href="#" className="relative w-[20px] h-[20px]">
                <img src="/assets/user-head.svg" alt="" className="absolute top-0 left-[25.79%] w-[48.42%] h-[50.97%]" />
                <img src="/assets/user-body.svg" alt="" className="absolute bottom-0 left-[3.41%] w-[93.18%] h-[43.67%]" />
              </a>
              {/* Heart */}
              <a href="#" className="w-[20px] h-[20px] flex items-center justify-center">
                <img src="/assets/heart.svg" alt="" className="w-full h-[83.24%]" />
              </a>
              {/* Cart */}
              <a href="#" className="relative w-[20px] h-[20px]">
                <img src="/assets/shopping-bag.svg" alt="" className="w-[84.38%] h-full mx-auto" />
                <img src="/assets/cart-badge.svg" alt="" className="absolute -top-[6px] -right-[8px] w-[16px] h-[16px]" />
                <span className="absolute -top-[5px] -right-[7px] text-white text-[10px] font-medium w-[16px] h-[16px] flex items-center justify-center">3</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar Row */}
      <div className="w-[1410px] mx-auto pt-[41px] pb-[29px]">
        <div className="flex gap-[30px]">
          {/* Browse Categories Button */}
          <button className="bg-[#f6cd46] text-[#0f2041] rounded-[8px] h-[50px] px-[22px] flex items-center gap-[14px] font-semibold text-[14px] uppercase w-[286px]">
            {/* Hamburger Icon */}
            <div className="flex flex-col gap-[4px]">
              <div className="w-[25px] h-[2px] bg-[#0f2041]"></div>
              <div className="w-[20px] h-[2px] bg-[#0f2041]"></div>
              <div className="w-[25px] h-[2px] bg-[#0f2041]"></div>
            </div>
            Browse Categories
            <img src="/assets/chevron-down.svg" alt="" className="w-[12px] h-[7px] ml-auto rotate-180" />
          </button>

          {/* Search Input */}
          <div className="flex-1 flex items-center bg-white rounded-[8px] border border-[#e4e4e4] h-[50px] overflow-hidden">
            <div className="flex items-center pl-[28px] pr-[12px]">
              <div className="relative w-[20px] h-[20px]">
                <img src="/assets/search-body.svg" alt="" className="absolute top-0 left-0 w-[88.08%] h-[88.08%]" />
                <img src="/assets/search-handle.svg" alt="" className="absolute bottom-0 right-0 w-[31.44%] h-[31.44%]" />
              </div>
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 text-[14px] text-[#767676] outline-none bg-transparent"
            />
            <div className="flex items-center gap-[6px] px-[20px] border-l border-[#e4e4e4] h-full">
              <span className="text-[14px] font-semibold text-[#222] uppercase">All Category</span>
              <img src="/assets/chevron-small.svg" alt="" className="w-[10px] h-[10px] rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
