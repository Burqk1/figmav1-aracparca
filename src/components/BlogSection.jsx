const blogPosts = [
  {
    title: 'Attract Sales And Profits',
    excerpt: 'A job ravenously while Far much that one rank beheld after outside....',
    date: 'August 31, 2021',
    comments: '12 Comment',
  },
  {
    title: 'Attract Sales And Profits',
    excerpt: 'A job ravenously while Far much that one rank beheld after outside....',
    date: 'August 31, 2021',
    comments: '12 Comment',
  },
  {
    title: 'Attract Sales And Profits',
    excerpt: 'A job ravenously while Far much that one rank beheld after outside....',
    date: 'August 31, 2021',
    comments: '12 Comment',
  },
  {
    title: 'Attract Sales And Profits',
    excerpt: 'A job ravenously while Far much that one rank beheld after outside....',
    date: 'August 31, 2021',
    comments: '12 Comment',
  },
];

export default function BlogSection() {
  return (
    <section className="py-[50px] bg-white font-['Exo_2',sans-serif]">
      <div className="w-[1410px] mx-auto">
        <h2 className="text-[30px] font-semibold text-[#0f2041] uppercase text-center mb-[40px]">
          Recent News Articles
        </h2>

        <div className="grid grid-cols-4 gap-[30px]">
          {blogPosts.map((post, i) => (
            <article
              key={i}
              className="bg-white border border-[#e4e4e4] rounded-[8px] overflow-hidden shadow-[0px_6px_15px_rgba(64,79,104,0.05)]"
            >
              {/* Image */}
              <div className="h-[220px] bg-[#202124] overflow-hidden rounded-t-[8px]">
                <img src="/assets/slide-main.png" alt="" className="w-full h-full object-cover opacity-60" />
              </div>

              {/* Content */}
              <div className="px-[30px] pt-[30px] pb-[30px]">
                <div className="flex items-center gap-[12px] text-[14px] text-[#767676] mb-[25px]">
                  <span>{post.date}</span>
                  <img src="/assets/dot-separator.svg" alt="" className="w-[5px] h-[5px]" />
                  <span>{post.comments}</span>
                </div>

                <h3 className="text-[15px] font-semibold text-[#0f2041] uppercase mb-[15px]">{post.title}</h3>
                <p className="text-[14px] text-[#767676] leading-[17px] mb-[25px]">{post.excerpt}</p>

                <a href="#" className="flex items-center gap-[8px] text-[13px] font-semibold text-[#0f2041] uppercase hover:text-[#f6cd46] transition">
                  Read More
                  <img src="/assets/arrow-right.svg" alt="" className="w-[12px] h-[12px]" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
