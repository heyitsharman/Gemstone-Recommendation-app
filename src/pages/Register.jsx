import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    dob: '',
    tob: '',
    pob: '',
    gender: 'other',
    consent: false
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleGenderChange = (value) => {
    setFormData(prev => ({ ...prev, gender: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    if (!formData.consent) {
      alert('Please consent to the AURELIAN Terms of Insight.');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        alert('Welcome to AURELIAN. Your birth details have been synchronized.');
        navigate('/recommend');
      }, 1500);
    }, 2000);
  };

  return (
    <main className="min-h-screen pt-32 pb-xl px-margin-mobile md:px-margin-desktop relative overflow-hidden bg-surface">
      {/* Background Ambient Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full opacity-5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 animate-fade-in max-w-4xl">
  <h1 className="font-display-lg text-5xl md:text-7xl leading-tight text-primary mb-6">
    The Great Awakening
  </h1>

  <p className="font-body-lg text-lg md:text-xl leading-8 text-on-surface-variant max-w-3xl">
    Sync your earthly identity with the celestial alignments. Join the elite circle of gemstone collectors and digital alchemists.
  </p>
</div>

        {/* Registration Form */}
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-lg animate-fade-in" onSubmit={handleSubmit}>
          
          {/* Column 1: Personal Information */}
          <section className="bg-surface-container-lowest p-md md:p-lg rounded-xl shadow-sm border-l-4 border-secondary relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl">person_pin</span>
            </div>
            
            <h2 className="font-headline-sm text-primary mb-md flex items-center gap-3">
              <span className="w-8 h-[1px] bg-secondary"></span>
              Personal Information
            </h2>
            
            <div className="space-y-6">
              {/* Full Name */}
              <div className="relative">
                <label className="font-label-md text-on-surface-variant block mb-2">FULL NAME</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-3 focus:border-secondary focus:ring-0 placeholder:text-outline/50 font-body-md outline-none"
                  placeholder="Julian Thorne"
                  required
                  type="text"
                />
              </div>

              {/* Email Address */}
              <div className="relative">
                <label className="font-label-md text-on-surface-variant block mb-2">EMAIL ADDRESS</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-3 focus:border-secondary focus:ring-0 placeholder:text-outline/50 font-body-md outline-none"
                  placeholder="julian@aurelian.com"
                  required
                  type="email"
                />
              </div>

              {/* Phone Number */}
              <div className="relative">
                <label className="font-label-md text-on-surface-variant block mb-2">PHONE NUMBER</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-3 focus:border-secondary focus:ring-0 placeholder:text-outline/50 font-body-md outline-none"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                {/* Password */}
                <div className="relative">
                  <label className="font-label-md text-on-surface-variant block mb-2">PASSWORD</label>
                  <input
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-3 focus:border-secondary focus:ring-0 placeholder:text-outline/50 font-body-md outline-none"
                    placeholder="••••••••"
                    required
                    type="password"
                  />
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <label className="font-label-md text-on-surface-variant block mb-2">CONFIRM</label>
                  <input
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-3 focus:border-secondary focus:ring-0 placeholder:text-outline/50 font-body-md outline-none"
                    placeholder="••••••••"
                    required
                    type="password"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Column 2: Birth Details (Astral Profile) */}
          <section className="bg-surface-container-low p-md md:p-lg rounded-xl shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl">auto_awesome</span>
            </div>

            <h2 className="font-headline-sm text-primary mb-md flex items-center gap-3">
              <span className="w-8 h-[1px] bg-secondary"></span>
              Astral Profile
            </h2>
            <p className="font-caption text-on-surface-variant mb-6 italic">
              Required for accurate gemstone frequency matching and personalized astrological curation.
            </p>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                {/* Date of Birth */}
                <div className="relative">
                  <label className="font-label-md text-on-surface-variant block mb-2">DATE OF BIRTH</label>
                  <input
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-3 focus:border-secondary focus:ring-0 font-body-md cursor-pointer outline-none"
                    required
                    type="date"
                  />
                </div>

                {/* Time of Birth */}
                <div className="relative">
                  <label className="font-label-md text-on-surface-variant block mb-2">TIME OF BIRTH</label>
                  <input
                    name="tob"
                    value={formData.tob}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-3 focus:border-secondary focus:ring-0 font-body-md cursor-pointer outline-none"
                    type="time"
                  />
                </div>
              </div>

              {/* Place of Birth */}
              <div className="relative">
                <label className="font-label-md text-on-surface-variant block mb-2">PLACE OF BIRTH</label>
                <input
                  name="pob"
                  value={formData.pob}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-3 focus:border-secondary focus:ring-0 placeholder:text-outline/50 font-body-md outline-none"
                  placeholder="Florence, Italy"
                  required
                  type="text"
                />
              </div>

              {/* Gender */}
              <div className="relative">
                <label className="font-label-md text-on-surface-variant block mb-2">GENDER IDENTITY</label>
                <div className="flex gap-4 mt-2">
                  {['male', 'female', 'other'].map(genderOpt => (
                    <label key={genderOpt} className="flex items-center cursor-pointer group/radio">
                      <input
                        type="radio"
                        name="gender"
                        value={genderOpt}
                        checked={formData.gender === genderOpt}
                        onChange={() => handleGenderChange(genderOpt)}
                        className="hidden"
                      />
                      <span className={`w-4 h-4 rounded-full border mr-2 flex items-center justify-center transition-all ${
                        formData.gender === genderOpt ? 'bg-secondary border-secondary' : 'border-outline'
                      }`}>
                        {formData.gender === genderOpt && <span className="w-1.5 h-1.5 bg-white rounded-full"></span>}
                      </span>
                      <span className="font-body-md text-on-surface-variant group-hover/radio:text-primary transition-colors capitalize">
                        {genderOpt}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Consent Terms */}
              <div className="pt-4">
                <label className="flex items-start cursor-pointer select-none">
                  <input
                    name="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1 rounded border-outline text-secondary focus:ring-secondary cursor-pointer"
                    required
                  />
                  <span className="ml-3 font-caption text-on-surface-variant text-xs">
                    I agree to the AURELIAN Terms of Insight and Privacy Ethos. I consent to the use of my birth data for gemstone frequency calibration.
                  </span>
                </label>
              </div>
            </div>
          </section>

          {/* Form Submission */}
          <div className="lg:col-span-2 flex flex-col md:flex-row items-center justify-between gap-md mt-md">
            <div className="flex items-center gap-2 text-on-surface-variant group cursor-help" title="Your data is encrypted with military-grade alchemy.">
              <span className="material-symbols-outlined text-sm">lock</span>
              <span className="font-caption text-xs">End-to-End Encryption Enabled</span>
            </div>
            
            <button
              disabled={status !== 'idle'}
              className={`w-full md:w-auto font-label-md px-xl py-4 rounded transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 cursor-pointer shadow-md ${
                status === 'success' 
                  ? 'bg-secondary text-on-primary' 
                  : 'bg-primary text-on-primary hover:shadow-lg hover:shadow-primary/20'
              }`}
              type="submit"
            >
              {status === 'idle' && (
                <>
                  INITIATE REGISTRATION
                  <span className="material-symbols-outlined">east</span>
                </>
              )}
              {status === 'submitting' && (
                <>
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                  SYNCHRONIZING...
                </>
              )}
              {status === 'success' && (
                <>
                  <span className="material-symbols-outlined">check_circle</span>
                  AWAKENED
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Featured Gemstone Preview Card */}
      <div className="max-w-6xl mx-auto mt-xl animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-surface-container-highest rounded-xl overflow-hidden shadow-sm">
          <div className="h-[300px] md:h-auto relative overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt="Tanzanite member preview"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfmrr6vyfQSOqu7-lFk7-ZbWgcN7dFhcdsdfFUQr5gDAhmWVfhxSE80OvC3MlGoPCfkUXOM4DP241PEw_IDFrmpMM22iFA_ESyTak1OZ-ahoZPgjSYWSlqHeVIYz_l0qPTah6wU6nK5BMX_FZAt9jUpNgudoZ4mtbiGEuebdc31SgxYqE7oUpByB5gCLX8F4vzuLrYa6YZH-7VeyvzhuiwdXV5GMVOsOVJBwUFNO9B038vkMQhiDv48olOpQPalZw8-iU1EVtOrtMu"
            />
            <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-all duration-700"></div>
          </div>
          <div className="p-md md:p-lg flex flex-col justify-center border-l border-on-tertiary-container/10">
            <span className="font-label-md text-secondary mb-2 tracking-widest block text-xs">MEMBER PREVIEW</span>
            <h3 className="font-headline-md text-primary mb-md">The Indigo Soul Tanzanite</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-b border-on-tertiary-container/10 pb-2">
                <span className="font-caption text-on-surface-variant block text-xs">CLARITY</span>
                <span className="font-label-md text-primary text-sm font-semibold">IF (Internally Flawless)</span>
              </div>
              <div className="border-b border-on-tertiary-container/10 pb-2">
                <span className="font-caption text-on-surface-variant block text-xs">CARAT</span>
                <span className="font-label-md text-primary text-sm font-semibold">12.42 ct</span>
              </div>
              <div className="border-b border-on-tertiary-container/10 pb-2">
                <span className="font-caption text-on-surface-variant block text-xs">ORIGIN</span>
                <span className="font-label-md text-primary text-sm font-semibold">Merelani Hills</span>
              </div>
              <div className="border-b border-on-tertiary-container/10 pb-2">
                <span className="font-caption text-on-surface-variant block text-xs">RESONANCE</span>
                <span className="font-label-md text-primary text-sm font-semibold">High - Crown Chakra</span>
              </div>
            </div>
            <p className="font-body-md text-on-surface-variant mt-md text-sm">
              Registered members receive first-access to one-of-a-kind artifacts like the Indigo Soul. Complete your profile to see your celestial match.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
