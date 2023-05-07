import axios from 'axios';

export async function FetchDetails(id) {
  const config = {
    baseUrl: 'https://api.themoviedb.org/3/',
    params: {
      api_key: '5a5f4cc82b8fd2c121a63200cd7abf1a',
    },
 
    
}
axios.get(`movie/${id}`, config);
}