import axios from 'axios';

async function FetchVideo(query) {
  const request = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=5a5f4cc82b8fd2c121a63200cd7abf1a`
  );

  return request.data;
}

export default FetchVideo
