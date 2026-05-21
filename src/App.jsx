import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Rooms from './components/Rooms';
import About from './components/About';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Booking from './components/Booking';
import Invoice from './components/Invoice';

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
