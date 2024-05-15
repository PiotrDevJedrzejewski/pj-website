import React, { useEffect } from 'react'

//I used chatGPT to generate this component,

function ScrollHandler() {
  function handleScroll() {
    const scroll = window.pageYOffset,
      dh = document.body.clientHeight,
      wh = window.innerHeight
    const scrollPercent = (scroll / (dh - wh)) * 100
    const myDiv = document.querySelector('.scrollbar')
    if (myDiv) {
      myDiv.style.height = `${scrollPercent}%`
    }
  }

  useEffect(() => {
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <div className='scrollbar'></div>
}

export default ScrollHandler
