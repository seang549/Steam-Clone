

const TitlePic = ({infoData}) => {
    

    if (!infoData[0].game_img || infoData[0].game_img.length === 0) {
        return
        <div id='titlePic'>loading</div>
    }
    return (
        <div id='titlePic'>
            <img src={infoData[0].game_img[0]}></img>
        </div>
    )
}

export default TitlePic