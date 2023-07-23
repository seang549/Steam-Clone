import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import TestComponent from "./components/TestComponent";

function App() {
  const [testArr, setTestArr] = useState([]);

  const url = "http://localhost:4000";

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
      <h1>ドキドキ</h1>
      {testArr.map((elem) => (
        <TestComponent elem={elem} key={elem.game_id} />
      ))}
    </>
  );
}

export default App;
