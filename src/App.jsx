import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gemstones from './pages/Gemstones';
import Result from './pages/Result';
import GemstoneListing from './pages/GemstoneListing';
import GemstoneDetails from './pages/GemstoneDetails';
import Login from './pages/Login';
import Register from './pages/Register';

// Helper component to scroll window to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();
  // Hide Navbar/Footer on specific transitional screens if needed, 
  // but according to mockups, they either have a custom header or the main navbar.
  // Our Navbar component handles custom states internally, so we render it on all routes.
  // We can choose to hide Footer on login page as per mockup instructions.
  const hideFooter = ['/login'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommend" element={<Gemstones />} />
          <Route path="/result" element={<Result />} />
          <Route path="/catalog" element={<GemstoneListing />} />
          <Route path="/catalog/:id" element={<GemstoneDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
