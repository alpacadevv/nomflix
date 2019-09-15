import React, { SyntheticEvent, FormEvent, useState, useCallback } from 'react';
import { IContent } from 'types';
import { moviesApi, tvApi } from 'api';
import Presenter from './SearchPresenter';

const SearchContainer: React.FC = () => {
  const [movieResults, setMovieResults] = useState<IContent[]>([]);
  const [tvResults, setTvResults] = useState<IContent[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const searchByTerm = useCallback(async () => {
    setLoading(true);
    try {
      const {
        data: { results: movieResults }
      } = await moviesApi.search(searchTerm);

      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);
      
      setMovieResults(movieResults);
      setTvResults(tvResults);
    } catch {
      setError('Can\'t find results');
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    if (searchTerm !== '') searchByTerm();
  }, [searchTerm]);

  const updateTerm = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  }, []);

  return (
    <Presenter
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      loading={loading}
      error={error}
      handleSubmit={handleSubmit}
      updateTerm={updateTerm}
    />
  );
};

export default SearchContainer;
