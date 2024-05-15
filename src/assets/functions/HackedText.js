import { useState, useEffect } from 'react'

function HackedText({ text }) {
  const [hackedText, setHackedText] = useState('')

  const hackedLetter = (text) => {
    const letters = 'abcdefghijklmnopqrstuwxyz'
    let iterations = 0

    const interval = setInterval(() => {
      const output = text
        .split('')
        .map((letter, index) => {
          if (index < iterations) {
            return text[index]
          }
          return letters[Math.floor(Math.random() * 26)]
        })
        .join('')
      if (iterations >= text.length) clearInterval(interval)
      iterations += 1 / 5
      setHackedText(output) // update state with the output
    }, 40)
  }

  useEffect(() => {
    hackedLetter(text)
  }, [text])

  return hackedText
}

export default HackedText
