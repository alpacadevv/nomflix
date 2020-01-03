import React from 'react'

import Router from './Router'

import GlobalStyles from './GlobalStyles'

import Screen from './Screen'

import Language from './Context'

import translations from './translations'

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Router />
    <Language defaultLanguage="en" translations={translations}>
      <Screen />
    </Language>
  </>
)

export default App
