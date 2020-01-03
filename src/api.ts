import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '011b41fa7c237724c32e4dc0ab2749ae',
    language: 'en-US',
  },
})

api.get('tv/popular')

export const moviesApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upComing: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  movieDetail: (id: number) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: (term: string) =>
    api.get('/search/movie', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
}

export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  showDetail: (id: number) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: (term: string) =>
    api.get('/search/tv', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
}
