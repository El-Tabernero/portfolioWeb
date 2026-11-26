// ---------------------------------------------------------------------------
// Your identity. Edit the values marked TODO and that's it: the navbar, hero,
// contact section and footer all read from this file.
// ---------------------------------------------------------------------------

export const profile = {
  // TODO: replace with your name
  name: 'Rodrigo Dojas',

  // TODO: short role line, e.g. "Desarrollador Full Stack"
  role: {
    es: 'Desarrollador Full Stack',
    en: 'Full Stack Developer',
  },

  // TODO: 1-2 sentences about you and what you like building
  bio: {
    es: 'Construyo aplicaciones web desde cero: backends con Django, interfaces con React y todo lo que hay en medio. Me interesan los proyectos propios, los que se usan de verdad y se mantienen durante años.',
    en: 'I build web applications from scratch: Django backends, React interfaces and everything in between. I care about side projects that get real use and stay maintained for years.',
  },

  // Longer version of the same story, used in the "Sobre mí" section.
  // TODO: a couple of real paragraphs
  story: {
    es: [
      'Empecé con páginas pequeñas y acabé construyendo sistemas completos: un almacén con Django por un lado, una app de películas en React por otro, y una galería de retratos para guardar el trabajo de fotografía. Cada proyecto nace de una necesidad real, no de un tutorial.',
      'Me siento cómodo tocando las dos capas: puedo diseñar el modelo de datos, la API y también la interfaz que la consume. Cuando algo se rompe, prefiero investigar hasta el final que parchear por encima.',
      'Ahora mismo trabajo casi siempre en JavaScript y Python, y he empezado a mirar más allá del navegador: me interesa llevar ideas a Android, donde la restricción de una pantalla pequeña obliga a hacer un buen producto. Este portafolio está pensado para crecer con eso.',
    ],
    en: [
      'I started with small pages and ended up building complete systems: a warehouse app in Django on one side, a movies app in React on the other, plus a portraits gallery to keep my photography work. Every project comes from a real need, not from a tutorial.',
      "I like working on both layers: I can design the data model and the API, and also the interface that consumes it. When something breaks I would rather dig into the root cause than patch over it.",
      "These days I mostly work in JavaScript and Python, and I have started looking past the browser: I am interested in taking ideas to Android, where the constraint of one small screen forces you to build a real product. This portfolio is meant to grow with that.",
    ],
  },

  // Quick facts shown next to the story. Set any value to null to hide that row.
  facts: {
    location: { es: 'Argentina', en: 'Argentina' },
    focus: {
      es: 'Web full stack, Django + React',
      en: 'Full stack web, Django + React',
    },
    learning: {
      es: 'Android (Kotlin)',
      en: 'Android (Kotlin)',
    },
    status: {
      es: 'Abierto a proyectos y colaboraciones',
      en: 'Open to projects and collaborations',
    },
  },

  // TODO: path to a photo. Drop the file in public/images/ and reference it
  // from here, for example 'images/avatar.jpg'. Use null for a monogram.
  avatar: 'https://i.imgur.com/1fG5mqM.jpeg',

  email: 'rodri.dojas@email.com', // TODO
  github: 'https://github.com/El-Tabernero',
  linkedin: 'https://www.linkedin.com/in/rodrigo-dojas-230199214/', // TODO: 'https://www.linkedin.com/in/tu-usuario'
  // TODO: any other place you want a link to (personal site, itch.io, Dribbble...)
  otherLinks: [],

  // Shown as a short "currently" line in the hero. Set to null to hide it.
  currently: {
    es: 'Buscando ideas para mi próximo proyecto',
    en: 'Looking for ideas for my next project',
  },
}

// Contact block: what happens when someone clicks "copy email"/"email me".
export const contact = {
  // TODO: short line under the contact heading
  blurb: {
    es: '¿Tienes una idea, una corrección o un proyecto en mente? Escríbeme y te respondo.',
    en: 'Got an idea, a correction or a project in mind? Drop me a line, I answer.',
  },
}
