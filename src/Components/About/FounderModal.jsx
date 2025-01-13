import React from 'react';
import './FounderModal.css';

const FounderModal = ({ founder, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="founder-modal-overlay" onClick={onClose}>
      <div className="founder-modal-content" onClick={e => e.stopPropagation()}>
        <button className="founder-modal-close" onClick={onClose}>×</button>
        <div className="founder-modal-grid">
          <div className="founder-modal-image">
            <img src={founder.image} alt={founder.name} />
          </div>
          <div className="founder-modal-info">
            <h2 className="founder-modal-name">{founder.name}</h2>
            <h3 className="founder-modal-role">{founder.role}</h3>
            <p className="founder-modal-description">{founder.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderModal;
