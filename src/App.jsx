import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DataProvider } from "./components/ReviewContext";
import StoreNav from "./components/Navbar/StoreNav";
import GamerJuice from "./components/GameBodyFolder/GamerJuice";
import GraphForReviews from "./components/ReviewGraph/GraphForReviews.jsx";
import GameArea from "./components/GameArea/GameArea.jsx";
import Header from "./components/HeaderFolder/Header";
import Footer from "./components/FooterFolder/Footer";
import ReviewCards from "./components/Reviews/ReviewCards.jsx";
import ScrollToAnchor from "./ScrollToAnchor";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import { useAuthData, useAuthDataUpdate } from "./AuthContext.jsx";
import axios from "axios";
import "./combined.css";

function App() {
  const setAuthData = useAuthDataUpdate();
  const checkAuthenticated = async () => {
    try {
      const config = {
        headers: {
          token: localStorage.token,
        },
      };
      const res = await axios.get(
        "https://steam-clone-zf6a.onrender.com/api/auth/verify",
        config
      );
      const parseRes = await res.data;
      console.log(parseRes);

      return parseRes === true ? setAuthData(true) : setAuthData(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, [useAuthData]);

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
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
