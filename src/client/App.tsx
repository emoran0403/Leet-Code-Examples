import * as React from "react";
import { useState, useEffect } from "react";

const App = (props: AppProps) => {
  const [stepFuncInput, setStepFuncInput] = useState<string>(``);

  interface IFlatObjectOfStrings {
    [key: string]: string;
  }

  const stepFunction = () => {
    // cast the input to a number
    let numOfSteps = Number(stepFuncInput);
    // if the input is a number, return
    if (isNaN(numOfSteps)) {
      console.log("Not a Number!");
    }
    // declare symbols
    let stepSymbol = `#`;
    let spaceSymbol = `-`;
    // make an object for fun
    let LukesObject: IFlatObjectOfStrings = {};

    // add a property to the object for each number of steps
    for (let i = 0; i < numOfSteps; i++) {
      LukesObject[`Step ${i}`] = ``;
    }

    for (let i = 0; i < numOfSteps; i++) {
      LukesObject[`Step ${i}`] = LukesObject[`Step ${i}`] + stepSymbol;
    }
    console.log({ LukesObject });
  };

  return (
    <main className="container my-5">
      <h1 className="text-primary text-center">Leet Code BS</h1>

      <input
        type="text"
        className="form-control"
        placeholder="Enter a number for the step function"
        value={stepFuncInput}
        onChange={(e) => setStepFuncInput(e.target.value)}
      ></input>
      <button className="btn btn-primary" onClick={() => stepFunction()}>
        Run Step Function (F12 to Check the Console)
      </button>
    </main>
  );
};

interface AppProps {}

export default App;

// #----
// ##---
// ###--
// ####-
// #####
