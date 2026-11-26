import { useMemo, useState } from 'react'
import { PROJECTS, PROJECT_FILTERS } from '../data/projects.js'
import { useLanguage } from '../i18n/languageContext.js'
import ProjectCard from './ProjectCard.jsx'
import './Projects.css'

export default function Projects({ onOpen }) {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('all')

  // Featured projects first, then the most recent ones.
  const sorted = useMemo(
    () =>
      [...PROJECTS].sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1
        return (b.year ?? 0) - (a.year ?? 0)
      }),
    [],
  )

  // Only show filters that have at least one project. A new category appears
  // by itself as soon as you add a project of that type.
  const availableFilters = useMemo(
    () => PROJECT_FILTERS.filter((key) => key === 'all' || sorted.some((p) => p.type === key)),
    [sorted],
  )

  const visible = useMemo(
    () => (filter === 'all' ? sorted : sorted.filter((project) => project.type === filter)),
    [filter, sorted],
  )

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">{t('projects', 'title')}</p>
          <h2>{t('projects', 'subtitle')}</h2>
        </div>

        {availableFilters.length > 2 ? (
          <div className="projects__filters" role="group" aria-label={t('projects', 'title')}>
            {availableFilters.map((key) => (
              <button
                key={key}
                type="button"
                className={filter === key ? 'is-active' : undefined}
                aria-pressed={filter === key}
                onClick={() => setFilter(key)}
              >
                {t('projects', `filters.${key}`)}
                <span className="projects__count">
                  {key === 'all'
                    ? sorted.length
                    : sorted.filter((project) => project.type === key).length}
                </span>
              </button>
            ))}
          </div>
        ) : null}

        {visible.length > 0 ? (
          <ul className="projects__grid">
            {visible.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} onOpen={onOpen} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="projects__empty">{t('projects', 'empty')}</p>
        )}
      </div>
    </section>
  )
}
