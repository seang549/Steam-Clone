import { useState, useEffect } from "react";
import { DataProvider } from "./components/ReviewContext";
import "./components/Reviews/Reviews.css";
import StoreNav from "./components/Navbar/StoreNav";
import GamerJuice from "./components/GameBodyFolder/GamerJuice";
import GraphForReviews from "./components/ReviewGraph/GraphForReviews.jsx";
import GameArea from "./components/GameArea/GameArea.jsx";
import Header from "./components/HeaderFolder/Header";
import Footer from "./components/FooterFolder/Footer";
import ReviewCards from "./components/Reviews/ReviewCards.jsx";
import "./Navbar.css";
import "./Gamearea.css";
import "./App.css";
import "./components/GameBodyFolder/GameBody.css";

function App() {
  return (
    <div>
      <div className='header-area'>
        <Header />
      </div>
      <div className='game-bgd'>
        <div className='game-area-bgd'>
          <StoreNav />
          <GameArea />
        </div>
        <GamerJuice />

        <div className='clear'></div>
        <div className='review-graph-area'>
          <DataProvider>
            <GraphForReviews />
          </DataProvider>
        </div>
        <div className='clear' style={{ width: "940px" }}></div>
        <div id='reviews-summary'>
          <div className='reviews-area-container'>
            <div style={{ paddingTop: "6px", display: "flex" }}>
              <div id='review-subTitle'>MOST HELPFUL REVIEWS</div>
              <span id='review-subTitle2'>IN THE PAST 30 DAYS</span>
            </div>
            <div className='hr'></div>
            <DataProvider>
              <ReviewCards />
            </DataProvider>
          </div>
        </div>
      </div>
      <div className='footer-area'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
