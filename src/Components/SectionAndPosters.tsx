import React from 'react'
import { Content } from 'types'
import Section from './Section'
import Poster from './Poster'

interface SectionAndPostersProps {
  title: string
  posters: Content[]
  isMovie?: boolean
}

const SectionAndPosters: React.FC<SectionAndPostersProps> = ({
  title,
  posters,
  isMovie = false,
}) => (
  <>
    {posters && posters.length > 0 && (
      <Section title={title}>
        {posters.map(poster => (
          <Poster
            key={poster.id}
            id={poster.id}
            imageUrl={poster.poster_path}
            title={poster.original_title || poster.original_name}
            rating={poster.vote_average}
            year={poster.release_date && poster.release_date.substring(0, 4)}
            isMovie={isMovie}
          />
        ))}
      </Section>
    )}
  </>
)

export default SectionAndPosters
