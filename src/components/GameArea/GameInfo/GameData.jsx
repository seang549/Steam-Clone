import { useEffect, useState } from 'react'
import AllReviews from './AllReviews.jsx'

const GameData = ({ infoData }) => {
    const [date, setDate] = useState('')
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const rDate = new Date(infoData[0].game_release_date)
        let baseDate = rDate.toDateString().split(' ').slice(1).join(' ')
        baseDate = baseDate.replace(/(?<=\d) /, ", ");
        setDate(baseDate)
    
    }, [])
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://steam-clone-zf6a.onrender.com/reviews', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            const data = await response.json();
            setReviews(data)
        }
        getData()
    }, [])
    return (
        <div id='gameData'>
            <div className='gameDataRow'>
                <AllReviews reviews={reviews}  />
            </div>
            <div className='gameDataRow'>
            <p>RELEASE DATE:</p>
                <p>{date}</p>
            </div>
            <div className='gameDataRow'>
            <p>DEVELOPER:</p>
                <p>{infoData[0].developer} </p>
            </div>
            <div className='gameDataRow'>
            <p>PUBLISHER:</p>
                <p>{infoData[0].publisher}</p>
            </div>
        </div>
    )
}

export default GameData