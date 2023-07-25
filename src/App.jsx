import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import GameArea from './components/GameArea/GameArea.jsx'

function App() {
  const [testArr, setTestArr] = useState([]);

  const url = "https://steam-clone-zf6a.onrender.com";

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await axios.get(url + "/game_info");
        const data = response.data;
        setTestArr(data);
      };

      getData();
    } catch (err) {
      console.error(err);
    }
  });

  return (
    <>
        <GameArea />
    </>
  );
}

export default App;
