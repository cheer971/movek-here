import React, { useState } from "react";
import "./home.scss";
import Navbar from "../components/navbar/Navbar";
import Intro from "../components/intro/Intro";
import List from "../components/list/List";

const Home = () => {
  const [type] = useState("movies");
  return (
    <div className="home">
      <Navbar />
      <Intro type={type} />
      <List />
      <List />
    </div>
  );
};

export default Home;
