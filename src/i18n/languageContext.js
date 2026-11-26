import { createContext, useCallback, useContext } from 'react'
import { strings } from '../data/strings.js'

export const LANGUAGES = ['es', 'en']
export const STORAGE_KEY = 'portfolio:lang'
export const DEFAULT_LANGUAGE = 'es'

export const LanguageContext = createContext({
  lang: DEFAULT_LANGUAGE,
  setLang: () => {},
  toggleLang: () => {},
  t: () => '',
})

/** Reads a { es, en } object for the current language, falling back to Spanish. */
export function pickLang(value, lang) {
  if (value == null) return ''
  if (typeof value === 'string') return value
  return value[lang] ?? value[DEFAULT_LANGUAGE] ?? ''
}

function lookup(source, path) {
  return path
    .split('.')
    .reduce((value, part) => (value == null ? undefined : value[part]), source)
}

/** t('nav', 'about') -> 'Sobre mí'. Dotted keys work too: t('projects', 'filters.web'). */
export function translate(lang, section, key) {
  const path = `${section}.${key}`
  return lookup(strings[lang], path) ?? lookup(strings[DEFAULT_LANGUAGE], path) ?? key
}

export function readStoredLanguage() {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return LANGUAGES.includes(stored) ? stored : DEFAULT_LANGUAGE
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  const t = useCallback(
    (section, key) => translate(context.lang, section, key),
    [context.lang],
  )

  return { ...context, t }
}
