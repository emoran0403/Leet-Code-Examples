import * as React from "react";
import * as Types from "../../../Types";
import { useState, useEffect } from "react";
import CodeComponent from "./CodeComponent";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link, useParams } from "react-router-dom";

const SomeComp = (props: Types.CompProps) => {
  const EMPTYFILE = { title: "", codeString: "", link: "", challengeID: "", rank: "", description: "" };
  const [codeArray, setCodeArray] = useState<Types.fileInfo[]>([EMPTYFILE]);

  const [challengeInfo, setChallengeInfo] = useState<Types.challengeInfo>();

  // grab the challengeID from the URL Params
  const { challengeID } = useParams();

  /**
   * This useEffect fetches the codewars api for challenge info and sets it to state
   */
  useEffect(() => {
    fetch(`https://www.codewars.com/api/v1/code-challenges/${challengeID}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setChallengeInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch("/api/solutions")
      .then((res) => {
        return res.json();
      })
      .then((res: Types.fileInfo[]) => {
        console.log({ res });
        const file = res.filter((file) => {
          console.log({ challengeID, fcid: file.challengeID });
          return file.challengeID == challengeID;
        });
        setCodeArray(file);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="container my-5">
      <div>
        {codeArray.map((file, i) => (
          <div key={i}>
            <Link className="btn btn-primary" to="/">
              Go Home
            </Link>
            <div>{file.title}</div>
            <div>{file.link}</div>
            <div>ID: {file.challengeID}</div>
            <div>Rank: {file.rank}</div>
            <div>Description:</div>
            <ReactMarkdown children={challengeInfo?.description || ""} remarkPlugins={[remarkGfm]} />
            <CodeComponent codeString={file.codeString} isDetails />
          </div>
        ))}
      </div>
    </main>
  );
};

export default SomeComp;
