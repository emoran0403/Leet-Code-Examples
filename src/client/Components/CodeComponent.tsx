import * as React from "react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as Types from "../../../Types";

const CodeComponent = (props: Types.CodeComponent) => {
  //lines of code
  const lines = props.codeString.split("\n").length;
  // console.log(lines);

  // set the toggle based on whether or not there are more than 10 lines of code
  const [height, setHeight] = useState<"225.6px" | "auto">(lines > 10 ? "225.6px" : "auto");
  const [overflowY, setOverflowY] = useState<"scroll" | "clip">(lines > 10 ? "scroll" : "clip");

  const handleScroller = () => {
    // if the code is short and does not need a scroll bar, dont allow it to get one

    if (lines > 10) {
      setHeight(height === "225.6px" ? "auto" : "225.6px");
      setOverflowY(overflowY === "scroll" ? "clip" : "scroll");
    }
  };

  // allows us to style for the all challenges view or the details view
  const getStyle = () => {
    return props.isDetails ? {} : { minHeight: height, height: height, overflowY: overflowY };
  };

  return (
    <div style={getStyle()} onClick={handleScroller}>
      <SyntaxHighlighter style={tomorrowNightBright} language="javascript">
        {props.codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeComponent;
