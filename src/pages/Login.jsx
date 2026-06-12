import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Credentials authenticated successfully. Welcome to AURELIAN vault.');
      navigate('/');
    }, 1500);
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row overflow-hidden pt-16">
      {/* Left Side: Login Form Canvas */}
      <section className="relative w-full md:w-1/2 flex items-center justify-center p-6 md:p-margin-desktop z-10 bg-surface">
        {/* Decorative Astrology Background Detail */}
        <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
          <svg className="absolute -top-20 -left-20 w-96 h-96 text-primary animate-spin-slow" viewBox="0 0 100 100">
            <circle cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="0.5"></circle>
            <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" stroke="currentColor" strokeWidth="0.5"></path>
          </svg>
        </div>
        
       <div className="w-full max-w-2xl glass-card rounded-xl p-8 md:p-lg shadow-xl relative animate-fade-in">
          <header className="mb-lg">
            <h1 className="font-display-lg text-headline-md text-primary mb-2">Welcome Back</h1>
            <p className="font-body-md text-on-surface-variant text-sm">
              The stars align for your return. Please enter your credentials to access your curated collection.
            </p>
          </header>
          
          <form className="space-y-md" onSubmit={handleSubmit}>
            <div className="space-y-xs">
              <label className="font-label-md text-label-md text-primary block" htmlFor="email">
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                  mail
                </span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-8 py-3 bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 transition-colors font-body-md text-on-surface outline-none"
                  id="email"
                  placeholder="alchemist@aurelian.com"
                  type="email"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-xs">
              <label className="font-label-md text-label-md text-primary block" htmlFor="password">
                PASSWORD
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                  lock
                </span>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-8 pr-10 py-3 bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 transition-colors font-body-md text-on-surface outline-none"
                  id="password"
                  placeholder="••••••••"
                  type={showPassword ? 'text' : 'password'}
                  required
                />
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-outline hover:text-secondary transition-colors cursor-pointer"
                  onClick={togglePassword}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between py-2">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded-sm border-outline text-secondary focus:ring-secondary cursor-pointer"
                />
                <span className="font-body-md text-caption text-on-surface-variant group-hover:text-primary transition-colors select-none">
                  Remember me
                </span>
              </label>
              <a
                className="font-body-md text-caption text-secondary hover:text-primary-container transition-colors font-semibold"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Reset link initiated. Please check your registered email.');
                }}
              >
                Forgot Password?
              </a>
            </div>
            
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-primary text-on-primary py-4 rounded-lg font-label-md tracking-widest hover:bg-primary-container active:scale-[0.98] transition-all duration-200 shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                  AUTHENTICATING...
                </>
              ) : (
                'SIGN IN'
              )}
            </button>
          </form>
          
          <div className="mt-lg pt-lg border-t border-outline-variant/30 flex flex-col items-center gap-2">
            <p className="font-body-md text-caption text-on-surface-variant">Don't have an account yet?</p>
            <Link
              to="/register"
              className="font-label-md text-primary border-b-2 border-secondary hover:text-secondary transition-all pb-1 px-2 font-semibold text-center"
            >
              REGISTER NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Right Side: Celestial Gemstone Illustration */}
      <section className="hidden md:flex relative w-1/2 hero-gradient overflow-hidden items-center justify-center">
        {/* Animated Light Effects */}
        <div className="absolute w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] -top-40 -right-40 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -bottom-20 -left-20"></div>
        
        <div className="relative z-10 flex flex-col items-center max-w-3xl text-center px-12 text-white">
          <div className="relative mb-lg">
            {/* Main Gemstone Image */}
            <div className="w-80 h-80 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full"></div>
              <img
                alt="Celestial Gemstone"
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(203,143,253,0.3)] animate-pulse-slow"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHVv_Ms9hrpSCYD9R2S2-4TQi2DoWN1XEjnmZdTggDctEvaxCxE4gFNY7oei2adhgvo1E6uw5_e_GgGKr_3rDoO37caKKyOaqjwsx-mul7HgnstF4zTyva7mWCBADLs85ouX-dmqcBrJVtCIwXlWbPEx86RVczg_k_6OWVE5aKmTvAE08GB9SYqBfbqZ8KX1oKMVOUL7q7o5QxSJz1ImUwut8zTqjOAn-YFT_gIWzkChA1DB--yGunRw217ogciElr1nfqv_o1ASSZ"
              />
            </div>
            {/* Decorative Golden Orbitals */}
            <div className="absolute -inset-10 border border-secondary/30 rounded-full animate-spin-slow"></div>
            <div className="absolute -inset-20 border border-outline/10 rounded-full animate-reverse-spin"></div>
          </div>
          
          <h2 className="font-display-lg text-display-lg text-on-primary mb-md">Guided by the Stars, Curated for You</h2>
          <p className="font-body-lg text-surface-variant opacity-80 leading-relaxed text-sm">
            Discover the intersection of mineral rarity and celestial destiny. Every gemstone in the Aurelian vault is hand-selected for its energetic resonance and geological perfection.
          </p>
          
          <div className="mt-lg flex gap-md justify-center">
            <div className="flex flex-col items-center">
              <span className="font-display-lg text-headline-sm text-secondary">12k+</span>
              <span className="font-label-md text-[10px] text-on-primary-fixed tracking-widest">COLLECTORS</span>
            </div>
            <div className="w-px h-10 bg-on-primary/10"></div>
            <div className="flex flex-col items-center">
              <span className="font-display-lg text-headline-sm text-secondary">100%</span>
              <span className="font-label-md text-[10px] text-on-primary-fixed tracking-widest">AUTHENTICITY</span>
            </div>
          </div>
        </div>
        
        {/* Absolute positioned branding detail */}
        <div className="absolute bottom-10 right-10 text-on-primary/10 select-none">
          <span className="material-symbols-outlined text-[120px]">diamond</span>
        </div>
      </section>
    </main>
  );
}
