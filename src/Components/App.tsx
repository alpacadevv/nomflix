import React from 'react'

import Router from './Router'

import GlobalStyles from './GlobalStyles'

import Screen from './Screen'

import Language from './Context'

import translations from './translations'

import ReactGA from 'react-ga'

ReactGA.initialize('UA-155258262-1')

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Router />
      <Language defaultLanguage="en" translations={translations}>
        <Screen />
      </Language>
    </>
  )
}

export default App
