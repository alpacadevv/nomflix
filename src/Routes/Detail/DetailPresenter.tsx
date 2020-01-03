import React from 'react'
import styled from 'styled-components'
import { ContentDetail } from 'types'
import Loader from 'Components/Loader'
import Message from 'Components/Message'
import Meta from 'Components/Meta'

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`

const Backdrop = styled.div<{ bgImage: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`

const Cover = styled.div<{ bgImage: string }>`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`

const Title = styled.h3`
  font-size: 32px;
`

const ItemContainer = styled.div`
  margin: 20px 0;
`

const Item = styled.span``

const Divider = styled.span`
  margin: 0 10px;
`

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`

interface IDetailPresenterProps {
  result: ContentDetail | null
  error?: string
  loading: boolean
}

const DetailPresenter: React.FC<IDetailPresenterProps> = ({ result, error, loading }) =>
  loading ? (
    <>
      <Meta title={`Loading!!!!!`} />
      <Loader />
    </>
  ) : (
    <Container>
      <Meta title={`${result &&
          (result.original_title
            ? result.original_title
            : result.original_name)}!!!!!`} />
      <Backdrop
        bgImage={
          result && result.backdrop_path
            ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
            : require('../../assets/noPosterSmall.png')
        }
      />
      <Content>
        <Cover
          bgImage={
            result && result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require('../../assets/noPosterSmall.png')
          }
        />
        <Data>
          <Title>
            {result && (result.original_title ? result.original_title : result.original_name)}
          </Title>
          <ItemContainer>
            <Item>
              {result &&
                (result.release_date
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4))}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result && (result.runtime ? result.runtime : result.episode_run_time[0])} min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result &&
                result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1 ? genre.name : `${genre.name} / `,
                )}
            </Item>
          </ItemContainer>
          <Overview>{result && result.overview}</Overview>
        </Data>
      </Content>
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  )

export default DetailPresenter
