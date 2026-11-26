import { skillGroups } from '../data/skills.js'
import { pickLang, useLanguage } from '../i18n/languageContext.js'
import './Skills.css'

export default function Skills() {
  const { lang, t } = useLanguage()

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">{t('skills', 'title')}</p>
          <h2>{t('skills', 'subtitle')}</h2>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article className="card skills__group" key={group.id}>
              <h3>{pickLang(group.title, lang)}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="tag">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
