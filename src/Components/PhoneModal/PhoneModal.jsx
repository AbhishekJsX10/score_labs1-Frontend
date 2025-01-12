import React, { useState } from 'react';
import './PhoneModal.css';
import { FaCopy } from 'react-icons/fa';

const PhoneModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "9818023948"; // Replace with your actual phone number

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1500);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="phone-modal-overlay" onClick={handleOverlayClick}>
      <div className="phone-modal-content">
        <h2 className="modal-title">Call us at</h2>
        <div className="phone-display">
          <span className="phone-number">{phoneNumber}</span>
          <button 
            className={`copy-button ${copied ? 'copied' : ''}`} 
            onClick={handleCopy}
          >
            {copied ? 'Copied' : <FaCopy />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneModal;
