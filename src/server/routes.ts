import * as express from "express";
import * as fs from "fs";
import * as path from "path";
import * as Types from "../../Types";

const router = express.Router();

router.get("/api/solutions", (req, res, next) => {
  const pathName = path.join(__dirname, "../CodeExamples/CodeWars/Finished/");

  fs.readdir(pathName, (err, files) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "no files found" });
    } else {
      let fileArray: Types.fileInfo[] = [];

      for (const file of files) {
        // transform the title to something more readable by adding spaces in front of capitals, and removing the .js file extension
        const title = file
          .replace(/([a-z])([A-Z])/g, "$1 $2")
          .replace(/([A-Z])([A-Z])/g, "$1 $2")
          .replace(".js", "");
        // convert the data in the file to a string
        const codeString = fs.readFileSync(path.join(pathName, file)).toString();

        // grab the first line, which has the link to the example on codewars website
        const [firstLine, secondLine] = codeString.split("\n");

        // grab the challengeID from the first line
        const challengeID = firstLine
          .replace("//@", "")
          .replace(/\s+/g, "")
          .replace("https://www.codewars.com/kata/", "")
          .replace("/javascript", "")
          .replace("/train", "");

        //@  https://www.codewars.com/kata/5839edaa6754d6fec10000a2

        // grab the rank from the secondLine
        const rank = secondLine.replace("//@ ", "");

        // grab the description from a fetch to the codewars API

        const info: Types.fileInfo = { title, codeString, link: file, challengeID, rank };

        // push the response object into the array
        fileArray.push(info);
      }

      // console.log({ fileArray });
      res.status(200).json(fileArray);
      // console.log({ files, fileArray });
    }
  });
});

export default router;
