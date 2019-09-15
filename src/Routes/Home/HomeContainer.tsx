import React, { useState, useEffect } from 'react';
import { IContent } from 'types';
import { moviesApi } from 'api';
import Presenter from './HomePresenter';

const HomeContainer: React.FC = () => {
  const [nowPlaying, setNowPlaying] = useState<IContent[]>([]);
  const [upcoming, setUpcoming] = useState<IContent[]>([]);
  const [popular, setPopular] = useState<IContent[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { results: nowPlaying }
        } = await moviesApi.nowPlaying();
        const {
          data: { results: upcoming }
        } = await moviesApi.upComing();
        const {
          data: { results: popular }
        } = await moviesApi.popular();
        setNowPlaying(nowPlaying);
        setUpcoming(upcoming);
        setPopular(popular);
      } catch {
        setError('Can\'t find movies information.');
      } finally {
        setLoading(false);
      }
    })();
  });

  return (
    <Presenter
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
      error={error}
      loading={loading}
    />
  )
};

export default HomeContainer;
