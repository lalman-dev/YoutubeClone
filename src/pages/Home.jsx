import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div>
        <Feed sidebar={sidebar} category={category} />
      </div>
    </>
  );
};

export default Home;
