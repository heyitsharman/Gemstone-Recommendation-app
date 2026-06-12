import { useParams, useNavigate } from 'react-router-dom';
import { gemstones } from '../utils/astrology';
import { useEffect, useState } from 'react';

export default function GemstoneDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inquired, setInquired] = useState(false);

  // Find gemstone by id
  const gem = gemstones.find(g => g.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!gem) {
    return (
      <div className="pt-40 pb-xl text-center max-w-md mx-auto px-margin-mobile">
        <span className="material-symbols-outlined text-error text-6xl mb-4">warning</span>
        <h2 className="font-headline-sm text-primary mb-2">Specimen Not Found</h2>
        <p className="text-on-surface-variant font-body-md mb-6">
          The gemstone you are looking for does not exist in our celestial archives.
        </p>
        <button
          onClick={() => navigate('/catalog')}
          className="bg-primary text-on-primary font-label-md px-6 py-3 rounded hover:opacity-90 transition-all cursor-pointer"
        >
          Return to Catalog
        </button>
      </div>
    );
  }

  const handleInquiry = () => {
    setInquired(true);
    alert(`Acquisition request received for ${gem.name}.\nOur digital alchemist circle will reach out to you within 24 hours.`);
    setTimeout(() => setInquired(false), 4000);
  };

  return (
    <main className="pt-24 pb-xl max-w-6xl mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Back button */}
      <button
        onClick={() => navigate('/catalog')}
        className="text-on-surface-variant font-label-md hover:text-primary transition-colors flex items-center gap-xs cursor-pointer mb-lg"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Crystalline Archive
      </button>

      {/* Main Layout Grid */}
      <section className="bg-surface-container-lowest rounded-xl shadow-[0_20px_50px_rgba(7,2,53,0.06)] overflow-hidden border border-surface-container-highest">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Canvas */}
         <div className="relative h-[350px] lg:h-[500px] overflow-hidden group">
            <img
              alt={gem.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              src={gem.img}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            <div className="absolute bottom-md left-md bg-surface/90 backdrop-blur-md px-md py-sm rounded-lg flex items-center gap-sm">
              <span className="material-symbols-outlined text-secondary">verified</span>
              <span className="font-label-md text-primary">{gem.certification}</span>
            </div>
          </div>

          {/* Curation Profile Info */}
          <div className="p-6 md:p-10 flex flex-col justify-center">
            <div className="flex justify-between items-start mb-md">
              <div>
                <span className="font-label-md text-secondary tracking-widest uppercase block mb-1">
                  {gem.rarity}
                </span>
                <h1 className="font-display-lg text-display-lg-mobile md:text-headline-md text-primary mb-xs">
                  {gem.name}
                </h1>
                <span className="bg-primary-fixed text-on-primary-fixed-variant px-sm py-1 rounded-full text-caption font-label-md">
                  {gem.title}
                </span>
              </div>
              <div className="text-right">
                <div className="font-label-md text-on-surface-variant mb-xs">ESTIMATED VALUE</div>
                <div className="text-headline-md font-display-lg text-secondary">
                  ${gem.price ? gem.price.toLocaleString() : 'P.O.R.'}
                </div>
              </div>
            </div>

            <hr className="gold-divider" />

            {/* Description */}
            <div className="space-y-md">
              <div>
                <h3 className="font-label-md text-primary mb-sm tracking-widest uppercase">Description</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  {gem.desc} Discover the geological wonder and spiritual properties of this unique specimen, hand-selected to elevate your alignment.
                </p>
              </div>

              {/* Astrological Parameters */}
              <div className="grid grid-cols-2 gap-sm py-2">
                <div className="bg-surface-container-low p-sm rounded-lg border border-surface-container">
                  <span className="font-caption text-outline block uppercase tracking-tighter">Zodiac Heritage</span>
                  <span className="font-label-md text-primary text-sm font-semibold">{gem.zodiacs.join(', ')}</span>
                </div>
                <div className="bg-surface-container-low p-sm rounded-lg border border-surface-container">
                  <span className="font-caption text-outline block uppercase tracking-tighter">Ruling Planet</span>
                  <span className="font-label-md text-primary text-sm font-semibold">{gem.planet}</span>
                </div>
              </div>

              <hr className="gold-divider" />

              {/* Wearing instructions */}
              <h3 className="font-label-md text-primary mb-sm tracking-widest uppercase">Alchemical Wearing Rituals</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
                <div>
                  <div className="font-caption text-outline uppercase mb-xs tracking-tighter">Finger</div>
                  <div className="font-label-md text-primary text-sm">{gem.finger}</div>
                </div>
                <div>
                  <div className="font-caption text-outline uppercase mb-xs tracking-tighter">Metal</div>
                  <div className="font-label-md text-primary text-sm">{gem.metal}</div>
                </div>
                <div>
                  <div className="font-caption text-outline uppercase mb-xs tracking-tighter">Day</div>
                  <div className="font-label-md text-primary text-sm">{gem.day}</div>
                </div>
                <div>
                  <div className="font-caption text-outline uppercase mb-xs tracking-tighter">Ideal Weight</div>
                  <div className="font-label-md text-primary text-sm">{gem.weight}</div>
                </div>
              </div>

              <hr className="gold-divider" />

              {/* Specimen properties */}
              <h3 className="font-label-md text-primary mb-sm tracking-widest uppercase">Physical & Energetic Properties</h3>
              <div className="grid grid-cols-3 gap-md">
                <div>
                  <div className="font-caption text-outline uppercase mb-xs tracking-tighter">Clarity</div>
                  <div className="font-label-md text-primary text-sm">{gem.clarity}</div>
                </div>
                <div>
                  <div className="font-caption text-outline uppercase mb-xs tracking-tighter">Provenance</div>
                  <div className="font-label-md text-primary text-sm">{gem.origin}</div>
                </div>
                <div>
                  <div className="font-caption text-outline uppercase mb-xs tracking-tighter">Resonance</div>
                  <div className="font-label-md text-primary text-sm">{gem.resonance}</div>
                </div>
              </div>

              <hr className="gold-divider" />

              {/* Key Benefits */}
              <div>
                <h3 className="font-label-md text-primary mb-sm tracking-widest uppercase">Key Benefits</h3>
                <div className="flex flex-wrap gap-sm">
                  {gem.benefits.map((benefit, index) => (
                    <span
                      key={index}
                      className="bg-surface-container-high px-sm py-1 rounded-full text-caption text-primary flex items-center gap-xs"
                    >
                      <span className="material-symbols-outlined text-sm">auto_awesome</span>
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-xl flex flex-col sm:flex-row gap-sm">
              <button
                onClick={handleInquiry}
                className="flex-1 bg-primary text-on-primary font-label-md py-4 rounded hover:opacity-90 transition-all flex items-center justify-center gap-sm shadow-lg cursor-pointer"
              >
                <span className="material-symbols-outlined">
                  {inquired ? 'check_circle' : 'diamond'}
                </span>
                {inquired ? 'Inquiry Submitted' : 'Request Acquisition Details'}
              </button>
              <button
                onClick={() => navigate('/recommend')}
                className="flex-1 border-2 border-primary text-primary font-label-md py-4 rounded hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-sm cursor-pointer"
              >
                <span className="material-symbols-outlined">auto_awesome</span>
                Check My Compatibility
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
