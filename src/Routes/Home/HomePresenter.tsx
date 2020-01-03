import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Content } from 'types'
import Loader from 'Components/Loader'
import Message from 'Components/Message'
import SectionAndPosters from 'Components/SectionAndPosters'

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
    <Helmet>
      <title>Moviess | Nomflix</title>
      <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-155258262-1"
        />
      <script dangerouslySetInnerHTML={analyticsScriptTag()} />
      <script
      dangerouslySetInnerHTML={{
        __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WHC7BKH');
        `,
        }}
      />
    </Helmet>
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
