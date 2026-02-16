import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ProductCard from './ProductCard';

const products = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  name: '12v Compact Battery Jump Starter',
  category: 'Cars',
  price: '$35.90',
  reviews: '321,975',
}));

export default function PopularProducts() {
  return (
    <section className="py-[50px] bg-white relative font-['Exo_2',sans-serif]">
      <div className="w-[1410px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-[30px]">
          <h2 className="text-[30px] font-semibold text-[#0f2041] uppercase">New & Popular Products</h2>
          <a href="#" className="text-[13px] font-semibold text-[#222] uppercase group">
            SHOP ALL PRODUCTS
            <div className="w-[50px] h-[2px] bg-[#222] mt-[4px] group-hover:w-full transition-all"></div>
          </a>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          <div className="grid grid-cols-5 gap-[34px]">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Arrow Navigation */}
          <button className="absolute -left-[36px] top-[158px] w-[65px] h-[65px] rounded-full border border-[#ddd] flex items-center justify-center bg-white hover:bg-[#0f2041] hover:text-white hover:border-[#0f2041] transition text-[#222]">
            <FiChevronLeft size={24} />
          </button>
          <button className="absolute -right-[33px] top-[158px] w-[65px] h-[65px] rounded-full border border-[#ddd] flex items-center justify-center bg-white hover:bg-[#0f2041] hover:text-white hover:border-[#0f2041] transition text-[#222]">
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
