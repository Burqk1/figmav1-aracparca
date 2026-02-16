export default function HeroSlider() {
  const categories = [
    'INTERIOR', 'EXTERIOR', 'PERFORMANCE', 'LIGHTING',
    'WHEELS & TIRES', 'REPAIR PARTS', 'BODY PARTS',
    'AUDIO & ELECTRONICS', 'DAMPING'
  ];

  return (
    <section className="bg-white pt-[30px] font-['Exo_2',sans-serif]">
      <div className="w-[1410px] mx-auto">
        <div className="flex gap-[30px]">
          {/* Sidebar Categories */}
          <div className="w-[286px] shrink-0 bg-white border border-[#e4e4e4] rounded-[8px] overflow-hidden h-[500px]">
            <ul className="py-[10px]">
              {categories.map((cat) => (
                <li key={cat}>
                  <a href="#" className="flex items-center gap-[10px] px-[18px] py-[12px] text-[#0f2041] text-[14px] hover:bg-gray-50 hover:text-[#f6cd46] transition">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#0f2041] inline-block shrink-0"></span>
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Slider */}
          <div className="flex-1 bg-[#0f2041] rounded-[8px] relative overflow-hidden h-[500px] flex items-center">
            <div className="absolute inset-0">
              <img src="/assets/slide-main.png" alt="" className="w-full h-full object-cover opacity-50" />
            </div>
            <div className="relative z-10 pl-[70px]">
              <div className="flex items-center gap-[12px] mb-[12px]">
                <div className="w-[40px] h-[2px] bg-white"></div>
                <p className="text-[14px] text-white tracking-wider">SPECIAL OFFER</p>
              </div>
              <h1 className="text-[45px] font-semibold text-white leading-[1.1] capitalize">
                SAVE 20%<br />FIRST SERVICE
              </h1>
              <button className="mt-[32px] bg-[#f6cd46] text-[#0f2041] font-semibold text-[14px] px-[40px] py-[15px] rounded-[8px] hover:bg-yellow-400 transition">
                SHOP NOW
              </button>
            </div>
            <div className="absolute bottom-[24px] left-[70px]">
              <img src="/assets/slide-bullets.svg" alt="" className="w-[132px] h-[30px]" />
            </div>
          </div>

          {/* Right Side Banners */}
          <div className="flex flex-col gap-[30px] w-[330px] shrink-0">
            {/* Banner 1 - Yellow / Interior */}
            <div className="bg-[#f8da38] rounded-[8px] h-[235px] relative overflow-hidden flex items-center">
              <div className="absolute right-0 top-0 w-[65%] h-full">
                <img src="/assets/slide-interior.png" alt="" className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="relative z-10 pl-[44px]">
                <h3 className="text-[20px] font-semibold text-[#0f2041] leading-tight capitalize">
                  NEW ARRIVALS<br />INTERIOR
                </h3>
                <a href="#" className="mt-[12px] inline-block text-[13px] font-semibold text-[#0f2041] uppercase">
                  SHOP NOW
                  <div className="w-[47px] h-[2px] bg-[#0f2041] mt-[2px]"></div>
                </a>
              </div>
            </div>

            {/* Banner 2 - Dark / Tyres */}
            <div className="bg-[#f7f8fa] rounded-[8px] h-[235px] relative overflow-hidden flex items-center">
              <div className="absolute inset-0">
                <img src="/assets/slide-tyres.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10 pl-[44px]">
                <h3 className="text-[20px] font-semibold text-white leading-tight capitalize">
                  SAVE 35% ALL<br />SEASON TYRES
                </h3>
                <a href="#" className="mt-[12px] inline-block text-[13px] font-semibold text-white uppercase">
                  SHOP NOW
                  <div className="w-[47px] h-[2px] bg-white mt-[2px]"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
