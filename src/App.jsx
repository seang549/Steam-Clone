import { useState, useEffect } from "react";
import "./components/Reviews/Reviews.css";
import StoreNav from "./components/Navbar/StoreNav";
import GamerJuice from "./components/GameBodyFolder/GamerJuice";
import GraphForReviews from "./components/ReviewGraph/GraphForReviews.jsx";
import Reviews from "./components/Reviews";
import GameArea from "./components/GameArea/GameArea.jsx";
import Header from "./components/HeaderFolder/Header";
import Footer from "./components/FooterFolder/Footer";
import ReviewCards from "./components/Reviews/ReviewCards.jsx";
import axios from "axios";
import "./Navbar.css";
import "./Gamearea.css";
import "./App.css";

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
        <GamerJuice />
        <div className="clear"></div>
        <div className="review-graph-area"><GraphForReviews /></div>
        <div className="clear" style={{ width: "940px" }}></div>
        <div className="reviews-area">
          <ReviewCards />
        </div>
      </div>
      <div className="footer-area">
        <Footer />
      </div>
    </div>
  );
}

export default App;
