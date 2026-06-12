import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransactional = ['/login', '/register'].includes(location.pathname);

  if (isTransactional) {
    return (
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-4">
          <Link to="/" className="font-display-lg text-headline-sm uppercase tracking-widest text-primary text-5xl">
            AURELIAN
          </Link>
          <div className="flex items-center gap-4">
            <span className="font-label-md text-on-surface-variant hidden md:inline">
              {location.pathname === '/login' ? "Don't have an account?" : "Already a member?"}
            </span>
            <Link
              to={location.pathname === '/login' ? '/register' : '/login'}
              className="font-label-md text-secondary hover:opacity-80 transition-all duration-300 pb-1"
            >
              {location.pathname === '/login' ? 'REGISTER NOW' : 'LOGIN'}
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'py-3 shadow-md bg-surface/95' : 'py-5 shadow-sm bg-surface/80'
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <Link to="/" className="font-display-lg text-headline-sm uppercase tracking-widest text-primary text-3xl">
          AURELIAN
        </Link>
        <div className="hidden md:flex gap-lg items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-label-md transition-all duration-300 hover:text-primary ${
                isActive
                  ? 'text-secondary  text-2xl font-bold border-b-2 border-secondary pb-1'
                  : 'text-on-surface-variant text-2xl'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              `font-label-md transition-all duration-300 hover:text-primary ${
                isActive
                  ? 'text-secondary text-2xl font-bold border-b-2 border-secondary pb-1'
                  : 'text-on-surface-variant text-2xl'
              }`
            }
          >
            Gemstones
          </NavLink>
          <NavLink
            to="/recommend"
            className={({ isActive }) =>
              `font-label-md transition-all duration-300 hover:text-primary ${
                isActive
                  ? 'text-secondary text-2xl font-bold border-b-2 border-secondary pb-1'
                  : 'text-on-surface-variant text-2xl'
              }`
            }
          >
            Recommendation Tool
          </NavLink>
        </div>
        <div className="flex gap-md items-center">
          <Link
            to="/login"
            className="text-on-surface-variant font-label-md hover:text-primary transition-all duration-300 px-4 py-2"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-primary text-on-primary font-label-md px-6 py-2 transition-all duration-300 active:scale-95 rounded"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
