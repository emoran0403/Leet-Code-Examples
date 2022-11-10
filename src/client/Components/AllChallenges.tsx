import * as React from "react";
import * as Types from "../../../Types";
import { useState, useEffect } from "react";
import CodeComponent from "./CodeComponent";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";
{
  /* <ReactMarkdown children={file.description} remarkPlugins={[remarkGfm]} /> */
}

const SomeComp = (props: Types.CompProps) => {
  const EMPTYFILE = { title: "", codeString: "", link: "", challengeID: "", rank: "", description: "" };
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
        // console.log({ res });
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
          <div key={i}>
            <Link className="btn btn-primary" to={`/challenges/${file.challengeID}`}>
              <span>
                {file.rank} {file.title}
              </span>
            </Link>

            <CodeComponent codeString={file.codeString} />
          </div>
        ))}
      </div>
      <div>I should see code above lol</div>
    </main>
  );
};

export default SomeComp;
