import axios from 'axios';

export default axios.create({
  //baseURL: 'http://192.168.1.225:8088',
  headers: { 'Content-Type': 'application/json' },
  params: {
    // API params go here
  }
});