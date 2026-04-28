import React from 'react';

const MarketCard = ({ item, onUpdateStatus }) => {
  const isAvailable = item.status === 'AVAILABLE';

  return (
    <div className={`card ${!isAvailable ? 'sold' : ''}`} style={{ opacity: isAvailable ? 1 : 0.6 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h3 className="card-title">{item.title}</h3>
        <span className="status-badge" style={{
          padding: '0.25rem 0.5rem',
          borderRadius: '9999px',
          fontSize: '0.8rem',
          fontWeight: '500',
          backgroundColor: isAvailable ? '#dcfce7' : '#f1f5f9',
          color: isAvailable ? '#166534' : '#475569'
        }}>
          ${item.price.toFixed(2)}
        </span>
      </div>
      <p className="card-description" style={{ marginTop: '0.5rem' }}>{item.description}</p>
      
      {isAvailable && (
        <button 
          onClick={() => onUpdateStatus(item.id, 'SOLD')}
          className="btn-primary"
          style={{ marginTop: '1rem', width: '100%' }}
        >
          Mark as Sold
        </button>
      )}
      {!isAvailable && (
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#64748b', textAlign: 'center', fontWeight: 'bold' }}>
          SOLD
        </p>
      )}
    </div>
  );
};

export default MarketCard;
