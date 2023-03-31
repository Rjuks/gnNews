import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { LANGUAGES } from '../consts/types'

export const useLanguage = () => {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('language')
    if (
      storedLanguage &&
      (storedLanguage === LANGUAGES.ENGLISH ||
        storedLanguage === LANGUAGES.POLISH)
    ) {
      return storedLanguage
    }
    return navigator.language.startsWith('pl') ? 'pl' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', language)
    i18n.changeLanguage(language)
  }, [language, i18n])

  function changeLanguage(lang: LANGUAGES) {
    setLanguage(lang)
  }

  return [language, changeLanguage] as const
}
