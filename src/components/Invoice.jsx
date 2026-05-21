import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './Booking.css';

const Invoice = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const invoiceRef = useRef();
  const data = location.state || {};
  const { room = {}, checkIn = '', checkOut = '', guests = '', extraService = false } = data;

  const extraCost = extraService ? 60 : 0;
  const nights = checkIn && checkOut ? Math.max(0, (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)) : 0;
  const basePrice = parseFloat(room.price?.replace(/[^0-9.]/g, '')) || 0;
  const total = (basePrice * nights) + extraCost;

  const handleConfirm = () => {
    alert('Thank you! Your reservation has been confirmed.');
    navigate('/');
  };

const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    if (!invoiceRef.current) return;
    const canvas = await html2canvas(invoiceRef.current, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    // Use A4 size for single page PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    // Calculate image dimensions to fit A4 while preserving aspect ratio
    const imgProps = pdf.getImageProperties(imgData);
    const imgRatio = imgProps.width / imgProps.height;
    let renderWidth = pdfWidth;
    let renderHeight = pdfWidth / imgRatio;
    if (renderHeight > pdfHeight) {
      renderHeight = pdfHeight;
      renderWidth = pdfHeight * imgRatio;
    }
    const x = (pdfWidth - renderWidth) / 2;
    const y = (pdfHeight - renderHeight) / 2;
    pdf.addImage(imgData, 'PNG', x, y, renderWidth, renderHeight);
    pdf.save('invoice.pdf');
  };

  return (
    <div className="booking-page" ref={invoiceRef}>
      {/* Hero */}
      <section className="booking-hero"
        style={{ backgroundImage: `url(${room.image || '/assets/room_hero.png'})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">Invoice</h1>
          <p className="hero-subtitle">Your reservation details</p>
        </div>
      </section>

      {/* Invoice details */}
      <section className="booking-details">
        <div className="container">
          <h2 className="room-summary">{room.name || 'Room'} – {room.price || '$0'} / night</h2>
          <ul className="info-list">
            <li><strong>Check‑In:</strong> {checkIn || '—'}</li>
            <li><strong>Check‑Out:</strong> {checkOut || '—'}</li>
            <li><strong>Guests:</strong> {guests || '—'}</li>
            <li><strong>Extra Service:</strong> {extraService ? 'Yes (+$60)' : 'No'}</li>
            <li><strong>Nights:</strong> {nights}</li>
          </ul>
          <div className="price-summary">
            <div className="price-item">
              <span>Room ({nights} nights × ${basePrice})</span>
              <span>${basePrice * nights}</span>
            </div>
            {extraService && (
              <div className="price-item">
                <span>Extra Service</span>
                <span>${extraCost}</span>
              </div>
            )}
            <hr />
            <div className="price-total">
              <strong>Total</strong>
              <strong>${total}</strong>
            </div>
          </div>
          <button className="confirm-btn" onClick={handleConfirm}>Confirm &amp; Pay</button>
          <button className="print-btn" onClick={handlePrint}>Print Invoice</button>
          <button className="download-btn" onClick={handleDownload}>Download Invoice</button>
        </div>
      </section>
    </div>
  );
};

export default Invoice;
