import { useCallback, useEffect, useMemo, useState } from 'react'
import { strings } from '../data/strings.js'
import { LanguageContext, LANGUAGES, readStoredLanguage, STORAGE_KEY } from './languageContext.js'

export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLanguage)

  const setLang = useCallback((next) => {
    if (!LANGUAGES.includes(next)) return
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Private mode or storage disabled: the language just won't persist.
    }
  }, [])

  const toggleLang = useCallback(() => {
    setLangState((current) => {
      const next = current === 'es' ? 'en' : 'es'
      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // Ignore, see above.
      }
      return next
    })
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    const meta = strings[lang]?.meta
    if (meta?.title) document.title = meta.title
    const description = document.querySelector('meta[name="description"]')
    if (description && meta?.description) {
      description.setAttribute('content', meta.description)
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, toggleLang }), [lang, setLang, toggleLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
