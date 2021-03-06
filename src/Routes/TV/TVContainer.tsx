import React, { useState, useEffect } from 'react'
import { Content } from 'types'
import { tvApi } from 'api'
import Presenter from './TVPresenter'

const TVContainer = () => {
  const [topRated, setTopRated] = useState<Content[]>([])
  const [popular, setPopular] = useState<Content[]>([])
  const [airingToday, setAiringToday] = useState<Content[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    ;(async () => {
      try {
        const {
          data: { results: topRated },
        } = await tvApi.topRated()

        const {
          data: { results: popular },
        } = await tvApi.popular()

        const {
          data: { results: airingToday },
        } = await tvApi.airingToday()

        setTopRated(topRated)
        setPopular(popular)
        setAiringToday(airingToday)
      } catch (e) {
        setError("Can't find TV information.")
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <Presenter
      topRated={topRated}
      popular={popular}
      airingToday={airingToday}
      loading={loading}
      error={error}
    />
  )
}

export default TVContainer
