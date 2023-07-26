import { useState, useEffect } from 'react'
// import TagItems from './TagItems.jsx'

const GameTags = () => {

    const [tags, setTags] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://steam-clone-zf6a.onrender.com/tags', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            const data = await response.json();
            setTags(data)
        }
        getData()
    }, [])

    useEffect(() => {
        console.log(tags[0])
    }, [tags])

    return (
        <div id='gameTags'>
            {tags.map((tag) => (
                <button>{tag.tag_title}</button>
            ))}
            <button>+</button>
        </div>
    )



}

export default GameTags