import React from 'react'
import Project from '../components/Project'

const Projects = () => {
  const array = [1, 2, 3, 4]

  return (
    <div className='projects'>
      <div className='projects__container'>
        <h1 className='projects__title'>Projects</h1>
        {array.map((item) => {
          return <Project key={item} prop={item} />
        })}
      </div>
    </div>
  )
}

export default Projects
