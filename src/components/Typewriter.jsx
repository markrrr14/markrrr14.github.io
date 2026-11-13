import { useEffect, useRef, useState } from 'react'

export default function Typewriter({
  phrases,
  typeSpeed = 70,
  deleteSpeed = 40,
  pause = 1400,
}) {
  const [text, setText] = useState('')
  const state = useRef({ phraseIndex: 0, charIndex: 0, deleting: false })

  useEffect(() => {
    let timer

    const tick = () => {
      const current = state.current
      const phrase = phrases[current.phraseIndex]

      if (!current.deleting) {
        current.charIndex += 1
        setText(phrase.slice(0, current.charIndex))

        if (current.charIndex === phrase.length) {
          current.deleting = true
          timer = setTimeout(tick, pause)
          return
        }
      } else {
        current.charIndex -= 1
        setText(phrase.slice(0, current.charIndex))

        if (current.charIndex === 0) {
          current.deleting = false
          current.phraseIndex = (current.phraseIndex + 1) % phrases.length
        }
      }

      timer = setTimeout(tick, current.deleting ? deleteSpeed : typeSpeed)
    }

    timer = setTimeout(tick, typeSpeed)
    return () => clearTimeout(timer)
  }, [phrases, typeSpeed, deleteSpeed, pause])

  return <span className="mono">{text}</span>
}
