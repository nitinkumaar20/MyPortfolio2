import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000";

export const Message = (data)=> axios.post('/api/mess',data);