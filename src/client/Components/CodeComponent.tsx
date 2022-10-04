import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as Types from "../../../Types";

const CodeComponent = (props: Types.CodeComponent) => {
  return (
    <div>
      <SyntaxHighlighter language="javascript" style={tomorrowNightBright}>
        {props.codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeComponent;
