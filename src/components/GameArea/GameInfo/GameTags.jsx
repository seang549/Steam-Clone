import { useState, useEffect } from "react";

const GameTags = () => {
  const [tags, setTags] = useState([]);
  const [rendered, setRendered] = useState(false);

  const handleClick = (data) => {
    setRendered(true);
    rendered(data);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://steam-clone-zf6a.onrender.com/tags",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setTags(data);
    };
    getData();
  }, []);

  const filteredData = tags.filter((tag) => tag.game_id === 1);

  if (tags) {
    return (
      <>
        <p className='tags-intro'>
          Popular user-defined tags for this product:
        </p>
        {filteredData.map((tag) => (
          <button key={tag.tag_id}>{tag.tag_title}</button>
        ))}
        <button onClick={() => handleClick}>+</button>
      </>
    );
  } else {
    <div>Loading...</div>;
  }
};

export default GameTags;
