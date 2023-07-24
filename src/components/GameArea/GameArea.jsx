import { useState, useEffect } from 'react'

import Carousel from './Carousel/Carousel.jsx'
import GameInfo from './GameInfo/GameInfo.jsx'
import WishList from './WishList.jsx'

const GameArea = () => {





    return (
        <div id='GameArea'>
            <div>
                <Carousel />
                <GameInfo />
            </div>
            <div>
                <WishList />
            </div>
        </div>
    )
}

export default GameArea