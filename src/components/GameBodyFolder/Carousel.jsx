import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {
    const settings = {
        dots: false,
        infinte: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <Slider {...settings}>
            <div>
                <img src=""></img>
            </div>
        </Slider>
    )
}


export default Carousel