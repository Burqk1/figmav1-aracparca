const testimonials = [
  {
    title: 'Good theme',
    text: "Without JobHunt i'd be homeless, they found me a job and got me sorted out quickly with everything! Can't quite… The Mitech team works really hard to ensure high level of quality",
    name: 'Nicole Wells',
    role: 'Web Developer',
    active: false,
  },
  {
    title: 'Great quality!',
    text: "Without JobHunt i'd be homeless, they found me a job and got me sorted out quickly with everything! Can't quite… The Mitech team works really hard to ensure high level of quality",
    name: 'Gabriel Nolan',
    role: 'Consultant',
    active: true,
  },
  {
    title: 'Awesome Design',
    text: "Without JobHunt i'd be homeless, they found me a job and got me sorted out quickly with everything! Can't quite… The Mitech team works really hard to ensure high level of quality",
    name: 'Ashley Jenkins',
    role: 'Designer',
    active: false,
  },
];

export default function Testimonials() {
  return (
    <section className="py-[50px] bg-white font-['Exo_2',sans-serif]">
      <div className="w-[1800px] mx-auto">
        <h2 className="text-[30px] font-semibold text-[#0f2041] uppercase text-center mb-[50px]">
          Testimonials From Our Customers
        </h2>

        <div className="grid grid-cols-3 gap-[30px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`relative bg-white border border-[#e4e4e4] rounded-[8px] p-[40px] ${
                t.active
                  ? 'shadow-[0px_6px_15px_rgba(64,79,104,0.05)]'
                  : 'opacity-50'
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute top-[25px] right-[28px]">
                <img src="/assets/quote.svg" alt="" className="w-[34px] h-[26px]" />
              </div>

              <h4 className="text-[16px] font-semibold text-[#0f2041] uppercase mb-[20px]">{t.title}</h4>
              <p className="text-[16px] text-[#767676] leading-[26px] mb-[40px]">{t.text}</p>

              {/* User */}
              <div className="flex items-center gap-[20px]">
                <div className="w-[70px] h-[70px] shrink-0 relative">
                  <img src="/assets/user-circle.svg" alt="" className="w-full h-full" />
                  <img src="/assets/slide-main.png" alt="" className="absolute inset-[5px] w-[60px] h-[60px] rounded-full object-cover" />
                </div>
                <div>
                  <h5 className="text-[15px] font-semibold text-[#0f2041] uppercase">{t.name}</h5>
                  <p className="text-[14px] text-[#767676] mt-[2px]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center mt-[50px]">
          <img src="/assets/testimonial-dots.svg" alt="" className="w-[132px] h-[30px]" />
        </div>
      </div>
    </section>
  );
}
