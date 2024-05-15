import React, { useState } from 'react'
import HackedText from '../assets/functions/HackedText'
import bgvideo from '../assets/bgvideo.mp4'
import hoverHeading from '../assets/functions/hoverHeading'

const Heading = () => {
  const [flipX, setFlipX] = useState('0')
  const [flipY, setFlipY] = useState('0')

  const mouseHandler = (e) => {
    setFlipX(hoverHeading(e)[0])
    setFlipY(hoverHeading(e)[1])
  }

  return (
    <div className='header' onMouseMove={(e) => mouseHandler(e)}>
      <img
        src={require('../assets/images/headerIMG.png')}
        alt='header_img'
        className='header__img'
        style={{
          transform: `translate(${flipX * 90}px, ${flipY * 90}px)`,
        }}
      />
      <video className='header__videoBG' src={bgvideo} autoPlay loop muted />
      <div
        className='header__welcome'
        style={{
          transform: `perspective(50px) rotateX(${
            flipY * -1
          }deg) rotateY(${flipX}deg)`,
        }}
      >
        <h1 className='header__welcome-text'>Hi, I'm Piotr Jedrzejewski</h1>
        <h2 className='header__welcome-text-second'>
          A Full-stack web developer building a professional website and web
          applications using
        </h2>
        <span className='header__welcome-text-mern'>
          <HackedText text={`M.E.R.N`} />
        </span>
        <button className='header__welcome-btn-contact'>
          <HackedText text={`Contact Me`} />
        </button>
      </div>
    </div>
  )
}

export default Heading
