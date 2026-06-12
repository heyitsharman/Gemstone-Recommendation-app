import { useLocation, useNavigate } from 'react-router-dom';
import { getZodiacSign, getRecommendations } from '../utils/astrology';
import { useEffect, useState } from 'react';

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const [reportDownloaded, setReportDownloaded] = useState(false);
  const [consultationBooked, setConsultationBooked] = useState(false);

  // Extract form data from navigation state, or fallback to default demo data
  const userData = location.state || {
    name: 'Alexander Thorne',
    dob: '1990-10-24', // October 24th
    purpose: 'Career & Ambition',
    metals: ['White Gold / Platinum'],
    gender: 'Male',
    tob: '08:30',
    pob: 'New York, USA'
  };

  // Perform calculations
  const zodiac = getZodiacSign(userData.dob);
  const recommendations = getRecommendations(userData.name, zodiac, userData.purpose, userData.metals);
  
  const { primary, compatibility, secondary, wearingDetails } = recommendations;

  // Format birthdate for display
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadReport = () => {
    setReportDownloaded(true);
    alert(`Generating elegant PDF report for ${userData.name}...\n\nYour Celestial Gemstone Guide has been downloaded successfully.`);
    setTimeout(() => setReportDownloaded(false), 3000);
  };

  const handleBookConsultation = () => {
    setConsultationBooked(true);
    alert(`Redirecting to our digital scheduling circle...\n\nConsultation request received for alignment with ${primary.name}.`);
    setTimeout(() => setConsultationBooked(false), 3000);
  };

  return (
    <main className="pt-32 pb-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
      {/* User Profile & Zodiac Header */}
      <section className="mb-xl animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-end gap-md">
          <div className="space-y-xs">
            <span className="font-label-md text-secondary tracking-widest uppercase">Celestial Analysis For</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">{userData.name}</h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl">
              Born on {formatDate(userData.dob)} {userData.tob ? `at ${userData.tob}` : ''} {userData.pob ? `in ${userData.pob}` : ''}. 
              Your cosmic blueprint reveals a powerful alignment with transformative energies and profound intuition, focusing on {userData.purpose.toLowerCase()}.
            </p>
          </div>
          <div className="flex items-center gap-md bg-surface-container-low p-md rounded-xl border border-surface-container-highest">
            <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
              <span className="material-symbols-outlined text-4xl">score</span>
            </div>
            <div>
              <div className="font-label-md text-on-surface-variant">ZODIAC SIGN</div>
              <div className="font-headline-sm text-primary">{zodiac}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gemstone Profile */}
      <section className="mb-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="bg-surface-container-lowest rounded-xl shadow-[0_20px_50px_rgba(7,2,53,0.06)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-[400px] lg:h-auto min-h-[500px]">
              <img
                alt={primary.name}
                className="absolute inset-0 w-full h-full object-cover"
                src={primary.img}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              <div className="absolute bottom-md left-md bg-surface/90 backdrop-blur-md px-md py-sm rounded-lg flex items-center gap-sm">
                <span className="material-symbols-outlined text-secondary">verified</span>
                <span className="font-label-md text-primary">{primary.certification}</span>
              </div>
            </div>

            {/* Details Side */}
            <div className="p-md md:p-xl flex flex-col justify-center">
              <div className="flex justify-between items-start mb-md">
                <div>
                  <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-primary mb-xs">
                    {primary.name}
                  </h2>
                  <span className="bg-primary-fixed text-on-primary-fixed-variant px-sm py-1 rounded-full text-caption font-label-md">
                    {primary.title}
                  </span>
                </div>
                <div className="text-right">
                  <div className="font-label-md text-on-surface-variant mb-xs">COMPATIBILITY</div>
                  <div className="text-headline-md font-display-lg text-secondary">{compatibility}%</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-surface-container h-1 rounded-full mb-lg relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-secondary transition-all duration-1000 ease-out"
                  style={{ width: `${compatibility}%` }}
                ></div>
              </div>

              <div className="space-y-md">
                <div>
                  <h3 className="font-label-md text-primary mb-sm tracking-widest uppercase">Description</h3>
                  <p className="font-body-md text-on-surface-variant">{primary.desc}</p>
                </div>
                
                <hr className="gold-divider" />
                
                {/* Structured Data Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
                  <div>
                    <div className="font-caption text-outline uppercase mb-xs tracking-tighter">Finger</div>
                    <div className="font-label-md text-primary">{wearingDetails.finger}</div>
                  </div>
                  <div>
                    <div className="font-caption text-outline uppercase mb-xs tracking-tighter">Metal</div>
                    <div className="font-label-md text-primary">{wearingDetails.metal}</div>
                  </div>
                  <div>
                    <div className="font-caption text-outline uppercase mb-xs tracking-tighter">Day</div>
                    <div className="font-label-md text-primary">{wearingDetails.day}</div>
                  </div>
                  <div>
                    <div className="font-caption text-outline uppercase mb-xs tracking-tighter">Ideal Weight</div>
                    <div className="font-label-md text-primary">{wearingDetails.weight}</div>
                  </div>
                </div>
                
                <hr className="gold-divider" />
                
                <div>
                  <h3 className="font-label-md text-primary mb-sm tracking-widest uppercase">Key Benefits</h3>
                  <div className="flex flex-wrap gap-sm">
                    {wearingDetails.benefits.map((benefit, index) => (
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

              {/* CTA Actions */}
              <div className="mt-xl flex flex-col sm:flex-row gap-sm">
                <button
                  onClick={handleDownloadReport}
                  className="flex-1 bg-primary text-on-primary font-label-md py-4 rounded hover:opacity-90 transition-all flex items-center justify-center gap-sm shadow-lg cursor-pointer"
                >
                  <span className="material-symbols-outlined">
                    {reportDownloaded ? 'check_circle' : 'download'}
                  </span> 
                  {reportDownloaded ? 'Downloaded' : 'Download Full Report'}
                </button>
                <button
                  onClick={handleBookConsultation}
                  className="flex-1 border-2 border-primary text-primary font-label-md py-4 rounded hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined">
                    {consultationBooked ? 'calendar_today' : 'calendar_month'}
                  </span> 
                  {consultationBooked ? 'Booking Requested' : 'Book Consultation'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Gemstones Section */}
      <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="flex justify-between items-center mb-lg">
          <h2 className="font-headline-sm text-primary uppercase tracking-widest">Secondary Alignments</h2>
          <button
            onClick={() => navigate('/recommend')}
            className="text-secondary font-label-md flex items-center gap-xs group cursor-pointer"
          >
            Generate New Analysis 
            <span className="material-symbols-outlined group-hover:rotate-180 transition-transform duration-500">
              autorenew
            </span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {secondary.map(({ gem, compatibility: secondaryScore }) => (
            <div
              key={gem.id}
              className="group bg-surface rounded-xl border border-surface-container-highest overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden">
                <img
                  alt={gem.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src={gem.img}
                />
              </div>
              <div className="p-md flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-center mb-xs">
                    <h4 className="font-headline-sm text-primary">{gem.name}</h4>
                    <span className="text-secondary font-label-md">{secondaryScore}%</span>
                  </div>
                  <p className="text-caption text-on-surface-variant mb-md">{gem.desc}</p>
                </div>
                
                <div>
                  <div className="w-full bg-surface-container h-1 rounded-full mb-md overflow-hidden">
                    <div className="bg-secondary-container h-full" style={{ width: `${secondaryScore}%` }}></div>
                  </div>
                  <button
                    onClick={() => navigate(`/catalog/${gem.id}`)}
                    className="w-full py-2 border border-outline-variant text-caption font-label-md uppercase tracking-widest hover:bg-surface-container-lowest transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
