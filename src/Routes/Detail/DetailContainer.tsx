import React, { useState, useEffect, useRef } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { ContentDetail } from 'types'
import { moviesApi, tvApi } from 'api'
import Presenter from './DetailPresenter'

interface IDetailContainerProps {
  id: string
}

const DetailContainer: React.FC<RouteComponentProps<IDetailContainerProps>> = ({
  location: { pathname },
  match: {
    params: { id },
  },
  history: { push },
}) => {
  const [result, setResult] = useState<ContentDetail | null>(null)
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const isMovie = useRef<boolean>(pathname.includes('/movie'))

  useEffect(() => {
    const parsedId: number = parseInt(id)

    if (isNaN(parsedId)) return push('/')
    ;(async () => {
      let result = null
      try {
        if (isMovie.current) {
          ;({ data: result } = await moviesApi.movieDetail(parsedId))
        } else {
          ;({ data: result } = await tvApi.showDetail(parsedId))
        }
      } catch (e) {
        setError('Cant find anything.')
      } finally {
        setResult(result)
        setLoading(false)
      }
    })()
  }, [isMovie])

  return <Presenter result={result} error={error} loading={loading} />
}

export default DetailContainer
