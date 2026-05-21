import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './Invoice.css';

const Invoice = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const invoiceRef = useRef();
  const data = location.state || {};
  const { room = {}, checkIn = '', checkOut = '', guests = '', extraService = false } = data;

  const extraCost = extraService ? 60 : 0;
const perDayPrice = 499;
const basePrice = room.price ? parseFloat(room.price.replace(/[^0-9.]/g, '')) : perDayPrice;
const nights = checkIn && checkOut ? Math.max(0, (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)) : 0;
const total = basePrice * nights + extraCost;

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
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
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
    <div className="invoice-page" style={{ backgroundImage: `url(${room.image || '/assets/room_hero.png'})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="invoice-card" ref={invoiceRef}>
        <h2 className="invoice-title">Booking Invoice</h2>
        <p className="room-info"><strong>Room:</strong> {room.name || 'Room'} – ${basePrice} / night</p>
        <ul className="invoice-list">
          <li><strong>Check‑In:</strong> {checkIn || '—'}</li>
          <li><strong>Check‑Out:</strong> {checkOut || '—'}</li>
          <li><strong>Guests:</strong> {guests || '—'}</li>
          <li><strong>Extra Service:</strong> {extraService ? 'Yes (+$60)' : 'No'}</li>
          <li><strong>Nights:</strong> {nights}</li>
        </ul>
        <div className="price-summary">
          <div className="price-item"><span>Room ({nights} nights × ${basePrice})</span><span>${basePrice * nights}</span></div>
          {extraService && <div className="price-item"><span>Extra Service</span><span>${extraCost}</span></div>}
          <hr />
          <div className="price-total"><strong>Total</strong><strong>${total}</strong></div>
        </div>
        <footer className="invoice-footer">© 2026 Your Hotel – All rights reserved</footer>
        <button className="confirm-btn action-button" onClick={handleConfirm}>Confirm &amp; Pay</button>
        <button className="print-btn action-button" onClick={handlePrint}>Print Invoice</button>
        <button className="download-btn action-button" onClick={handleDownload}>Download Invoice</button>
      </div>
    </div>
  );
};

export default Invoice;
