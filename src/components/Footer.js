const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__info'>
        <ul className='footer__info-ul'>
          <li>123-456-7890</li>
          <li>piotrdevjedrzejewski@gmail.com</li>
          <li>
            <a href='https://github.com/PiotrDevJedrzejewski'>
              https://github.com/PiotrDevJedrzejewski
            </a>
          </li>
        </ul>
      </div>
      <div className='footer__copy'>
        <p>
          &copy; 2023 by Piotr Jedrzejewski. Created with React. All rights
          reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
