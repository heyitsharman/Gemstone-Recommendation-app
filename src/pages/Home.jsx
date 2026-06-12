import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { gemstones } from '../utils/astrology';

export default function Home() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Get first 6 gemstones to display as featured
  const featuredGems = gemstones.slice(0, 6);

  const faqItems = [
    {
      q: "How accurate are the gemstone recommendations?",
      a: "Our recommendations are based on high-precision astronomical ephemeris data. We calculate planetary positions to within a fraction of a degree to ensure your stone matches your unique cosmic signature perfectly."
    },
    {
      q: "Are the gemstones you recommend ethically sourced?",
      a: "Yes. We strictly recommend stones and suppliers that adhere to international ethical mining standards. We believe the energy of a stone is influenced by its journey from the earth to your hands."
    },
    {
      q: "Can I use my existing gemstones?",
      a: "Absolutely. Our report will help you understand if your current stones are serving your celestial alignment or if they may be creating energetic friction based on your current cycle."
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-xl items-center relative z-10 w-full py-12">
          <div className="space-y-md text-center lg:text-left">
            <span className="font-label-md text-secondary-container tracking-[0.2em] uppercase text-4xl">Celestial Guidance</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg leading-tight text-3xl">
              Discover Your <br />
              <span className="italic text-gold">Perfect Gemstone</span>
            </h1>
            <p className="font-body-lg text-primary-fixed/80 max-w-2xl leading-relaxed text-4xl">
              Unlock the celestial wisdom of the stars. We analyze your birth details and zodiac sign to reveal the stones that resonate with your unique energy.
            </p>
            <div className="pt-md">
              <button
                onClick={() => navigate('/recommend')}
                className="bg-gold hover:bg-[#E5C04A] text-primary px-lg py-4 font-label-md tracking-wider transition-all duration-300 transform hover:-translate-y-1 active:scale-95 shadow-xl cursor-pointer"
              >
                GET RECOMMENDATION
              </button>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            {/* Gemstone Illustration */}
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
              <img
                className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(212,175,55,0.4)] animate-pulse-slow"
                alt="A macro photograph of a brilliant, multi-faceted royal blue sapphire floating in a dark, ethereal void."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Jyc3VmgLVlxX86m65Ng_1DJg9fKOWUfBP0cgUi8-OvYuDFPOfys9CGU-OrM7vxlgEjSI8sjKR9XMAVo4BSzETMpvoYh0TIOIpoTBv7vKwwXedsky5fSc0KOdLA3U19bEUTe2PUZClWvodOnWnH7Xuox6OZ75sE1MQr1ndj1FaDoxE2B0J0QjpzsurlqLLrHL3v9NG8NVaO1dXYgpA-E3sUifR5DxhQH1Jc9szlMIkQUygLWX9h-cyQ4CZHpyWnYSEROXWNuN0-ez"
              />
              {/* Floating golden accents */}
              <div className="absolute -top-4 -right-4 w-12 h-12 border border-gold/30 rounded-full animate-spin-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 border border-gold/20 rounded-full animate-reverse-spin"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-xl">
            <h2 className="font-headline-md text-primary mb-xs text-4xl">A Journey of Discovery</h2>
            <div className="w-24 h-[1px] bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto gold-border-gradient flex items-center justify-center mb-md rotate-45 group-hover:rotate-0 transition-transform duration-500">
                <span className="material-symbols-outlined text-gold -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-3xl">
                  edit_calendar
                </span>
              </div>
              <h3 className="font-headline-sm text-primary text-2xl mb-sm">1. Enter Birth Details</h3>
              <p className="text-on-surface-variant font-body-md px-gutter text-1xl">
                Precise data for accurate alignment with the celestial movements at your moment of arrival.
              </p>
            </div>
            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto gold-border-gradient flex items-center justify-center mb-md rotate-45 group-hover:rotate-0 transition-transform duration-500">
                <span className="material-symbols-outlined text-gold -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-3xl">
                  auto_awesome
                </span>
              </div>
              <h3 className="font-headline-sm text-primary text-2xl mb-sm">2. Get Zodiac Analysis</h3>
              <p className="text-on-surface-variant font-body-md px-gutter text-1xl">
                Our algorithms decode your celestial map, interpreting the positions of the planets and stars.
              </p>
            </div>
            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto gold-border-gradient flex items-center justify-center mb-md rotate-45 group-hover:rotate-0 transition-transform duration-500">
                <span className="material-symbols-outlined text-gold -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-3xl">
                  diamond
                </span>
              </div>
              <h3 className="font-headline-sm text-primary mb-sm text-2xl">3. Receive Gemstone Recommendation</h3>
              <p className="text-on-surface-variant font-body-md px-gutter text-1xl">
                The stone crafted by nature for you, perfectly aligned with your energetic blueprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gemstones Section */}
      <section className="py-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-lg gap-md">
            <div>
              <span className="font-label-md text-secondary tracking-widest uppercase">The Curator's Choice</span>
              <h2 className="font-headline-md text-primary">Ancestral Artifacts</h2>
            </div>
            <Link to="/catalog" className="text-on-surface-variant font-label-md border-b border-outline-variant pb-1 hover:text-primary transition-colors">
              View All Specimens
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {featuredGems.map((gem) => (
              <div
                key={gem.id}
                onClick={() => navigate(`/catalog/${gem.id}`)}
                className="bg-white p-6 gem-card-shadow border border-surface-variant/50 hover:border-gold/30 transition-all duration-500 group cursor-pointer"
              >
                <div className="aspect-square mb-md overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={gem.name}
                    src={gem.img}
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-headline-sm text-primary">{gem.name}</h4>
                  <p className="text-secondary italic font-body-md">'{gem.title}'</p>
                  <p className="text-caption text-outline line-clamp-2">{gem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-xl bg-primary text-white">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-xl">
            <span className="font-label-md text-gold tracking-widest">WHY AURELIAN?</span>
            <h2 className="font-headline-md mt-2">The Digital Alchemist's Advantage</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {/* Benefit 1 */}
            <div className="p-lg bg-primary-container border border-white/5 rounded-lg hover:bg-primary-container/80 transition-all group">
              <div className="mb-md text-gold">
                <span className="material-symbols-outlined text-4xl">person_pin</span>
              </div>
              <h3 className="font-headline-sm mb-sm group-hover:text-gold transition-colors">Personalized Suggestions</h3>
              <p className="text-on-primary-container font-body-md">
                We don't believe in one-size-fits-all. Every recommendation is uniquely calculated based on your precise astronomical birth coordinates.
              </p>
            </div>
            {/* Benefit 2 */}
            <div className="p-lg bg-primary-container border border-white/5 rounded-lg hover:bg-primary-container/80 transition-all group">
              <div className="mb-md text-gold">
                <span className="material-symbols-outlined text-4xl">star_half</span>
              </div>
              <h3 className="font-headline-sm mb-sm group-hover:text-gold transition-colors">Astrology-Based Insights</h3>
              <p className="text-on-primary-container font-body-md">
                Our system utilizes ancient Vedic and Western astrological principles, modernized through advanced computational algorithms.
              </p>
            </div>
            {/* Benefit 3 */}
            <div className="p-lg bg-primary-container border border-white/5 rounded-lg hover:bg-primary-container/80 transition-all group">
              <div className="mb-md text-gold">
                <span className="material-symbols-outlined text-4xl">description</span>
              </div>
              <h3 className="font-headline-sm mb-sm group-hover:text-gold transition-colors">Digital Reports</h3>
              <p className="text-on-primary-container font-body-md">
                Receive elegant, easy-to-understand PDF reports detailing your stone's properties, origin recommendations, and wearing rituals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-xl bg-surface relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-margin-mobile text-center relative z-10">
          <span className="material-symbols-outlined text-secondary/20 text-8xl absolute -top-10 left-1/2 -translate-x-1/2 select-none">
            format_quote
          </span>
          <p className="font-display-lg text-headline-md md:text-headline-md text-primary leading-relaxed italic mb-lg">
            "Finding my alignment through AURELIAN wasn't just about jewelry; it was a homecoming. My Blue Sapphire has become a focal point for my daily mindfulness, exactly as the analysis predicted."
          </p>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-surface-container-high mb-sm overflow-hidden border-2 border-gold/30">
              <img
                className="w-full h-full object-cover"
                alt="Julius Vane"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGHBAWAcrqofBRhmouTGUwFKNxGdYepOWC2e19leuy1EW1z--sGrLMCC5cWvFLt-UkyCrzIRqaLTdR6OZnwEaeoRrflnQq_GZHfPYl5vTOJiMh4VZ2XexS2oQ5RZF9LxxCLu6lTOnkHnR408q_mXhAetsIVWIWNJp2b2tNULIa0kJ9XR7RAZ_mxtALEzOx7XoEyKR-bhDVGGcTvK2F2X-kQ2Uq0IKgxFwFmelVqoyci6wwUqiBNhBqLFw28PiuOpy0AY4W1WH5TuGR"
              />
            </div>
            <h4 className="font-label-md text-primary tracking-widest uppercase">Julius Vane</h4>
            <span className="text-caption text-secondary uppercase tracking-widest mt-1">Crowned Patron</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-xl bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-xl">
            <h2 className="font-headline-md text-primary">Inquiries & Clarity</h2>
            <p className="text-on-surface-variant mt-2">Unveiling the mystery behind our process</p>
          </div>
          <div className="space-y-gutter">
            {faqItems.map((item, index) => {
              const isActive = activeFaq === index;
              return (
                <div
                  key={index}
                  className="border-b border-surface-variant pb-md group cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-headline-sm text-on-surface group-hover:text-secondary transition-colors">
                      {item.q}
                    </h3>
                    <span
                      className={`material-symbols-outlined text-outline group-hover:text-secondary transition-transform duration-300 ${
                        isActive ? 'rotate-180 text-secondary' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? 'max-h-40 mt-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-on-surface-variant font-body-md">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
