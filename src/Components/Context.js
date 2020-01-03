import React, { createContext, useState, useContext } from 'react'

export const UserContext = React.createContext()

const LanguageContext = createContext()

const Language = ({ defaultLanguage, children, translations }) => {
  const [lang, setLang] = useState(defaultLanguage)
  const hyperTranslate = text => {
    if (lang === defaultLanguage) {
      return text
    } else {
      return translations[lang][text]
    }
  }
  return (
    <LanguageContext.Provider value={{ setLang, t: hyperTranslate }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useSetLang = lang => {
  const { setLang } = useContext(LanguageContext)
  return setLang
}

export const useT = () => {
  const { t } = useContext(LanguageContext)
  return t
}

export default Language
