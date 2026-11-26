import { useEffect, useId, useRef } from 'react'
import { getProjectImage } from '../data/projects.js'
import { pickLang, useLanguage } from '../i18n/languageContext.js'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon, CodeIcon, DeviceIcon, PlayIcon } from './icons.jsx'
import './ProjectModal.css'

export default function ProjectModal({ project, onClose, onPrev, onNext, canPrev, canNext }) {
  const { lang, t } = useLanguage()
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const titleId = useId()

  const title = pickLang(project.title, lang) || project.id
  const tagline = pickLang(project.tagline, lang)
  const description = pickLang(project.description, lang)
  const highlights = pickLang(project.highlights, lang) || []
  const { repo, demo, app } = project.links

  useEffect(() => {
    const previouslyFocused = document.activeElement
    document.body.classList.add('is-locked')
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft' && canPrev) onPrev()
      if (event.key === 'ArrowRight' && canNext) onNext()
      if (event.key === 'Tab') trapFocus(event, dialogRef.current)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('is-locked')
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [canNext, canPrev, onClose, onNext, onPrev])

  return (
    <div
      className="modal"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={dialogRef}
      >
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label={t('modal', 'close')}
          ref={closeRef}
        >
          <CloseIcon width="20" height="20" />
        </button>

        <div className="modal__media">
          <img src={getProjectImage(project)} alt="" />
        </div>

        <div className="modal__content">
          <header className="modal__header">
            <div className="modal__badges">
              <span className="tag">{t('projects', `type.${project.type}`)}</span>
              {project.status ? (
                <span className="tag">{t('projects', `status.${project.status}`)}</span>
              ) : null}
              {project.year ? <span className="tag">{project.year}</span> : null}
            </div>
            <h2 id={titleId}>{title}</h2>
            {tagline ? <p className="modal__tagline">{tagline}</p> : null}
          </header>

          {description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {highlights.length > 0 ? (
            <section className="modal__block">
              <h3>{t('modal', 'highlights')}</h3>
              <ul className="modal__list">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.stack.length > 0 ? (
            <section className="modal__block">
              <h3>{t('modal', 'stack')}</h3>
              <ul className="modal__tags">
                {project.stack.map((tech) => (
                  <li key={tech}>
                    <span className="tag">{tech}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="modal__block">
            <h3>{t('modal', 'links')}</h3>
            <div className="modal__actions">
              {repo ? (
                <a className="btn btn--sm" href={repo} target="_blank" rel="noreferrer">
                  <CodeIcon width="16" height="16" />
                  {t('projects', 'viewRepo')}
                </a>
              ) : (
                <span className="modal__missing">{t('modal', 'noRepo')}</span>
              )}
              {demo ? (
                <a className="btn btn--sm" href={demo} target="_blank" rel="noreferrer">
                  <PlayIcon width="16" height="16" />
                  {t('projects', 'viewDemo')}
                </a>
              ) : (
                <span className="modal__missing">{t('modal', 'noDemo')}</span>
              )}
              {app ? (
                <a className="btn btn--sm btn--primary" href={app} target="_blank" rel="noreferrer">
                  <DeviceIcon width="16" height="16" />
                  {t('projects', 'downloadApp')}
                </a>
              ) : null}
            </div>
          </section>

          <nav className="modal__nav" aria-label={t('projects', 'title')}>
            <button type="button" className="btn btn--sm" onClick={onPrev} disabled={!canPrev}>
              <ChevronLeftIcon width="16" height="16" />
              {t('modal', 'previous')}
            </button>
            <button type="button" className="btn btn--sm" onClick={onNext} disabled={!canNext}>
              {t('modal', 'next')}
              <ChevronRightIcon width="16" height="16" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

/** Keeps Tab focus inside the dialog. */
function trapFocus(event, container) {
  if (!container) return
  const focusable = container.querySelectorAll(
    'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
  )
  if (focusable.length === 0) return

  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}
