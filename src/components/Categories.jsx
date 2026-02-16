const categories = [
  'BREAK SYSTEM', 'DAMPING', 'BODY', 'ENGINE', 'FILTERS', 'OILS',
];

export default function Categories() {
  return (
    <section className="py-[50px] bg-white font-['Exo_2',sans-serif]">
      <div className="w-[1410px] mx-auto">
        <div className="flex items-center justify-between mb-[40px]">
          <h2 className="text-[30px] font-semibold text-[#0f2041] uppercase">Shop by categories</h2>
          <a href="#" className="text-[13px] font-semibold text-[#222] uppercase group">
            SHOP ALL PRODUCTS
            <div className="w-[50px] h-[2px] bg-[#222] mt-[4px] group-hover:w-full transition-all"></div>
          </a>
        </div>

        <div className="flex items-start justify-between">
          {categories.map((cat) => (
            <a href="#" key={cat} className="flex flex-col items-center gap-[14px] group cursor-pointer">
              <div className="w-[145px] h-[145px] relative flex items-center justify-center group-hover:opacity-80 transition">
                <img src="/assets/circle-bg.svg" alt="" className="absolute inset-0 w-full h-full" />
                <img src="/assets/slide-main.png" alt={cat} className="relative w-[95px] h-[95px] object-cover rounded-full" />
              </div>
              <span className="text-[15px] font-semibold text-[#0f2041] uppercase text-center">{cat}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
