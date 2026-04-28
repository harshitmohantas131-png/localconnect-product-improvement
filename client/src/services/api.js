import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getPosts = () => axios.get(`${API_URL}/posts`);
export const createPost = (content) => axios.post(`${API_URL}/posts`, { content });

export const getIssues = () => axios.get(`${API_URL}/issues`);
export const createIssue = (title, description) => axios.post(`${API_URL}/issues`, { title, description });
export const updateIssue = (id, status) => axios.patch(`${API_URL}/issues/${id}`, { status });

export const getEvents = () => axios.get(`${API_URL}/events`);
export const createEvent = (data) => axios.post(`${API_URL}/events`, data);

export const getMarketItems = () => axios.get(`${API_URL}/market`);
export const createMarketItem = (data) => axios.post(`${API_URL}/market`, data);
export const updateMarketItemStatus = (id, status) => axios.patch(`${API_URL}/market/${id}/status`, { status });

export const getMetrics = () => axios.get(`${API_URL}/metrics`);
