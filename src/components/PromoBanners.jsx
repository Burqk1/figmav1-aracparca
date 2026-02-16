const banners = [
  {
    title: ['NEW ARRIVALS', 'INTERIOR'],
    bg: '#e94738',
    img: '/assets/banner-interior.png',
    blend: 'mix-blend-darken',
  },
  {
    title: ['ENGINE SERVICES', 'UP TO 20% OFF'],
    bg: '#222222',
    img: '/assets/banner-engine.png',
    blend: '',
  },
  {
    title: ['CUSTOMIZE', 'YOUR RIDE'],
    bg: '#f8da38',
    img: '/assets/banner-customize.png',
    blend: '',
  },
];

export default function PromoBanners() {
  return (
    <section className="py-[50px] bg-white font-['Exo_2',sans-serif]">
      <div className="w-[1410px] mx-auto">
        <div className="grid grid-cols-3 gap-[32px]">
          {banners.map((banner, i) => (
            <div
              key={i}
              className="rounded-[8px] h-[235px] relative overflow-hidden flex items-center"
              style={{ backgroundColor: banner.bg }}
            >
              {/* Görsel tüm alanı kaplıyor */}
              <div className="absolute inset-0">
                <img
                  src={banner.img}
                  alt=""
                  className={`w-full h-full object-cover ${banner.blend}`}
                />
              </div>

              {/* Metin sol tarafta */}
              <div className="relative z-10 pl-[44px]">
                <h3 className="text-[20px] font-semibold text-white leading-tight uppercase">
                  {banner.title[0]}<br />{banner.title[1]}
                </h3>
                <a href="#" className="mt-[12px] inline-block text-[13px] font-semibold text-white uppercase">
                  SHOP NOW
                  <div className="w-[47px] h-[2px] bg-white mt-[2px]"></div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
