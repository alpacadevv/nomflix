import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { IContent } from 'types';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import SectionAndPosters from 'Components/SectionAndPosters';

const Container = styled.div`
  padding: 20px;
`;

interface ITVPresenterProps {
  topRated: IContent[];
  popular: IContent[];
  airingToday: IContent[];
  loading: boolean;
  error: string;
}

const TVPresenter: React.FunctionComponent<ITVPresenterProps> = ({
  topRated,
  popular,
  airingToday,
  loading,
  error,
}) => (
  <>
    <Helmet>
      <title>TV Shows | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <SectionAndPosters
          title="Top Rated Shows"
          posters={topRated}
        />
        <SectionAndPosters
          title="Popular Shows"
          posters={popular}
        />
        <SectionAndPosters
          title="AiringToday Shows"
          posters={airingToday}
        />
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

export default TVPresenter;
