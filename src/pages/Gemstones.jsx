import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Gemstones() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    gender: 'Prefer not to say',
    dob: '',
    tob: '',
    pob: '',
    purpose: 'General Guidance',
    metals: [],
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (metal) => {
    setFormData(prev => {
      const metals = prev.metals.includes(metal)
        ? prev.metals.filter(m => m !== metal)
        : [...prev.metals, metal];
      return { ...prev, metals };
    });
  };

  const nextStep = () => {
    // Basic validation for Step 1
    if (step === 1) {
      if (!formData.name.trim()) {
        alert('Please enter your full name.');
        return;
      }
      if (!formData.dob) {
        alert('Please enter your date of birth.');
        return;
      }
    }
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    setStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    if (window.confirm('Are you sure you want to clear all inputs?')) {
      setFormData({
        name: '',
        gender: 'Prefer not to say',
        dob: '',
        tob: '',
        pob: '',
        purpose: 'General Guidance',
        metals: [],
        notes: ''
      });
      setStep(1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.dob) {
      alert('Please complete step 1 with name and date of birth first.');
      setStep(1);
      return;
    }
    navigate('/result', { state: formData });
  };

  return (
    <main className="pt-32 pb-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="mb-lg text-center md:text-left">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-sm">
          Celestial Alignment
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl">
          Discover the gemstones destined for your path. Our recommendation engine bridges ancient Vedic astrology with modern mineralogical precision.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
        {/* Left Side: Multi-Step Form (8 Columns) */}
        <div className="lg:col-span-8 bg-surface-container-low p-md md:p-lg rounded-xl shadow-sm border border-surface-container-highest">
          
          {/* Form Navigation Indicators */}
          <div className="flex items-center mb-xl border-b border-outline-variant">
            <button
              type="button"
              onClick={() => setStep(1)}
              className={`pb-4 px-md font-label-md flex items-center gap-xs cursor-pointer border-b-2 transition-all ${
                step === 1
                  ? 'text-primary border-secondary font-bold'
                  : 'text-outline-variant border-transparent'
              }`}
            >
              <span className="material-symbols-outlined text-sm">person</span>
              I. PERSONAL IDENTITY
            </button>
            <button
              type="button"
              onClick={nextStep}
              className={`pb-4 px-md font-label-md flex items-center gap-xs cursor-pointer border-b-2 transition-all ${
                step === 2
                  ? 'text-primary border-secondary font-bold'
                  : 'text-outline-variant border-transparent'
              }`}
            >
              <span className="material-symbols-outlined text-sm">stars</span>
              II. INTENT & ALIGNMENT
            </button>
          </div>

          <form className="space-y-lg" onSubmit={handleSubmit}>
            {/* Step 1: User Details */}
            {step === 1 && (
              <div className="space-y-lg animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="space-y-xs">
                    <label className="font-label-md text-on-surface-variant block">FULL NAME</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-secondary transition-colors py-2 text-body-lg outline-none"
                      placeholder="e.g. Julian Aurelius"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-md text-on-surface-variant block">GENDER</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-secondary transition-colors py-2 text-body-lg outline-none cursor-pointer"
                    >
                      <option>Prefer not to say</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Non-binary</option>
                    </select>
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-md text-on-surface-variant block">DATE OF BIRTH</label>
                    <input
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-secondary transition-colors py-2 text-body-lg outline-none cursor-pointer"
                      type="date"
                      required
                    />
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-md text-on-surface-variant block">TIME OF BIRTH</label>
                    <input
                      name="tob"
                      value={formData.tob}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-secondary transition-colors py-2 text-body-lg outline-none cursor-pointer"
                      type="time"
                    />
                  </div>
                  <div className="space-y-xs md:col-span-2">
                    <label className="font-label-md text-on-surface-variant block">PLACE OF BIRTH</label>
                    <input
                      name="pob"
                      value={formData.pob}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-secondary transition-colors py-2 text-body-lg outline-none"
                      placeholder="City, Country"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mt-xl flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md flex items-center gap-sm hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                  >
                    PROCEED TO INTENT
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Additional Preferences */}
            {step === 2 && (
              <div className="space-y-lg animate-fade-in">
                <div className="space-y-lg">
                  <div className="space-y-xs">
                    <label className="font-label-md text-on-surface-variant block">PRIMARY PURPOSE</label>
                    <p className="font-caption text-outline mb-sm">
                      Select the aspect of life you wish to illuminate through gemstone therapy.
                    </p>
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-secondary transition-colors py-2 text-body-lg outline-none cursor-pointer"
                    >
                      <option>General Guidance</option>
                      <option>Career & Ambition</option>
                      <option>Wealth & Abundance</option>
                      <option>Marriage & Relationships</option>
                      <option>Education & Wisdom</option>
                      <option>Health & Vitality</option>
                    </select>
                  </div>
                  
                  <div className="space-y-sm">
                    <label className="font-label-md text-on-surface-variant block">MATERIAL PREFERENCE</label>
                    <div className="flex flex-wrap gap-sm">
                      {['Yellow Gold', 'Rose Gold', 'White Gold / Platinum', 'Silver'].map((metal) => {
                        const isChecked = formData.metals.includes(metal);
                        return (
                          <label key={metal} className="flex items-center gap-xs cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleCheckboxChange(metal)}
                              className="rounded-sm border-outline text-secondary focus:ring-secondary cursor-pointer"
                            />
                            <span className={`font-body-md group-hover:text-secondary transition-colors ${isChecked ? 'text-secondary font-semibold' : 'text-on-surface-variant'}`}>
                              {metal}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-xs">
                    <label className="font-label-md text-on-surface-variant block">ADDITIONAL NOTES</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-secondary transition-colors py-2 text-body-lg resize-none outline-none"
                      placeholder="Any specific astrological concerns or historical gemstone experiences..."
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-xl flex justify-between items-center">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="text-on-surface-variant font-label-md hover:text-primary transition-colors flex items-center gap-xs cursor-pointer"
                  >
                    <span className="material-symbols-outlined">arrow_back</span>
                    BACK
                  </button>
                  <div className="flex gap-md">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="bg-surface-container-highest text-on-surface-variant px-8 py-4 rounded-lg font-label-md hover:opacity-80 transition-all cursor-pointer"
                    >
                      RESET
                    </button>
                    <button
                      type="submit"
                      className="bg-secondary text-on-primary px-8 py-4 rounded-lg font-label-md hover:opacity-90 active:scale-95 transition-all shadow-md cursor-pointer"
                    >
                      GENERATE RECOMMENDATION
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Right Side: Info Card (4 Columns) */}
        <aside className="lg:col-span-4 space-y-lg">
          {/* Analysis Card */}
          <div className="bg-primary text-on-primary p-md md:p-lg rounded-xl shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-headline-sm mb-md flex items-center gap-sm">
                <span className="material-symbols-outlined text-secondary-fixed">auto_awesome</span>
                Cosmic Wisdom
              </h3>
              <p className="font-body-md text-primary-fixed mb-lg leading-relaxed">
                AURELIAN analysis accounts for your <strong>Laguna (Rising Sign)</strong>, <strong>Nakshatra (Lunar Mansion)</strong>, and current <strong>Dasha (Planetary Period)</strong> to suggest stones that harmonize with your unique energy field.
              </p>
              <ul className="space-y-sm">
                <li className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-secondary-fixed text-sm mt-1">check_circle</span>
                  <span className="font-caption">100% GIA & IGI Certified Analysis</span>
                </li>
                <li className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-secondary-fixed text-sm mt-1">check_circle</span>
                  <span className="font-caption">Vedic Correction Algorithms</span>
                </li>
              </ul>
            </div>
            {/* Subtle background decoration */}
            <div className="absolute -right-10 -bottom-10 opacity-10">
              <span className="material-symbols-outlined text-[160px]">diamond</span>
            </div>
          </div>

          {/* Sample Recommendation */}
          <div className="space-y-md">
            <h4 className="font-label-md text-on-surface-variant uppercase tracking-widest px-xs">Sample Alignments</h4>
            
            {/* Gem Item 1 */}
            <div className="gem-card-gradient p-sm rounded-xl border border-surface-container-high flex gap-md items-center shadow-sm group hover:shadow-md transition-shadow">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  alt="Blue Sapphire"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeqICRKgYC-0-c_5IciqRb7S04FpIrWLf63AvcqQqdnmqI-lElnq4qiSTWZkcAPMxW5k7bG_nx9C_s_YpWKeedmMKmYBixgm0M7mMijASreCBVG5jZeUEdGtDUTNLR4HhUKsRYgdlCJkNavZdAYsObtfVrK2_SENxeysC7FqTGjE6jYaOmS5mB5rAbntMhCXRRcgzHyTn2-fF3mxNpvq0B31c-XR9EnJ40jbl7U5JSXjHyWXq-M_R-5a7oDi4j-PVc9aNJ5y5j3Ejt"
                />
              </div>
              <div>
                <span className="font-label-md text-secondary block text-[10px]">CAREER & FOCUS</span>
                <h5 className="font-headline-sm text-lg text-primary">Royal Blue Sapphire</h5>
                <div className="flex gap-xs mt-1">
                  <span className="bg-surface-container text-primary font-caption px-2 py-0.5 rounded-full">VVS1</span>
                  <span className="bg-surface-container text-primary font-caption px-2 py-0.5 rounded-full">Unheated</span>
                </div>
              </div>
            </div>

            {/* Gem Item 2 */}
            <div className="gem-card-gradient p-sm rounded-xl border border-surface-container-high flex gap-md items-center shadow-sm group hover:shadow-md transition-shadow">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  alt="Emerald"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbXlHTMvJXbCNcTpxJcrDFS7EedhKBoYiCHG1wPDZihk_188sKY1cUYGM3bXnaPEoiunUkFttI2epL5oo16lGrGRnNP5H9TE2cbBDPjiuZQ4ZSMHZiqvVfnQyx3sQOLH81mwOt8fhjcQwmFEYVLuTJUrGyuXTLmkek--c0RzyRmIBV8Afc3W7Y9yTccRbMCQxrYGLv0VAYfXXOwfegmOk8UvJeLmgdWR-zJFcjekYa1BKcTzgjhNH0rQlNOy4F3Hp8dB3SfFBEYRY5"
                />
              </div>
              <div>
                <span className="font-label-md text-secondary block text-[10px]">WEALTH & WISDOM</span>
                <h5 className="font-headline-sm text-lg text-primary">Colombian Emerald</h5>
                <div className="flex gap-xs mt-1">
                  <span className="bg-surface-container text-primary font-caption px-2 py-0.5 rounded-full">IF</span>
                  <span className="bg-surface-container text-primary font-caption px-2 py-0.5 rounded-full">Natural</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
