import React from "react";
import Main from "../Main";
import Row from "../Row";
import requests from "../../Requests.js";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID='1' title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row rowID='2' title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID='3' title="TopRated" fetchURL={requests.requestTopRated} />
      <Row rowID='4' title="NowPlaying" fetchURL={requests.requestNowPlaying} />{" "}
      <Row rowID='5' title="Popular" fetchURL={requests.requestPopular} />{" "}
    </>
  );
};

export default Home;
