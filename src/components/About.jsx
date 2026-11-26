import { profile } from '../data/profile.js'
import { pickLang, useLanguage } from '../i18n/languageContext.js'
import './About.css'

export default function About() {
  const { lang, t } = useLanguage()
  const story = pickLang(profile.story, lang)
  const facts = [
    { label: t('about', 'location'), value: profile.facts.location },
    { label: t('about', 'focus'), value: profile.facts.focus },
    { label: t('about', 'learning'), value: profile.facts.learning },
    { label: t('about', 'availability'), value: profile.facts.status },
  ].filter((fact) => fact.value)

  return (
    <section className="section about" id="about">
      <div className="container about__inner">
        <div className="about__main">
          <div className="section__head">
            <p className="eyebrow">{t('about', 'title')}</p>
            <h2>{t('about', 'aboutMe')}</h2>
          </div>
          {story.map((paragraph) => (
            <p className="about__paragraph" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="about__facts">
          <h3 className="about__facts-title">{t('about', 'factsTitle')}</h3>
          <dl>
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{pickLang(fact.value, lang)}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  )
}
