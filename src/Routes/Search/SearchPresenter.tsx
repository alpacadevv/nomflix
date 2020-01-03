import React, { SyntheticEvent, FormEvent } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Content } from 'types'
import Loader from 'Components/Loader'
import Message from 'Components/Message'
import SectionAndPosters from 'Components/SectionAndPosters'

const Container = styled.div`
  padding: 20px;
`

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`

interface SearchPresenterProps {
  movieResults: Content[]
  tvResults: Content[]
  searchTerm: string
  loading: boolean
  error: string
  handleSubmit: (e: FormEvent) => void
  updateTerm: (e: SyntheticEvent<HTMLInputElement>) => void
}

const SearchPresenter: React.FunctionComponent<SearchPresenterProps> = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit,
  updateTerm,
}) => (
  <Container>
    <Helmet>
      <title>Search | Nomflix</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Search Movies or TV Shows..." value={searchTerm} onChange={updateTerm} />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        <SectionAndPosters title="Movie Results" posters={movieResults} isMovie={true} />
        <SectionAndPosters title="TV Show Results" posters={tvResults} />
        {error && <Message color="#e74c3c" text={error} />}
        {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && (
          <Message color="#95a5a6" text="Nothing found" />
        )}
      </>
    )}
  </Container>
)

export default SearchPresenter
