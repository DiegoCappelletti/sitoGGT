import axios from 'axios';

const urlHome = 'http://localhost:5000/api/home'

export const fetchInfo = () => axios.get(urlHome + '/info');
export const fetchDirettivo = () => axios.get(urlHome + '/direttivo');
export const fetchText = () => axios.get(urlHome + '/text');
export const fetchEventi = () => axios.get(urlHome + '/events');