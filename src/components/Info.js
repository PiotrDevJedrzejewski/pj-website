import React, { useEffect } from 'react'
import { SlDiamond } from 'react-icons/sl'
import { FaMicroscope, FaGlasses } from 'react-icons/fa'
import { TbHeartHandshake } from 'react-icons/tb'
import scrollAnimation from '../assets/functions/scrollAnimation'

const Info = () => {
  useEffect(() => {
    scrollAnimation(0.2, 'info__box')

    return () => {
      // disconnect the observer when the component is unmounted
      const observer = new IntersectionObserver(() => {})
      observer.disconnect()
    }
  }, [])

  return (
    <div className='info'>
      <div className='info__header'>
        <h1>About Me</h1>
      </div>
      <div className='info__container'>
        <div className='info__box'>
          <p className='info__box-text'>
            Welcome to my website! As a full stack web developer, I have the
            skills and expertise to create dynamic and responsive websites that
            meet the needs of my clients. Whether you're looking for a simple
            static website or a complex web application, I have the experience
            and knowledge to deliver high-quality results.
          </p>
          <SlDiamond className='info__box-icon' />
        </div>
        <div className='info__box'>
          <p className='info__box-text'>
            My development process is focused on delivering solutions that are
            intuitive, efficient, and scalable. I work closely with my clients
            to understand their needs and objectives, and I strive to provide a
            personalized and tailored approach to each project. Whether you're
            starting from scratch or looking to update an existing website, I'm
            here to help.
          </p>
          <FaGlasses className='info__box-icon' />
        </div>
        <div className='info__box'>
          <p className='info__box-text'>
            I have experience working with a wide range of web technologies,
            including HTML, CSS, JavaScript, React, Express, Sass, MongoDB,
            Node, and various web library. I'm comfortable working with both
            front-end and back-end technologies, and I'm always eager to learn
            new skills and techniques to stay on top of the latest trends in web
            development.
          </p>
          <FaMicroscope className='info__box-icon' />
        </div>
        <div className='info__box'>
          <p className='info__box-text'>
            Please feel free to explore my portfolio and learn more about my
            services. If you're interested in working together, I'd love to hear
            from you!
          </p>
          <TbHeartHandshake className='info__box-icon' />
        </div>
      </div>
    </div>
  )
}

export default Info
