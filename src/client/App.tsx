import * as React from "react";
import * as Types from "../../Types";
import { useState, useEffect } from "react";
// import Comp1 from "./Components/Comp1";
import CodeComponent from "./Components/CodeComponent";
import SomeComp from "./Components/Comp1";

const App = (props: Types.AppProps) => {
  return (
    <main className="container my-5">
      <div>This is App</div>
      <SomeComp />
    </main>
  );
};

export default App;
