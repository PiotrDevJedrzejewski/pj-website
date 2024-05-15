import { AiOutlinePhone, AiOutlineMail, AiOutlineGithub } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact__container'>
        <h1 className='contact__title'>Contact</h1>
        <div className='contact__list'>
          <div className='contact__list-item'>
            <AiOutlinePhone className='contact__list-item-icon' /> 722-444-444
          </div>
          <div className='contact__list-item'>
            <AiOutlineMail className='contact__list-item-icon' />{' '}
            piotrdevjedrzejewski@gmail.com
          </div>
          <div className='contact__list-item'>
            <AiOutlineGithub className='contact__list-item-icon' />{' '}
            https://github.com/PiotrDevJedrzejewski
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
