// a function that takes two parameters
// Then determines the length of two strings
// returns the result short,long, short

function shortLongShort(word1, word2) {
  if (word1.length < word2.length) {
    console.log(word1 + word2 + word1);
  } else {
    console.log(word2 + word1 + word2);
  }
}

shortLongShort("abc", "defgh"); // "abcdefghabc"
shortLongShort("abcde", "fgh"); // "fghabcdefgh"
shortLongShort("", "xyz"); // "xyz"
