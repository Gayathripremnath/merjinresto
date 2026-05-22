import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';
import { Suspense, lazy } from 'react';

// Lazy‑load page components for code‑splitting
const Home = lazy(() => import('./components/Home'));
const Rooms = lazy(() => import('./components/Rooms'));
const About = lazy(() => import('./components/About'));
const Booking = lazy(() => import('./components/Booking'));
const Invoice = lazy(() => import('./components/Invoice'));
const Gallery = lazy(() => import('./components/Gallery'));

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Suspense fallback={<div className="loading">Loading…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
