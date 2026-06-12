import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full relative bg-surface-container-highest text-on-surface">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-md max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        {/* Brand Column */}
        <div className="space-y-md">
          <div className="font-display-lg text-headline-md text-primary">AURELIAN</div>
          <p className="font-body-md text-on-surface-variant">
            Elevating the connection between the cosmos and the individual through the timeless power of precious gems.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 border border-outline rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
            <a
              className="w-10 h-10 border border-outline rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="font-label-md text-primary mb-md tracking-widest uppercase">The Archive</h4>
          <ul className="space-y-sm">
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors" to="/catalog">
                Gemstone Library
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors" to="/recommend">
                Astrology Guide
              </Link>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                Sustainability
              </a>
            </li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="font-label-md text-primary mb-md tracking-widest uppercase">Legal</h4>
          <ul className="space-y-sm">
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                Shipping & Returns
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="font-label-md text-primary mb-md tracking-widest uppercase">Join the Circle</h4>
          <p className="font-caption mb-md text-on-surface-variant">Receive lunar reports and exclusive collection previews.</p>
          <form className="flex border-b border-outline" onSubmit={(e) => e.preventDefault()}>
            <input
              className="bg-transparent border-none focus:ring-0 w-full text-sm py-2 px-1 outline-none"
              placeholder="Email address"
              type="email"
            />
            <button className="p-2 text-primary hover:text-secondary" type="submit">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>
        </div>
      </div>
      
      <div className="border-t border-surface-variant/20 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-md flex flex-col md:flex-row justify-between items-center text-on-surface-variant font-caption">
        <p className="font-body-md text-on-surface-variant/60 text-sm">© 2024 AURELIAN. The Digital Alchemist.</p>
        <div className="flex space-x-md mt-4 md:mt-0">
          <a className="hover:text-primary transition-colors" href="#">Instagram</a>
          <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
          <a className="hover:text-primary transition-colors" href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
