const Project = ({ item, text = 'text', img }) => {
  if (item % 2 === 0) {
    return (
      <div className='project'>
        <img className='project__img' alt='project' src='' />
        <p className='project__info'>{text}</p>
      </div>
    )
  } else {
    return (
      <div className='project'>
        <p className='project__info'>{text}</p>
        <img className='project__img' alt='project' src='' />
      </div>
    )
  }
}
export default Project
