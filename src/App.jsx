import { useState, useEffect } from "react";
import axios from "axios";

import StoreNav from "./components/StoreNav";
// import GameAreaCSS from "./components/GameArea";
import GameBody from "./components/GameBody";
import GraphForReviews from "./components/GraphForReviews";
import Reviews from "./components/Reviews";
import GameArea from "./components/GameArea/GameArea.jsx";
import Header from "./components/HeaderFolder/Header";
import Footer from "./components/FooterFolder/Footer";

function App() {
  const [testArr, setTestArr] = useState([]);

  const url = "https://steam-clone-zf6a.onrender.com";

  return (
    <div>
      <div className="header-area">
        <Header />
      </div>
      <div className="game-bgd">
        <div className="game-area-bgd">
          <StoreNav />
          <GameArea />
        </div>
        <GameBody />
        <div className="clear"></div>
        <div className="review-graph-area">
          <GraphForReviews />
        </div>
        <div className="clear" style={{ width: "940px" }}></div>
        <div className="reviews-area">
          <Reviews />
        </div>
      </div>
      <div className="footer-area">
        <Footer />
      </div>
    </div>
  );
}

export default App;
