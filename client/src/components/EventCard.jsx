import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="card">
      <h3 className="card-title">{event.title}</h3>
      <p className="card-description" style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.5rem' }}>
        <strong>Date:</strong> {new Date(event.date).toLocaleDateString()} at {new Date(event.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        <br/>
        <strong>Location:</strong> {event.location}
      </p>
      <p className="card-description">{event.description}</p>
    </div>
  );
};

export default EventCard;
