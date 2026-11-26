// ---------------------------------------------------------------------------
// Skills shown in the "Skills" section. Add or remove items freely, the layout
// adapts. Group names are bilingual like everything else.
// ---------------------------------------------------------------------------

export const skillGroups = [
  {
    id: 'frontend',
    title: { es: 'Frontend', en: 'Frontend' },
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Responsive design', 'Vite'],
  },
  {
    id: 'backend',
    title: { es: 'Backend', en: 'Backend' },
    items: ['Django', 'Python', 'SQL', 'SQLite', 'REST APIs', 'ReportLab'],
  },
  {
    id: 'tools',
    title: { es: 'Herramientas', en: 'Tools' },
    items: ['Git', 'GitHub', 'Linux', 'Nginx', 'Gunicorn', 'WhiteNoise'],
  },
  {
    id: 'learning',
    // TODO: move items here once you actually start shipping Android apps
    title: { es: 'Aprendiendo', en: 'Learning' },
    items: ['Kotlin', 'Jetpack Compose', 'Android Studio'],
  },
]
