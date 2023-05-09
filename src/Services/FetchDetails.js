import axios from 'axios';

async function FetchDetails(id) {

  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5a5f4cc82b8fd2c121a63200cd7abf1a`);
  return response.data;
}

export default FetchDetails

