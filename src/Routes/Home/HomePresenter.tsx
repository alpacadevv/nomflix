import React from 'react'
import styled from 'styled-components'
import { Content } from 'types'
import Loader from 'Components/Loader'
import Message from 'Components/Message'
import SectionAndPosters from 'Components/SectionAndPosters'
import Meta from 'Components/Meta'

import ReactGA from 'react-ga'

ReactGA.initialize('UA-155258262-1')

const analyticsScriptTag = () => {
  return {
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-155258262-1');
    `
  };
};

const Container = styled.div`
  padding: 20px;
`

interface IHomePresenterProps {
  nowPlaying: Content[]
  upcoming: Content[]
  popular: Content[]
  error: string
  loading: boolean
}

const HomePresenter: React.FC<IHomePresenterProps> = ({
  nowPlaying,
  upcoming,
  popular,
  error,
  loading,
}) => (
  <>
    <Meta title="Movie!!!!!!" />
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <SectionAndPosters title="Upcoming Movies!" posters={upcoming} isMovie={true} />
        <SectionAndPosters title="Now Playing" posters={nowPlaying} isMovie={true} />
        <SectionAndPosters title="Popular Movies" posters={popular} isMovie={true} />
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
)

export default HomePresenter
