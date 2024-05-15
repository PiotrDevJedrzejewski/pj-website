// react-slick @@@@
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// react-slick @@@@
import Slide from './Slide'

const SliderContainer = () => {
  const slideArray = [1, 2, 3, 4, 5]
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 20,
    cssEase: 'linear',
    pauseOnHover: false,
    focusOnSelect: false,
    arrows: false,
  }
  return (
    <div className='slider'>
      <div className='slider__wrapper'>
        <Slider {...settings}>
          {slideArray.map((slide, slideIndex) => {
            return <Slide key={slideIndex} />
          })}
        </Slider>
      </div>
    </div>
  )
}

export default SliderContainer
