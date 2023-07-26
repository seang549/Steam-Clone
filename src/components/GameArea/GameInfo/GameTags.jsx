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


    return (
        <>
            {tags.map((tag) => (
                <button key={tag.tag_id}>{tag.tag_title}</button>
            ))}
            <button>+</button>
        </>
    )



}

export default GameTags