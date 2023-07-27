import axios from "axios";

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
const KEY = 'c73a67b83f8baa351fa09bb14e13e412';

export class MovieApiService {

#API_KEY = KEY;

constructor() {
    this.BASE_URL = 'https://image.tmdb.org/t/p/w500';
    this.defaultImg =
    'https://www.jakartaplayers.org/uploads/1/2/5/5/12551960/2297419_orig.jpg';
}

async getPopularMovies(page) {
    const params = new URLSearchParams({
      api_key: this.#API_KEY,
      page: page,
    });

    const { data } = await axios.get('trending/movie/day', { params });
    return data;
  }

  async getMovieByQuery(query, page) {
    const params = new URLSearchParams({
      api_key: this.#API_KEY,
      query: query,
      page: page,
      language: 'en-US',
      include_adult: false,
    });

    const { data } = await axios.get('/search/movie', { params });
    return data;
  }

  async getMovieById(id) {
    const params = new URLSearchParams({
      api_key: this.#API_KEY,
      language: 'en-US',
      include_adult: false,
    });
    return await fetch(
      `https://api.themoviedb.org/3/movie/${id}?${params}`
    ).then(response => {
      if (!response.ok) {
        throw new Error('Oops, there is no movie with that name');
      }
      return response.json();
    });
  }

  async getMovieCast(id) {
    const params = new URLSearchParams({
      api_key: this.#API_KEY,
      language: 'en-US',
    });
    const { data } = await axios.get(`movie/${id}/credits?${params}`);
    return data.cast;
  }

  async getMovieReview(id) {
    const params = new URLSearchParams({
      api_key: this.#API_KEY,
      language: 'en-US',
    });
    const { data } = await axios.get(`movie/${id}/reviews?${params}`);
    return data.results;
  }

}

export const fetchMovieApi = new MovieApiService();