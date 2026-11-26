import { profile } from '../data/profile.js'
import { useLanguage } from '../i18n/languageContext.js'
import { ArrowUpIcon } from './icons.jsx'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__meta">
          <p className="footer__name">{profile.name}</p>
          <p className="footer__note">
            © {year} {profile.name}. {t('footer', 'rights')}.
          </p>
          <p className="footer__note">{t('footer', 'builtWith')}</p>
        </div>

        <a className="footer__top" href="#top">
          {t('footer', 'backToTop')}
          <ArrowUpIcon width="16" height="16" />
        </a>
      </div>
    </footer>
  )
}
