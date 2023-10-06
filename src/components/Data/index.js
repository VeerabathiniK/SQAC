import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const ReactSlick = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            src="https://images.pexels.com/photos/8636605/pexels-photo-8636605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="pic"
            className="curve1"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/926390/pexels-photo-926390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="pic"
            className="curve1"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/5935228/pexels-photo-5935228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="pic"
            className="curve1"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="pic"
            className="curve1"
          />
        </div>
      </Slider>
    </div>
  )
}

export default ReactSlick
