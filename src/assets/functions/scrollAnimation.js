function scrollAnimation(hight = 0.8, element) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= hight) {
          entry.target.classList.add('show')
        }
      })
    },
    { threshold: hight }
  )

  const components = document.querySelectorAll(`.${element}`)
  components.forEach((component) => observer.observe(component))
}

export default scrollAnimation
