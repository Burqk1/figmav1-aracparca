import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import Features from './components/Features';
import Categories from './components/Categories';
import SpecialOffers from './components/SpecialOffers';
import PromoBanners from './components/PromoBanners';
import PopularProducts from './components/PopularProducts';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import BrandLogos from './components/BrandLogos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSlider />
      <Features />
      <Categories />
      <SpecialOffers />
      <PromoBanners />
      <PopularProducts />
      <Testimonials />
      <BlogSection />
      <BrandLogos />
      <Footer />
    </div>
  );
}

export default App;
