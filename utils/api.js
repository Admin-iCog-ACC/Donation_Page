import axios from 'axios';

export const donate = (data) =>
  axios.post('http://donation.icogacc.com/:3000/api/donate', data).then((res) => res.data);
