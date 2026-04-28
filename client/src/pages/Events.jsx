import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import { getEvents, createEvent } from '../services/api';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '', location: '', date: '' });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data } = await getEvents();
      setEvents(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.date) return;
    try {
      await createEvent(formData);
      setFormData({ title: '', description: '', location: '', date: '' });
      fetchEvents();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="page-title">Neighborhood Events</h1>
      <div className="card">
        <h2 className="card-title" style={{marginBottom: '1rem'}}>Organize an Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            <input 
              className="input-field" 
              placeholder="Event Title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
            <input 
              className="input-field" 
              placeholder="Location"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              required
            />
            <input 
              type="datetime-local"
              className="input-field" 
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              required
            />
            <textarea 
              className="input-field" 
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows="2"
            />
          </div>
          <button type="submit" className="btn-primary" style={{marginTop: '0.5rem'}}>Add Event</button>
        </form>
      </div>
      <div className="grid">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
