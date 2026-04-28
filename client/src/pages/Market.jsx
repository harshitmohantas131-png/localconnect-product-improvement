import React, { useState, useEffect } from 'react';
import MarketCard from '../components/MarketCard';
import { getMarketItems, createMarketItem, updateMarketItemStatus } from '../services/api';

const Market = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '', price: '' });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const { data } = await getMarketItems();
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.price) return;
    try {
      await createMarketItem(formData);
      setFormData({ title: '', description: '', price: '' });
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateStatus = async (id, status) => {
    try {
      await updateMarketItemStatus(id, status);
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="page-title">Neighborhood Marketplace</h1>
      <div className="card">
        <h2 className="card-title" style={{marginBottom: '1rem'}}>List an Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            <input 
              className="input-field" 
              placeholder="Item Title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
            <input 
              type="number"
              step="0.01"
              min="0"
              className="input-field" 
              placeholder="Price ($)"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
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
          <button type="submit" className="btn-primary" style={{marginTop: '0.5rem'}}>Post Item</button>
        </form>
      </div>
      <div className="grid">
        {items.map(item => (
          <MarketCard key={item.id} item={item} onUpdateStatus={handleUpdateStatus} />
        ))}
      </div>
    </div>
  );
};

export default Market;
