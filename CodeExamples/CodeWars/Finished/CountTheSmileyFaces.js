//@ https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
//@ 6

//return the total number of smiling faces in the array
function countSmileys(arr) {
  // account for edge cases (the array is empty)
  if (!arr) 0;
  // define an array of integers corresponding to the character codes of the symbols allowed for eyes
  // : = 58 && ; = 59
  const eyeCodes = [58, 59];
  // define an array of integers corresponding to the character codes of the symbols allowed for noses
  // - = 45 && ~ = 126
  const noseCodes = [45, 126];
  // define an array of integers corresponding to the character codes of the symbols allowed for mouths
  // ) = 41 && D = 68
  const mouthCodes = [41, 68];

  //define a variable to hold the sum of smiley faces, as 0
  let smileyFaces = 0;

  // iterate over the array, testing whether each element contains valid characters in the right places
  arr.forEach((face) => {
    // define the character codes for the current face
    let eye, nose, mouth;

    if (face.length === 2) {
      // if the face has 2 characters, update eye and mouth
      eye = face.charCodeAt(0);
      mouth = face.charCodeAt(1);

      // determine whether the eye, nose, and mouth are acceptable
      const goodEyes = eyeCodes.includes(eye);
      const goodMouth = mouthCodes.includes(mouth);

      if (goodEyes && goodMouth) {
        // increment if the face is composed of acceptable characters
        smileyFaces++;
      }
    } else if (face.length === 3) {
      // if the face has 3 characters, update eye, nose, and mouth
      eye = face.charCodeAt(0);
      nose = face.charCodeAt(1);
      mouth = face.charCodeAt(2);

      // determine whether the eye, nose, and mouth are acceptable
      const goodEyes = eyeCodes.includes(eye);
      const goodNose = noseCodes.includes(nose);
      const goodMouth = mouthCodes.includes(mouth);

      if (goodEyes && goodNose && goodMouth) {
        // increment if the face is composed of acceptable characters
        smileyFaces++;
      }
    } else {
      // account for edge cases where a face is composed of more than 2 or 3 characters
      return;
    }

    // if the face is composed of 2 characters, don't check noses
  });

  // return the number of smiley faces
  return smileyFaces;
}
