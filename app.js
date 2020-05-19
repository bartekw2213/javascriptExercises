// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  const wordsArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  wordsArr.sort((a, b) => b.length - a.length);

  const longestWordsArr = wordsArr.filter(
    (word) => wordsArr[0].length === word.length
  );

  if (longestWordsArr.length === 1) return longestWordsArr[0];
  else return longestWordsArr;
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  const newArr = [];
  arr.forEach((element, index) => {
    if (index % len === 0) {
      newArr.push([element]);
    } else {
      newArr[newArr.length - 1].push(element);
    }
  });

  return newArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  return arrays.reduce((reducedArr, element) => reducedArr.concat(element));
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const str1Sorted = str1.split('').sort().join('');
  const str2Sorted = str2.split('').sort().join('');

  return str1Sorted === str2Sorted;
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  const vowelsNumbers = [97, 101, 105, 111, 117, 121];

  const charCoded = str
    .toLowerCase()
    .split('')
    .map((letter, index) => str.charCodeAt(index) + 1);

  const transformedWord = charCoded.reduce((total, letter) => {
    if (letter === 33) {
      return total + String.fromCharCode(32);
    } else if (letter === 122) {
      return total + String.fromCharCode(97).toUpperCase();
    } else if (vowelsNumbers.includes(letter)) {
      return total + String.fromCharCode(letter).toUpperCase();
    } else {
      return total + String.fromCharCode(letter);
    }
  }, '');

  return transformedWord;
}

// Call Function
const output = letterChanges('hello there');

console.log(output);
