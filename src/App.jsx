import { useCallback, useEffect, useRef, useState } from 'react'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import ProjectModal from './components/ProjectModal.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import { PROJECTS } from './data/projects.js'

export default function App() {
  const [openId, setOpenId] = useState(null)

  const openIndex = PROJECTS.findIndex((project) => project.id === openId)
  const openProject = openIndex >= 0 ? PROJECTS[openIndex] : null

  const open = useCallback((project) => setOpenId(project.id), [])
  const close = useCallback(() => setOpenId(null), [])
  const step = useCallback((offset) => {
    setOpenId((current) => {
      const index = PROJECTS.findIndex((project) => project.id === current)
      if (index < 0) return current
      const next = (index + offset + PROJECTS.length) % PROJECTS.length
      return PROJECTS[next].id
    })
  }, [])

  // Push one history entry when the modal opens, so browser back closes it.
  const pushedRef = useRef(false)

  useEffect(() => {
    if (openId && !pushedRef.current) {
      window.history.pushState({ project: openId }, '')
      pushedRef.current = true
    }
    if (!openId) pushedRef.current = false
  }, [openId])

  useEffect(() => {
    const onPopState = () => setOpenId(null)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onOpen={open} />
        <Contact />
      </main>
      <Footer />

      {openProject ? (
        <ProjectModal
          project={openProject}
          onClose={close}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
          canPrev={PROJECTS.length > 1}
          canNext={PROJECTS.length > 1}
        />
      ) : null}
    </>
  )
}
