import * as React from "react";
import * as Types from "../../../Types";
import { useState, useEffect } from "react";
import CodeComponent from "./CodeComponent";

const SomeComp = (props: Types.CompProps) => {
  const EMPTYFILE = { title: "", codeString: "", link: "", challengeID: "", rank: "" };
  const [codeArray, setCodeArray] = useState<Types.fileInfo[]>([EMPTYFILE]);

  /**
   * This useEffect fetches all solutions and sets them to state
   */
  useEffect(() => {
    fetch("/api/solutions")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log({ res });
        setCodeArray(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="container my-5">
      <div>This is where the entire code example would go, with the code solution below</div>
      <div>example link</div>
      <div>
        {codeArray.map((file, i) => (
          <div>
            <div>{file.title}</div>
            <div>{file.link}</div>
            <div>ID: {file.challengeID}</div>
            <div>Rank: {file.rank}</div>
            <CodeComponent key={i} codeString={file.codeString} />
          </div>
        ))}
      </div>
      <div>I should see code above lol</div>
    </main>
  );
};

export default SomeComp;
