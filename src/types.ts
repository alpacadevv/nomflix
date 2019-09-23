interface ICommonProperties {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

interface IMovie extends ICommonProperties {
  adult: boolean;
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
}

export interface ITV extends ICommonProperties {
  first_air_date: string; //
  name: string;
  original_country: string[];
  original_name: string;
}

export type IContent = IMovie & ITV;

type Genres = {
  name: string;
}

export interface IContentDetail {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  original_name: string; 
  first_air_date: string;
  runtime: string;
  episode_run_time: string[];
  genres: Genres[];
}
