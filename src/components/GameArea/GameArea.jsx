import { useState, useEffect } from 'react'

import Carousel from './Carousel/Carousel.jsx'
import GameInfo from './GameInfo/GameInfo.jsx'
import WishList from './WishList.jsx'

const GameArea = () => {
    const [infoData, setInfoData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://steam-clone-zf6a.onrender.com/game_info', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            const data = await response.json();
            setInfoData(data)
        }
        getData()
    }, [])


    useEffect(() => {
    }, [infoData])



    return (
        
        <div id='GameArea'>
            <div id='gameAreaHeader'>
                <div id='gameAreaBreadcrumbs'>
                    <a href='#'>All games</a> &gt;
                    <a href='#'>Indie Games</a> &gt;
                    <a href='#'>Spider</a>
                </div>
                <div id='lowerGameHeader'>
                    <div id='gameAreaTitle'>Spider</div>
                    <div id='communityHubDiv'>
                        <button id='communityHub'>Community Hub</button>
                    </div>
                </div>
            </div>
            <div>
                <Carousel infoData={infoData} />
                <GameInfo infoData={infoData} />
            </div>
            <div>
                <WishList />
            </div>
        </div>
    )
}

export default GameArea