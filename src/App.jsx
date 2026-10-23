import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import { ScrollToTop } from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';
import About from './components/About';
import ReachLocation from './components/ReachLocation';
import Home from './components/Home';
import Rooms from './components/Rooms';
import RoomDetails from './components/RoomDetails';
import Booking from './components/Booking';
import Invoice from './components/Invoice';
import Gallery from './components/Gallery';
import ContactUs from './components/Contactus';

function App() {
  return (
    <BrowserRouter>
  <ScrollToTop />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
