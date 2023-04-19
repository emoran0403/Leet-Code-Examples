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
   * This useEffect fetches all solutions, sorts them on descending diffculty, and sets them to state
   */
  useEffect(() => {
    fetch("/api/solutions")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log({ res });
        res.sort((fileA: Types.fileInfo, fileB: Types.fileInfo) => {
          return Number(fileA.rank[0]) - Number(fileB.rank[0]);
        });
        setCodeArray(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="container my-5">
      <div>
        {codeArray.map((file, i) => (
          <div key={i} className="mb-3">
            <div className="d-flex flex-row justify-content-between">
              <div className="mx-3">
                <div className="font-weight-bold">
                  {file.rank} {file.title}
                </div>
              </div>
              <Link className="btn btn-primary mb-2" to={`/challenges/${file.challengeID}`}>
                View Details
              </Link>
            </div>

            <CodeComponent codeString={file.codeString} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default SomeComp;
