// given a word and an array of possible anagrams,
// return an array of the words that are anagrams,
// or an emmpty array if there are none
function anagrams(word, words) {
  // i can create an object listing the characters that appear in 'word' and their frequency
  // i can iterate over each entry in 'words' and create a similar object
  // if the objects match, i can push the entry into the return array
  // finally return the array

  // declare an array to push anagrams into
  let returnArray = [];

  // split word into an array to iterate over the array
  const wordAsArray = word.split("");

  // declare the word histogram object
  let wordHistogram = {};

  // define the word histogram object
  wordAsArray.forEach((char) => {
    // if the character does not exist in the histogram, add it
    if (!wordHistogram[char]) {
      wordHistogram[char] = 1;
    } else {
      // otherwise, it does exist, so increment the count
      wordHistogram[char]++;
    }
  });

  //   console.log({ wordHistogram });

  words.forEach((anagram) => {
    //@ create the histogram for the anagram
    // split the anagram into a character array
    const anagramArray = anagram.split("");

    // declare the anagram histogram object
    let anagramHistogram = {};

    // define the anagram histogram object
    anagramArray.forEach((anaChar) => {
      // if the character does not exist in the histogram, add it
      if (!anagramHistogram[anaChar]) {
        anagramHistogram[anaChar] = 1;
      } else {
        // otherwise, it does exist, so increment the count
        anagramHistogram[anaChar]++;
      }
    });

    // console.log({ anagramHistogram });

    //@ compare histograms here
    // define an array of keys for each histogram
    let keysOfWord = Object.keys(wordHistogram);
    let keysOfAnagram = Object.keys(anagramHistogram);

    // if the length of the keys arrays are not equal, there are extra letters, so they cannot be anagrams
    if (keysOfWord.length != keysOfAnagram.length) {
      // return to skip the rest of this iteration
      return;
    }
    // since the letters match, we now check the frequency of the letters
    for (let letter of keysOfWord) {
      // if the frequency does not match, return to skip this iteration
      if (wordHistogram[letter] != anagramHistogram[letter]) {
        return;
      }
    }
    // since the amount of letters, and the frequency of those letters match, we have an anagram
    // so push it into the anagram array
    // console.log({ anagram });
    returnArray.push(anagram);
  });

  //   console.log({ returnArray });
  return returnArray;
}

// anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]);
