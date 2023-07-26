import { useEffect, useState } from 'react'

const CarouselNav = ({ infoData, handleChange }) => {
    let [thumbnails, setThumbNails] = useState([])
   
    useEffect(() => {
        let burnFirst = []
        for (let i = 1; i < infoData[0].game_img.length; i++){
            burnFirst.push(infoData[0].game_img[i])
        }
        setThumbNails(burnFirst)
    }, [infoData])

    const handleClick = (url) => {
        handleChange(url);
    }
    
    const handleVideoThumbnailClick = () => {
        handleChange('')
    }


        
    
    if (infoData[0].game_img.length !== 0) {
        return (
            <>
                <img id='videoThumb' src='https://cdn.akamai.steamstatic.com/steam/apps/256946713/movie.293x165.jpg?t=1685461020' onClick={handleVideoThumbnailClick}></img>
                
                {thumbnails.map(thumbnail => (
                    <img src={thumbnail} onClick={()=>handleClick(thumbnail)}></img>
                ))}
            </>
        )
    } else {
        return (
            <p>loading...</p>
        )
    }
}

export default CarouselNav