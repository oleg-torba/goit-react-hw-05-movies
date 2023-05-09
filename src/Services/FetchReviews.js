import axios from 'axios';

async function FetchReviews(id) {

  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=5a5f4cc82b8fd2c121a63200cd7abf1a`);
  return response.data;
}

export default FetchReviews