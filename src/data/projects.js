// ---------------------------------------------------------------------------
// Your projects. Add one object to the array and it shows up in the grid, in
// the modal and in the filters — nothing else to touch.
//
// Field reference:
//   id          string   unique, used for links and React keys
//   title       {es,en}  project name
//   tagline     {es,en}  one short line, shown on the card
//   description {es,en}  array of paragraphs, shown in the modal
//   type        'web' | 'android' | 'desktop' | 'other'  -> drives the filters
//   status      'completed' | 'wip' | 'planned'
//   year        number
//   stack       string[] technologies used
//   image       string   path under /public, e.g. 'images/projects/stocksys.png'
//                        leave null to get the free placeholder for that type
//   links       { repo, demo, app }   app = Play Store / APK / release page
//   highlights  {es,en}  array of bullet points, shown in the modal
//   featured    boolean  pins the project to the front (optional)
//
// TODO markers below: paste the real URLs when you have them.
// ---------------------------------------------------------------------------

export const PROJECTS = [
  {
    id: 'stocksys',
    title: { es: 'StockSys', en: 'StockSys' },
    tagline: {
      es: 'Sistema de gestión de stock e inventario',
      en: 'Stock and inventory management system',
    },
    description: {
      es: [
        'StockSys es un sistema de inventario que uso para llevar el control real de un almacén: entradas y salidas, movimientos de stock y el estado de cada producto en un único sitio.',
        'La parte interesante no es solo el CRUD, sino el modelo de datos: los productos tienen atributos dinámicos (por ejemplo, talla y color) definidos por el usuario, así que el mismo sistema sirve para una tienda de ropa, una ferretería o un almacén de repuestos sin tocar el código.',
        'Incluye un panel con métricas, exportación de informes en PDF y un modo invitado para consultar el stock sin necesidad de crear cuentas.',
      ],
      en: [
        'StockSys is an inventory system I use to keep track of a real warehouse: stock in and out, movements and the current state of every product in one place.',
        'The interesting part is not just the CRUD, it is the data model: products carry dynamic attributes (size, colour and so on) defined by the user, so the same system works for a clothing shop, a hardware store or a spare parts warehouse without touching the code.',
        'It includes a metrics dashboard, PDF report exports and a guest mode so you can check stock levels without creating accounts.',
      ],
    },
    type: 'web',
    status: 'completed',
    year: 2025,
    stack: ['Django 6', 'Python', 'SQLite', 'ReportLab', 'WhiteNoise', 'Gunicorn'],
    image: null, // TODO: 'images/projects/stocksys.png'
    links: {
      repo: 'https://github.com/El-Tabernero/stocksys',
      demo: null,
      app: null,
    },
    highlights: {
      es: [
        'Productos, categorías y atributos dinámicos configurables',
        'Registro de movimientos de stock con historial',
        'Panel de control con métricas clave',
        'Informes en PDF generados con ReportLab',
        'Modo invitado para consultar sin registro',
        'Desplegado con WhiteNoise y Gunicorn',
      ],
      en: [
        'Products, categories and configurable dynamic attributes',
        'Stock movement tracking with history',
        'Dashboard with key metrics',
        'PDF reports generated with ReportLab',
        'Guest mode for looking things up without signing up',
        'Deployed with WhiteNoise and Gunicorn',
      ],
    },
    featured: true,
  },

  {
    id: 'carrete',
    title: { es: 'Carrete', en: 'Carrete' },
    tagline: {
      es: 'App de películas en React',
      en: 'Movies app built with React',
    },
    description: {
      es: [
        'Carrete es una aplicación web para pelis: buscador, fichas, trailers y listas de seguimiento, construida en React.',
        'La idea era practicar el consumo de APIs externas y el manejo de estados en una interfaz con datos reales en lugar de mocks: paginación, estados de carga, errores y cacheo.',
      ],
      en: [
        'Carrete is a web app for movies: search, details, trailers and watchlists, built with React.',
        'The goal was to practice consuming third party APIs and state management in an interface with real data instead of mocks: pagination, loading states, errors and caching.',
      ],
    },
    type: 'web',
    status: 'wip',
    year: 2025,
    stack: ['React', 'JavaScript', 'CSS', 'TMDB API'],
    image: null, // TODO: 'images/projects/carrete.png'
    links: {
      repo: null, // TODO: paste the GitHub URL
      demo: null,
      app: null,
    },
    highlights: {
      es: [
        'Búsqueda y filtrado de películas con la API de TMDB',
        'Ficha de película con trailers',
        'Listas de seguimiento guardadas en el navegador',
        'Estados de carga y de error',
      ],
      en: [
        'Movie search and filtering with the TMDB API',
        'Movie detail view with trailers',
        'Watchlists saved in the browser',
        'Loading and error states',
      ],
    },
    featured: true,
  },

  {
    id: 'portraits',
    title: { es: 'Retratos', en: 'Portraits' },
    tagline: {
      es: 'Portafolio web de fotografía de retrato',
      en: 'Web portfolio for portrait photography',
    },
    description: {
      es: [
        'Un portafolio de fotos de retrato pensado para que las imágenes manden: galería rápida, fichas por sesión y una navegación que no estorba.',
        'Lo monté como escaparate de trabajo photography, pero la estructura (gallerías, categorías, lightbox) es la misma que uso como base de otras cosas.',
      ],
      en: [
        'A portrait photography portfolio built so the images lead: a fast gallery, per session pages and navigation that stays out of the way.',
        'I set it up as a photography showcase, but the structure (galleries, categories, lightbox) is the same base I reuse for other things.',
      ],
    },
    type: 'web',
    status: 'completed',
    year: 2024,
    stack: ['React', 'JavaScript', 'CSS'],
    image: null, // TODO: 'images/projects/portraits.png'
    links: {
      repo: null, // TODO: paste the GitHub URL
      demo: null, // TODO: paste the live URL
      app: null,
    },
    highlights: {
      es: [
        'Galería con lightbox y navegación por teclado',
        'Organización por sesión y categoría',
        'Imágenes optimizadas y carga progresiva',
      ],
      en: [
        'Gallery with lightbox and keyboard navigation',
        'Organised by session and category',
        'Optimised images with progressive loading',
      ],
    },
    featured: false,
  },

  // --- Future Android / other work. Copy this block, fill it in, it just works.
  // {
  //   id: 'mi-app-android',
  //   title: { es: 'Mi App Android', en: 'My Android App' },
  //   tagline: { es: 'Corta descripción', en: 'Short description' },
  //   description: { es: ['...'], en: ['...'] },
  //   type: 'android',
  //   status: 'wip',
  //   year: 2026,
  //   stack: ['Kotlin', 'Jetpack Compose', 'Room'],
  //   image: null,
  //   links: { repo: 'https://github.com/El-Tabernero/...', demo: null, app: null },
  //   highlights: { es: ['...'], en: ['...'] },
  //   featured: false,
  // },
]

// Filters offered above the grid, in this order.
export const PROJECT_FILTERS = ['all', 'web', 'android', 'desktop', 'other']

// Free placeholder art per project type, used when `image` is null.
const PLACEHOLDERS = {
  web: 'images/projects/placeholder-web.svg',
  android: 'images/projects/placeholder-mobile.svg',
  desktop: 'images/projects/placeholder-web.svg',
  other: 'images/projects/placeholder-photo.svg',
}

export function getProjectImage(project) {
  return project.image || PLACEHOLDERS[project.type] || PLACEHOLDERS.web
}
