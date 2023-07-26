

const CarouselBody = ({ activeImg, videoSelected }) => {

    if (!activeImg || activeImg === '') {
        return (
            <>
                <video width='320' height='240' autoPlay muted controls>
                    <source src='https://cdn.akamai.steamstatic.com/steam/apps/256946713/movie480_vp9.webm?t=1685461020'></source>
                </video>
            </>
        )
    } else {
            return (
                <div id='carouselBody'>
                <img id='activeCarouselImg' src={activeImg}></img>
            </div>
        )
    }
}

export default CarouselBody