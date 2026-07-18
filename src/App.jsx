import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import { ScrollToTop } from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';
import { Suspense, lazy } from 'react';

import ReachLocation from './components/ReachLocation';

const Home = lazy(() => import('./components/Home'));
const Rooms = lazy(() => import('./components/Rooms'));
const RoomDetails = lazy(() => import('./components/RoomDetails'));
const About = lazy(() => import('./components/About'));
const Booking = lazy(() => import('./components/Booking'));
const Invoice = lazy(() => import('./components/Invoice'));
const Gallery = lazy(() => import('./components/Gallery'));
const ContactUs = lazy(() => import('./components/Contactus'));

function App() {
  return (
    <BrowserRouter>
  <ScrollToTop />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Suspense fallback={<div className="loading">Loading…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/roomdetails" element={<RoomDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/reach" element={<ReachLocation />} />
        </Routes> 
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
