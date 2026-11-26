import { useEffect, useRef, useState } from 'react'
import { contact, profile } from '../data/profile.js'
import { pickLang, useLanguage } from '../i18n/languageContext.js'
import { CheckIcon, CopyIcon, GithubIcon, LinkedInIcon, MailIcon } from './icons.jsx'
import './Contact.css'

export default function Contact() {
  const { lang, t } = useLanguage()
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      setCopied(false)
    }
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <div className="section__head">
          <p className="eyebrow">{t('contact', 'title')}</p>
          <h2>{pickLang(contact.blurb, lang)}</h2>
        </div>

        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            <MailIcon width="18" height="18" />
            {profile.email}
          </a>
          <button type="button" className="btn" onClick={copyEmail}>
            {copied ? <CheckIcon width="18" height="18" /> : <CopyIcon width="18" height="18" />}
            {copied ? t('contact', 'copied') : t('contact', 'copyEmail')}
          </button>
        </div>

        <ul className="contact__links">
          <li>
            <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon width="18" height="18" />
              {t('contact', 'githubLabel')}
            </a>
          </li>
          {profile.linkedin ? (
            <li>
              <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon width="18" height="18" />
                {t('contact', 'linkedinLabel')}
              </a>
            </li>
          ) : null}
          {profile.otherLinks.map((link) => (
            <li key={link.url}>
              <a className="icon-link" href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
