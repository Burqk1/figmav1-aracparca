import { useState } from 'react';
import ProductCard from './ProductCard';

const tabs = ['NEW ARRIVALS', 'BESTSELLERS', 'MOST VIEWED'];

const products = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: '12v Compact Battery Jump Starter',
  category: 'Cars',
  price: '$35.90',
  reviews: '321,975',
}));

export default function SpecialOffers() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="py-[50px] bg-white font-['Exo_2',sans-serif]">
      <div className="w-[1410px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-[30px]">
          <h2 className="text-[30px] font-semibold text-[#0f2041] uppercase">Special Offers On Car Parts</h2>
          <div className="flex items-center gap-[30px]">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`text-[13px] font-semibold uppercase transition ${
                  activeTab === i ? 'text-[#222]' : 'text-[#767676] hover:text-[#222]'
                }`}
              >
                {tab}
                {activeTab === i && (
                  <div className="w-[50px] h-[2px] bg-[#222] mt-[7px]"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid - 5 columns, 2 rows */}
        <div className="grid grid-cols-5 gap-x-[34px] gap-y-[30px]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
