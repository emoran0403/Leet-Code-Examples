import * as React from "react";
import * as Types from "../../Types";
import { useState, useEffect } from "react";
// import Comp1 from "./Components/Comp1";
import CodeComponent from "./Components/CodeComponent";
import AllChallenges from "./Components/AllChallenges";
import { Route, Routes } from "react-router-dom";
import Details from "./Components/Details";

const App = (props: Types.AppProps) => {
  return (
    <main className="container my-5">
      <Routes>
        <Route path="/" element={<AllChallenges />} />
        <Route path="/challenges/:challengeID" element={<Details />} />
      </Routes>
    </main>
  );
};

export default App;
