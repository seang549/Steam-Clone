import CarouselBody from './CarouselBody.jsx'
import CarouselNav from './CarouselNav.jsx'
import { useState, useEffect } from 'react'


const Carousel = ({ infoData }) => {
    const [activeImg, setActiveImg] = useState('')
  
    useEffect(() => {
        if (infoData && infoData.length > 0) {
            setActiveImg(infoData[0].game_img[1])
        }
    }, [infoData])

    const handleChange = (url) => {
        console.log(url)
        setActiveImg(url)
    }

 

    if (!infoData || infoData.length === 0) {
        return <p>Loading...</p>
    } else {
        return (
            <div id='carousel'>
                <CarouselBody activeImg={activeImg} />
                <div id='carouselNav'>
                    <CarouselNav infoData={infoData} handleChange={handleChange} />
                </div>
            </div>
        )
    }
}

export default Carousel