import { useLanguage } from '../i18n/languageContext.js'
import './LanguageToggle.css'

const OPTIONS = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
]

export default function LanguageToggle({ className = '' }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      className={`lang ${className}`.trim()}
      role="group"
      aria-label={t('language', 'label')}
    >
      {OPTIONS.map((option) => (
        <button
          key={option.code}
          type="button"
          className={lang === option.code ? 'is-active' : undefined}
          aria-pressed={lang === option.code}
          title={option.code === 'es' ? t('language', 'switchTo') : undefined}
          onClick={() => setLang(option.code)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
