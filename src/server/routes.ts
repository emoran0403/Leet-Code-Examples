import * as express from "express";
import * as fs from "fs";
import * as path from "path";
import * as Types from "../../Types";

const router = express.Router();

// router.get("/api/hello", (req, res, next) => {
//   res.json("World");
// });

router.get("/api/solutions", (req, res, next) => {
  const pathName = path.join(__dirname, "../CodeExamples/CodeWars/Finished/");

  fs.readdir(pathName, (err, files) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "no files found" });
    } else {
      let fileArray: Types.fileInfo[] = [];

      files.forEach((file) => {
        // transform the title to something more readable by adding spaces in front of capitals, and removing the .js file extension
        const title = file
          .replace(/([a-z])([A-Z])/g, "$1 $2")
          .replace(/([A-Z])([A-Z])/g, "$1 $2")
          .replace(".js", "");
        // convert the data in the file to a string
        const codeString = fs.readFileSync(path.join(pathName, file)).toString();

        // grab the first line, which has the link to the example on codewars website
        const firstLine = codeString.split("\n")[0];

        //! need to trim out the '//@ ' at the beginning, so the rest of the line is just the url
        // then slap that into the object below

        // build the response object and push it into the array
        fileArray.push({ title, codeString, link: file });
      });

      res.status(200).json(fileArray);
      console.log({ files, fileArray });
    }
  });
});

export default router;
