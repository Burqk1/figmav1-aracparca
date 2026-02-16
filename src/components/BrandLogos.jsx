const brands = [
  { src: '/assets/brand-1.png', w: 120, h: 19 },
  { src: '/assets/brand-2.png', w: 87, h: 20 },
  { src: '/assets/brand-3.png', w: 132, h: 22 },
  { src: '/assets/brand-4.png', w: 72, h: 21 },
  { src: '/assets/brand-5.png', w: 123, h: 31 },
  { src: '/assets/brand-6.png', w: 137, h: 22 },
  { src: '/assets/brand-7.png', w: 94, h: 21 },
];

export default function BrandLogos() {
  return (
    <section className="pt-[50px] pb-[70px] bg-white font-['Exo_2',sans-serif]">
      <div className="w-[1410px] mx-auto">
        <h2 className="text-[30px] font-semibold text-[#0f2041] uppercase text-center mb-[40px]">
          SHOP BY BRANDS
        </h2>

        <div className="flex items-center justify-between">
          {brands.map((brand, i) => (
            <a href="#" key={i} className="hover:opacity-70 transition">
              <img
                src={brand.src}
                alt=""
                style={{ width: `${brand.w}px`, height: `${brand.h}px` }}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
