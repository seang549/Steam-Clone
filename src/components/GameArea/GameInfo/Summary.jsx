import {useEffect} from 'react'

const Summary = ({ infoData }) => {
       const summ = infoData[0].about_this_game
    
    return (
        <div id='summary'>
            <p>{summ}</p>
        </div>
    )
}

export default Summary