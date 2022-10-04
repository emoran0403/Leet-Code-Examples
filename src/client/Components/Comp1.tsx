import * as React from "react";
import * as Types from "../../../Types";
import { useState, useEffect } from "react";
import CodeComponent from "./CodeComponent";

const SomeComp = (props: Types.CompProps) => {
  const [codeString, setCodeString] = useState<string>("");

  // { title: string; content: string; link: string }[]

  fetch("/api/solutions")
    .then((res) => {
      return res.json();
      // res is an array of files names
      // return res.text();
    })
    .then((res) => {
      // setCodeString(res);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <main className="container my-5">
      <div>This is where the entire code exmaple would go, with the code solution below</div>
      <div>example title</div>
      <div>example link</div>
      <div>
        <CodeComponent codeString={codeString} />
      </div>
    </main>
  );
};

export default SomeComp;
