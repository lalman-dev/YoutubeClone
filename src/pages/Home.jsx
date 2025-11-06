import React from "react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div>
        <Feed sidebar={sidebar}/>
      </div>
    </>
  );
};

export default Home;
