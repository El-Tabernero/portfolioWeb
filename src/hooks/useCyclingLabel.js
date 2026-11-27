import { useEffect, useState } from 'react'

// Alterna entre etiquetas con una fase de salida antes del cambio.
// `labels` debe ser una referencia estable (constante a nivel módulo).
export default function useCyclingLabel(labels, intervalMs = 3200, swapMs = 260) {
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    if (labels.length < 2) return undefined

    let swapTimeout
    const intervalId = window.setInterval(() => {
      setAnimating(true)
      swapTimeout = window.setTimeout(() => {
        setIndex((current) => (current + 1) % labels.length)
        setAnimating(false)
      }, swapMs)
    }, intervalMs)

    return () => {
      window.clearInterval(intervalId)
      window.clearTimeout(swapTimeout)
    }
  }, [labels, intervalMs, swapMs])

  return { label: labels[index], animating }
}
