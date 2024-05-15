import React from 'react'
import Card from './Card'

const CardContainer = () => {
  const projects = [
    {
      name: 'Cocktail Finder',
      desc: 'Front-end application with API',
      img: 'cocktail',
    },
    { name: 'Jobify App', desc: 'Full-stack MERN application', img: 'jobify' },
    { name: 'Nexter', desc: 'Front-end Brochure Website', img: 'nexter' },
  ]

  return (
    <div className='cards'>
      <h1 className='cards__header'>Projects</h1>
      <div className='cards__container'>
        {projects.map((project, idx) => (
          <Card prop={project} key={idx} />
        ))}
      </div>
    </div>
  )
}

export default CardContainer
