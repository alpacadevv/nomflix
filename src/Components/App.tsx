import React from 'react'

import Router from './Router'

import GlobalStyles from './GlobalStyles'

import Screen from './Screen'

import Language from './Context'

import translations from './translations'

import Helmet from 'react-helmet'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <script dangerouslySetInnerHTML={{ __html: `alert('??')` }}></script>
      </Helmet>
      <Router />
      <Language defaultLanguage="en" translations={translations}>
        <Screen />
      </Language>
    </>
  )
}

export default App
