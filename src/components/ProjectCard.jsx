import { getProjectImage } from '../data/projects.js'
import { pickLang, useLanguage } from '../i18n/languageContext.js'
import { CodeIcon, PlayIcon } from './icons.jsx'
import './ProjectCard.css'

export default function ProjectCard({ project, onOpen }) {
  const { lang, t } = useLanguage()
  const title = pickLang(project.title, lang) || project.id
  const tagline = pickLang(project.tagline, lang)
  const { repo, demo } = project.links

  return (
    <article className="card project-card">
      <div className="project-card__media">
        <img src={getProjectImage(project)} alt="" loading="lazy" />
        <div className="project-card__badges">
          <span className="project-card__type">{t('projects', `type.${project.type}`)}</span>
          {project.status && project.status !== 'completed' ? (
            <span className={`project-card__status project-card__status--${project.status}`}>
              {t('projects', `status.${project.status}`)}
            </span>
          ) : null}
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__head">
          <h3>
            {/* The stretched ::after makes the whole card clickable while
                keeping this a real, focusable button. */}
            <button type="button" className="project-card__open" onClick={() => onOpen(project)}>
              {title}
              <span className="sr-only"> — {t('projects', 'open')}</span>
            </button>
          </h3>
          {project.year ? <span className="project-card__year">{project.year}</span> : null}
        </div>

        {tagline ? <p className="project-card__tagline">{tagline}</p> : null}

        {project.stack.length > 0 ? (
          <ul className="project-card__stack">
            {project.stack.slice(0, 4).map((tech) => (
              <li key={tech}>
                <span className="tag">{tech}</span>
              </li>
            ))}
            {project.stack.length > 4 ? (
              <li>
                <span className="tag">+{project.stack.length - 4}</span>
              </li>
            ) : null}
          </ul>
        ) : null}
      </div>

      {repo || demo ? (
        <div className="project-card__links">
          {repo ? (
            <a href={repo} target="_blank" rel="noreferrer" className="icon-link">
              <CodeIcon width="16" height="16" />
              {t('projects', 'viewRepo')}
            </a>
          ) : null}
          {demo ? (
            <a href={demo} target="_blank" rel="noreferrer" className="icon-link">
              <PlayIcon width="16" height="16" />
              {t('projects', 'viewDemo')}
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}
