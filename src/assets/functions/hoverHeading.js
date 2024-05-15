const hoverHeading = (e) => {
  const x = e.clientX
  const y = e.clientY

  // middle
  const middleX = window.innerWidth / 2
  const middleY = window.innerHeight / 2

  //offset
  const offsetX = ((x - middleX) / middleX) * 0.4
  const offsetY = ((y - middleY) / middleY) * 0.7

  return [offsetX, offsetY]
}

export default hoverHeading
