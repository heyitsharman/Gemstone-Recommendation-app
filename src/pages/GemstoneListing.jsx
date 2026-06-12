import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { gemstones } from '../utils/astrology';

const ITEMS_PER_PAGE = 6;

export default function GemstoneListing() {
  const navigate = useNavigate();

  // Search & Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZodiacs, setSelectedZodiacs] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState('All Celestial Bodies');
  const [maxPrice, setMaxPrice] = useState(50000);
  const [selectedType, setSelectedType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);

  // Extract unique planets for filter dropdown
  const planets = useMemo(() => {
    const allPlanets = gemstones.map(g => g.planet);
    return ['All Celestial Bodies', ...new Set(allPlanets)];
  }, []);

  // Extract unique zodiacs for filter checkboxes
  const zodiacs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

  // Toggle favorite status
  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  // Filter checklist toggles
  const handleZodiacChange = (zodiac) => {
    setSelectedZodiacs(prev =>
      prev.includes(zodiac) ? prev.filter(z => z !== zodiac) : [...prev, zodiac]
    );
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  const handleTypeSelect = (type) => {
    setSelectedType(prev => prev === type ? '' : type);
    setCurrentPage(1);
  };

  // Filtered dataset
  const filteredGemstones = useMemo(() => {
    return gemstones.filter(gem => {
      // Search term
      if (searchTerm && !gem.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      // Zodiac sign
      if (selectedZodiacs.length > 0 && !gem.zodiacs.some(z => selectedZodiacs.includes(z))) {
        return false;
      }
      // Planet
      if (selectedPlanet !== 'All Celestial Bodies' && gem.planet !== selectedPlanet) {
        return false;
      }
      // Price
      if (gem.price && gem.price > maxPrice) {
        return false;
      }
      // Gem Type
      if (selectedType && gem.type !== selectedType) {
        return false;
      }
      return true;
    });
  }, [searchTerm, selectedZodiacs, selectedPlanet, maxPrice, selectedType]);

  // Paginated dataset
  const totalPages = Math.ceil(filteredGemstones.length / ITEMS_PER_PAGE) || 1;
  const paginatedGemstones = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredGemstones.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredGemstones, currentPage]);

  const handlePageChange = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <main className="pt-32 pb-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Page Header */}
      <header className="mb-xl text-center md:text-left">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-xs">
          Crystalline Archive
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl">
          A curated exhibition of nature's most profound creations. Filter by planetary alignment or zodiac heritage to find your resonance.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-lg items-start">
        {/* Sidebar Filters */}
        <aside className="md:col-span-3 space-y-lg md:sticky md:top-32">
          <div className="bg-surface-container-low p-md rounded-xl border border-outline-variant/30">
            {/* Search Input */}
            <div className="mb-md">
              <label className="font-label-md text-primary uppercase block mb-sm">Search Catalog</label>
              <div className="relative">
                <input
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-white border-0 border-b border-outline focus:border-secondary focus:ring-0 px-0 py-2 font-body-md placeholder:text-outline-variant outline-none"
                  placeholder="Stone name..."
                  type="text"
                />
                <span className="material-symbols-outlined absolute right-0 top-2 text-outline">search</span>
              </div>
            </div>

            {/* Filters Group */}
            <div className="space-y-md">
              {/* Zodiac Alignment */}
              <div>
                <h4 className="font-label-md text-primary uppercase mb-sm">Zodiac Alignment</h4>
                <div className="grid grid-cols-2 gap-xs max-h-48 overflow-y-auto custom-scrollbar pr-1">
                  {zodiacs.map(z => (
                    <label key={z} className="flex items-center space-x-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedZodiacs.includes(z)}
                        onChange={() => handleZodiacChange(z)}
                        className="rounded-xs border-outline text-secondary focus:ring-secondary cursor-pointer"
                      />
                      <span className={`font-caption transition-colors group-hover:text-primary ${selectedZodiacs.includes(z) ? 'text-primary font-semibold' : 'text-on-surface-variant'}`}>
                        {z}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Ruling Planet */}
              <div>
                <h4 className="font-label-md text-primary uppercase mb-sm">Ruling Planet</h4>
                <select
                  value={selectedPlanet}
                  onChange={(e) => {
                    setSelectedPlanet(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-white border border-outline-variant rounded-lg font-caption py-2 px-2 focus:ring-secondary focus:border-secondary cursor-pointer outline-none"
                >
                  {planets.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-label-md text-primary uppercase mb-sm">Max Price</h4>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={maxPrice}
                  onChange={(e) => {
                    setMaxPrice(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="w-full accent-secondary cursor-pointer"
                />
                <div className="flex justify-between font-caption text-outline mt-1">
                  <span>$500</span>
                  <span className="text-secondary font-bold">${maxPrice.toLocaleString()}</span>
                  <span>$50,000+</span>
                </div>
              </div>

              {/* Gem Type */}
              <div>
                <h4 className="font-label-md text-primary uppercase mb-sm">Gem Type</h4>
                <div className="flex flex-wrap gap-2">
                  {['Precious', 'Rare Earth', 'Organic'].map(type => {
                    const isSelected = selectedType === type;
                    return (
                      <span
                        key={type}
                        onClick={() => handleTypeSelect(type)}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest cursor-pointer transition-colors ${
                          isSelected 
                            ? 'bg-primary text-on-primary' 
                            : 'bg-surface-variant text-on-surface-variant hover:bg-primary hover:text-white'
                        }`}
                      >
                        {type}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Reset Filters */}
              {(searchTerm || selectedZodiacs.length > 0 || selectedPlanet !== 'All Celestial Bodies' || maxPrice !== 50000 || selectedType) && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedZodiacs([]);
                    setSelectedPlanet('All Celestial Bodies');
                    setMaxPrice(50000);
                    setSelectedType('');
                    setCurrentPage(1);
                  }}
                  className="w-full mt-2 text-center text-caption font-label-md uppercase tracking-wider text-secondary hover:text-primary transition-colors cursor-pointer border border-dashed border-secondary py-2 rounded"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </aside>

        {/* Gemstone Grid */}
        <div className="md:col-span-9">
          {paginatedGemstones.length === 0 ? (
            <div className="text-center py-20 bg-surface-container-low rounded-xl border border-dashed border-outline-variant">
              <span className="material-symbols-outlined text-outline text-6xl mb-4">diamond</span>
              <h3 className="font-headline-sm text-primary mb-2">No Alignments Found</h3>
              <p className="text-on-surface-variant font-body-md max-w-sm mx-auto">
                No specimens match your selected parameters. Try widening your price filter or clearing other options.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg">
              {paginatedGemstones.map((gem, index) => {
                const isFavorite = favorites.includes(gem.id);
                return (
                  <div
                    key={gem.id}
                    onClick={() => navigate(`/catalog/${gem.id}`)}
                    className="gem-card group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-outline-variant/20 flex flex-col justify-between"
                  >
                    <div className="aspect-[4/5] overflow-hidden bg-surface-container-low relative">
                      <img
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        alt={gem.name}
                        src={gem.img}
                      />
                      {index === 0 && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-secondary/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 uppercase tracking-[0.2em] rounded-full">
                            New Acquisition
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-md flex flex-col flex-grow justify-between">
                      <div className="mb-md">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-headline-sm text-primary leading-tight">{gem.name}</h3>
                          <button
                            onClick={(e) => toggleFavorite(e, gem.id)}
                            className="text-outline hover:text-secondary transition-colors cursor-pointer"
                          >
                            <span className={`material-symbols-outlined ${isFavorite ? 'text-secondary fill-1' : ''}`} style={{ fontVariationSettings: isFavorite ? "'FILL' 1" : "" }}>
                              favorite
                            </span>
                          </button>
                        </div>
                        <div className="flex items-center space-x-2 mb-4">
                          <span className="material-symbols-outlined text-[16px] text-secondary">auto_awesome</span>
                          <p className="font-label-md text-on-surface-variant">
                            {gem.zodiacs.join(' / ')} • {gem.planet}
                          </p>
                        </div>
                        <p className="font-body-md text-on-surface-variant line-clamp-2 text-sm">{gem.desc}</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm mb-1">
                          <span className="text-outline">Curation Value:</span>
                          <span className="font-bold text-primary">${gem.price ? gem.price.toLocaleString() : 'P.O.R.'}</span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/catalog/${gem.id}`);
                          }}
                          className="w-full border border-primary text-primary font-label-md uppercase tracking-widest py-3 rounded-lg hover:bg-primary hover:text-white transition-all cursor-pointer text-center block text-xs"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="mt-xl flex items-center justify-between border-t border-outline-variant/30 pt-lg">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="flex items-center space-x-2 text-outline hover:text-primary transition-colors font-label-md uppercase tracking-widest disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined">chevron_left</span>
                <span>Previous</span>
              </button>
              
              <div className="flex space-x-md">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg font-label-md cursor-pointer transition-colors ${
                      currentPage === pageNum
                        ? 'bg-primary text-on-primary'
                        : 'text-on-surface-variant hover:bg-surface-container'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>
              
              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="flex items-center space-x-2 text-outline hover:text-primary transition-colors font-label-md uppercase tracking-widest disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
              >
                <span>Next</span>
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </nav>
          )}
        </div>
      </div>
    </main>
  );
}
