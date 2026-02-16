const features = [
  {
    icon: '/assets/icon-shipping.svg',
    title: 'Fast and Free Delivery',
    desc: 'Free delivery for all orders over $140',
  },
  {
    icon: '/assets/icon-headphone.svg',
    title: '24/7 Customer Support',
    desc: 'Friendly 24/7 customer support',
  },
  {
    icon: '/assets/icon-shield.svg',
    title: 'Money Back Guarantee',
    desc: 'We return money within 30 days',
  },
  {
    icon: '/assets/icon-gift.svg',
    title: 'Member Gifts',
    desc: 'Discount coupons weekends.',
  },
];

export default function Features() {
  return (
    <section className="bg-white pt-[40px] pb-[50px] font-['Exo_2',sans-serif]">
      <div className="w-[1410px] mx-auto">
        <div className="flex items-start justify-between">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-[16px]">
              <img src={f.icon} alt="" className="w-[45px] h-[45px] shrink-0" />
              <div>
                <h4 className="text-[15px] font-semibold text-[#0f2041] uppercase">{f.title}</h4>
                <p className="text-[14px] text-[#767676] mt-[4px]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
