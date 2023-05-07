import axios from 'axios';

export async function FetchPopular() {
  const request = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=5a5f4cc82b8fd2c121a63200cd7abf1a`
  );
    const response = await request.data.results
 return response
}
