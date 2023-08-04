import { useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
import "./components/ReviewGraph/GraphForReviews.css";
import ScrollToAnchor from "./ScrollToAnchor";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx"
import {useAuthData, useAuthDataUpdate} from "./AuthContext.jsx"
import axios from 'axios'

function App() {

  const checkAuthenticated = async () => {
    try {
      const config = {
        headers: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIwMGQxNmFiLTA3NWQtNDNiMy1iOTUyLTdiMGMxNmEwYmE2MyIsImlhdCI6MTY5MTE5MjM4MiwiZXhwIjoxNjkxMTk1OTgyfQ.yIo-wkfypo3Zp1gGLjg0zwarumi4nX4-dE5tTmveOO8'
        }
      }
      const res = await axios.get("https://steam-clone-zf6a.onrender.com/api/auth/verify", config);
      console.log(res.data)
      const parseRes = await res.data;

      return parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);



  const setAuth = (boolean) => {
    useAuthDataUpdate(boolean);
  };


  return (
    <Router>
      <Routes>
        <Route 
          exact path="/login"
          element={
            <Login setAuth={setAuth}/>
          }
          ></Route>
        <Route 
          exact path="/register"
          element={
            <Register setAuth={setAuth}/>
          }
          ></Route>
        <Route
          exact
          path="/"
          element={
            <>
              <ScrollToAnchor />
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
                  <DataProvider>
                    <div className="review-graph-area">
                      <GraphForReviews />
                    </div>
                    <div className="clear" style={{ width: "940px" }}></div>
                    <div id="reviews-summary">
                      <div className="reviews-area-container">
                        <div style={{ paddingTop: "6px", display: "flex" }}>
                          <div id="review-subTitle">MOST HELPFUL REVIEWS</div>
                          <span id="review-subTitle2">IN THE PAST 30 DAYS</span>
                        </div>
                        <div className="hr"></div>
                        <ReviewCards />
                      </div>
                    </div>
                  </DataProvider>
                </div>
                <div className="footer-area">
                  <Footer />
                </div>
              </div>
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
