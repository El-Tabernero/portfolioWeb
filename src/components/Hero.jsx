import { profile } from '../data/profile.js'
import { pickLang, useLanguage } from '../i18n/languageContext.js'
import { ArrowDownIcon, GithubIcon, LinkedInIcon, MailIcon } from './icons.jsx'
import './Hero.css'

export default function Hero() {
  const { lang, t } = useLanguage()
  const role = pickLang(profile.role, lang)
  const currently = pickLang(profile.currently, lang)

  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">{role}</p>
          <h1 className="hero__title">
            {t('hero', 'intro')} <span className="hero__name">{profile.name}</span>
          </h1>
          <p className="hero__bio">{pickLang(profile.bio, lang)}</p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#projects">
              {t('hero', 'viewProjects')}
            </a>
            <a className="btn" href="#contact">
              {t('hero', 'contactMe')}
            </a>
          </div>

          {currently ? <p className="hero__currently">{currently}</p> : null}

          <ul className="hero__social">
            <li>
              <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer">
                <GithubIcon width="18" height="18" />
                GitHub
              </a>
            </li>
            {profile.linkedin ? (
              <li>
                <a
                  className="icon-link"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon width="18" height="18" />
                  LinkedIn
                </a>
              </li>
            ) : null}
            <li>
              <a className="icon-link" href={`mailto:${profile.email}`}>
                <MailIcon width="18" height="18" />
                {profile.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="hero__aside">
          {profile.avatar ? (
            <img className="hero__avatar" src={profile.avatar} alt={profile.name} />
          ) : (
            <div className="hero__avatar hero__avatar--empty" aria-hidden="true">
              <span>{profile.name.trim().charAt(0).toUpperCase() || '·'}</span>
            </div>
          )}
          <p className="hero__location">{pickLang(profile.facts.location, lang)}</p>
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label={t('hero', 'scrollHint')}>
        <ArrowDownIcon width="18" height="18" />
      </a>
    </section>
  )
}
