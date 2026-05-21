import React from 'react';
import './Invoice.css';

const Invoice = ({ details, onBack }) => {
  const {
    invoiceNo,
    date,
    dates,
    nights,
    rooms,
    adults,
    children,
    basePricePerNight,
    roomTotal,
    services,
    total,
  } = details;

  // PDF Generation Handler
  const handleDownloadPDF = async () => {
    // Dynamically import to ensure clean bundling
    const html2pdf = (await import('html2pdf.js')).default;
    const element = document.getElementById('invoice-capture-area');
    
    const options = {
      margin:       0.5,
      filename:     `Merjin's-Invoice-${invoiceNo}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="invoice-screen-container">
      {/* Container for buttons to sit neatly outside the PDF frame */}
      <div className="invoice-page-container">
        
        {/* Back Link Above Invoice */}
        <button className="btn-back-booking" onClick={onBack}>
          &larr; Return to Booking
        </button>

        {/* Captured Target for PDF/Print Generation */}
        <div className="invoice-card-wrapper" id="invoice-capture-area">
          
          {/* Header Segment */}
          <div className="invoice-card-header">
            <div className="brand-side">
              <h1 className="brand-logo-text">Merjin's</h1>
              <p className="brand-sub">Premium Cabins Resort</p>
            </div>
            <div className="meta-side">
              <h2>INVOICE</h2>
              <p><strong>Invoice No:</strong> {invoiceNo}</p>
              <p><strong>Date:</strong> {date}</p>
            </div>
          </div>

          <hr className="invoice-divider" />

          {/* Info Breakdown Segment */}
          <div className="invoice-details-grid">
            <div className="details-block">
              <h3>Reservation Details</h3>
              <p><strong>Stay Timeline:</strong> {dates}</p>
              <p><strong>Duration:</strong> {nights} Nights</p>
              <p><strong>Total Inventory:</strong> {rooms} Room(s)</p>
            </div>
            <div className="details-block">
              <h3>Occupancy</h3>
              <p><strong>Adults Count:</strong> {adults} Guest(s)</p>
              <p><strong>Children Count:</strong> {children} Guest(s)</p>
            </div>
          </div>

          {/* Dynamic Billing Table */}
          <table className="invoice-billing-table">
            <thead>
              <tr>
                <th>Description</th>
                <th className="text-center">Qty / Nights</th>
                <th className="text-right">Unit Price</th>
                <th className="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Premium Cottage Stay</strong>
                  <br />
                  <span className="item-sub text-muted">Base accommodation charges</span>
                </td>
                <td className="text-center">{nights} Nights ({rooms} Room)</td>
                <td className="text-right">${basePricePerNight}.00</td>
                <td className="text-right">${roomTotal}.00</td>
              </tr>
              
              {services.bookingFee > 0 && (
                <tr>
                  <td>
                    <strong>Service Fee</strong>
                    <br />
                    <span className="item-sub text-muted">Fixed logistics booking fee</span>
                  </td>
                  <td className="text-center">1</td>
                  <td className="text-right">${services.bookingFee}.00</td>
                  <td className="text-right">${services.bookingFee}.00</td>
                </tr>
              )}

              {services.adultFee > 0 && (
                <tr>
                  <td>
                    <strong>Extra Adult Service Fee</strong>
                    <br />
                    <span className="item-sub text-muted">Catering & extra amenities per person</span>
                  </td>
                  <td className="text-center">{adults} Pax ({nights} Nights)</td>
                  <td className="text-right">$20.00</td>
                  <td className="text-right">${services.adultFee}.00</td>
                </tr>
              )}

              <tr className="grand-total-row">
                <td colSpan="2"></td>
                <td className="text-right label-total">Grand Total:</td>
                <td className="text-right val-total">${total}.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action Controls Footer */}
        <div className="invoice-footer-actions">
          <button className="btn-print-invoice" onClick={() => window.print()}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', verticalAlign: 'middle'}}><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
            Print Statement
          </button>
          
          <button className="btn-download-invoice" onClick={handleDownloadPDF}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', verticalAlign: 'middle'}}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download PDF
          </button>
        </div>

      </div>
    </div>
  );
};

export default Invoice;