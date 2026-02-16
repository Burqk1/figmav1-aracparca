import { FaStar } from 'react-icons/fa';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-[#e4e4e4] rounded-[4px] shadow-[0px_0px_30px_0px_rgba(0,0,0,0.1)] group cursor-pointer font-['Exo_2',sans-serif]">
      {/* Image */}
      <div className="relative w-full h-[200px] bg-[#f5f5f5] rounded-t-[4px] overflow-hidden flex items-center justify-center">
        <img src="/assets/slide-main.png" alt={product.name} className="max-w-[190px] max-h-[190px] object-contain" />

        {/* Hover Actions */}
        <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 flex gap-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button className="w-[40px] h-[40px] bg-[#f3e8d6] rounded-full flex items-center justify-center hover:bg-[#0f2041] transition">
            <img src="/assets/hover-bag.svg" alt="" className="w-[14px] h-[14px]" />
          </button>
          <button className="w-[40px] h-[40px] bg-[#f3e8d6] rounded-full flex items-center justify-center hover:bg-[#0f2041] transition">
            <img src="/assets/hover-eye.svg" alt="" className="w-[18px] h-[18px]" />
          </button>
          <button className="w-[40px] h-[40px] bg-[#86bc42] rounded-full flex items-center justify-center hover:bg-[#0f2041] transition">
            <img src="/assets/hover-heart.svg" alt="" className="w-[14px] h-[14px]" />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-[16px] pb-[10px] px-[20px]">
        <span className="text-[13px] font-medium text-[#767676]">{product.category}</span>
        <h3 className="text-[16px] font-normal text-[#0f2041] mt-[4px] leading-[24px]">{product.name}</h3>
        <div className="flex items-center gap-[3px] mt-[6px]">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={12} className="text-[#eeba36]" />
          ))}
          <span className="text-[13px] text-[#767676] ml-[6px]">{product.reviews}</span>
        </div>
        <p className="text-[16px] font-semibold text-[#86bc42] mt-[8px]">{product.price}</p>
      </div>
    </div>
  );
}
