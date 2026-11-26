// ---------------------------------------------------------------------------
// Every UI string in the app, in both languages. Keep the two objects with the
// same keys: a missing key falls back to Spanish, so nothing ever renders blank.
// ---------------------------------------------------------------------------

export const strings = {
  es: {
    meta: {
      title: 'Portafolio — Desarrollador Full Stack',
      description:
        'Portafolio de desarrollo web: proyectos con Django, React y demás. Selected work, code and experiments.',
    },
    nav: {
      about: 'Sobre mí',
      skills: 'Skills',
      projects: 'Proyectos',
      contact: 'Contacto',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
    },
    language: {
      label: 'Idioma',
      switchTo: 'Cambiar a inglés',
    },
    hero: {
      intro: 'Hola, soy',
      viewProjects: 'Ver proyectos',
      contactMe: 'Hablemos',
      scrollHint: 'Desplázate para ver más',
    },
    about: {
      title: 'Sobre mí',
      aboutMe: 'Un poco de contexto',
      factsTitle: 'En resumen',
      location: 'Ubicación',
      focus: 'Especialidad',
      learning: 'Aprendiendo',
      availability: 'Disponibilidad',
    },
    skills: {
      title: 'Skills',
      subtitle: 'Con lo que trabajo a diario',
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Cosas que he construido por mi cuenta',
      filters: {
        all: 'Todos',
        web: 'Web',
        android: 'Android',
        desktop: 'Escritorio',
        other: 'Otros',
      },
      empty: 'No hay proyectos en esta categoría todavía.',
      status: {
        completed: 'Terminado',
        wip: 'En curso',
        planned: 'Planeado',
      },
      type: {
        web: 'Web',
        android: 'Android',
        desktop: 'Escritorio',
        other: 'Otro',
      },
      open: 'Ver proyecto',
      viewRepo: 'Código',
      viewDemo: 'Demo',
      downloadApp: 'App',
    },
    modal: {
      close: 'Cerrar',
      previous: 'Proyecto anterior',
      next: 'Proyecto siguiente',
      stack: 'Tecnologías',
      highlights: 'Lo que hace',
      links: 'Enlaces',
      noRepo: 'Código no disponible',
      noDemo: 'Demo no publicada',
    },
    contact: {
      title: 'Contacto',
      copyEmail: 'Copiar email',
      copied: '¡Copiado!',
      copyFailed: 'No se pudo copiar',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      builtWith: 'Hecho con React y Vite',
      backToTop: 'Volver arriba',
      rights: 'Todos los derechos reservados',
    },
    notFound: {
      title: 'Página no encontrada',
      back: 'Volver al inicio',
    },
  },

  en: {
    meta: {
      title: 'Portfolio — Full Stack Developer',
      description:
        'Web development portfolio: Django, React and everything else. Selected work, code and experiments.',
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    language: {
      label: 'Language',
      switchTo: 'Switch to Spanish',
    },
    hero: {
      intro: "Hi, I'm",
      viewProjects: 'View projects',
      contactMe: "Let's talk",
      scrollHint: 'Scroll to see more',
    },
    about: {
      title: 'About',
      aboutMe: 'A bit of context',
      factsTitle: 'In short',
      location: 'Location',
      focus: 'Focus',
      learning: 'Learning',
      availability: 'Availability',
    },
    skills: {
      title: 'Skills',
      subtitle: 'What I work with daily',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Things I have built on my own',
      filters: {
        all: 'All',
        web: 'Web',
        android: 'Android',
        desktop: 'Desktop',
        other: 'Other',
      },
      empty: 'No projects in this category yet.',
      status: {
        completed: 'Done',
        wip: 'In progress',
        planned: 'Planned',
      },
      type: {
        web: 'Web',
        android: 'Android',
        desktop: 'Desktop',
        other: 'Other',
      },
      open: 'View project',
      viewRepo: 'Code',
      viewDemo: 'Demo',
      downloadApp: 'App',
    },
    modal: {
      close: 'Close',
      previous: 'Previous project',
      next: 'Next project',
      stack: 'Tech stack',
      highlights: 'What it does',
      links: 'Links',
      noRepo: 'Source not available',
      noDemo: 'Demo not published',
    },
    contact: {
      title: 'Contact',
      copyEmail: 'Copy email',
      copied: 'Copied!',
      copyFailed: 'Could not copy',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      builtWith: 'Built with React and Vite',
      backToTop: 'Back to top',
      rights: 'All rights reserved',
    },
    notFound: {
      title: 'Page not found',
      back: 'Back home',
    },
  },
}
