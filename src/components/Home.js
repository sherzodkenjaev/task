import React from "react";
import "../styles/Home.css";
import ox from "../styles/ox.jpg";

function Home() {
  return (
    <div className="home">
      <h1>Assalomu Alaykum Xush Kelibsiz</h1>
      <img src={ox} alt="" />
    </div>
  );
}

export default Home;
