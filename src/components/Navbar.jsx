import { useEffect, useState } from 'react'
import { profile } from '../data/profile.js'
import useCyclingLabel from '../hooks/useCyclingLabel.js'
import { useLanguage } from '../i18n/languageContext.js'
import LanguageToggle from './LanguageToggle.jsx'
import { CloseIcon, MenuIcon } from './icons.jsx'
import './Navbar.css'

const SECTION_IDS = ['about', 'skills', 'projects', 'contact']
const BRAND_LABELS = [profile.name, 'Developer']

export default function Navbar() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const { label: brandLabel, animating: brandAnimating } = useCyclingLabel(BRAND_LABELS)

  const links = SECTION_IDS.map((id) => ({ id, label: t('nav', id) }))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    return () => document.body.classList.remove('is-locked')
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__neon" aria-hidden="true">
        <span className="navbar__neon-bar" />
        <span className="navbar__neon-bar" />
        <span className="navbar__neon-bar" />
      </div>
      <div className="container navbar__inner">
        <a className="navbar__brand" href="#top" onClick={() => setOpen(false)}>
          <span className="navbar__mark" aria-hidden="true">
            {profile.name.trim().charAt(0).toUpperCase() || '·'}
          </span>
          <span
            className={`navbar__name label-swap${brandAnimating ? ' label-swap--out' : ''}`}
            aria-live="polite"
            aria-atomic="true"
          >
            {brandLabel}
          </span>
        </a>

        <nav
          className={`navbar__menu${open ? ' navbar__menu--open' : ''}`}
          id="navbar-menu"
        >
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a
                  className={active === link.id ? 'is-active' : undefined}
                  href={`#${link.id}`}
                  aria-current={active === link.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="navbar__actions">
            <LanguageToggle />
          </div>
        </nav>

        <div className="navbar__aside">
          <LanguageToggle className="navbar__lang--desktop" />
          <button
            type="button"
            className="navbar__burger"
            aria-expanded={open}
            aria-controls="navbar-menu"
            aria-label={open ? t('nav', 'closeMenu') : t('nav', 'openMenu')}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  )
}
