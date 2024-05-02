// returns the valid anagrams that can be formed from the 1st parameter given (inputStr)
// within the list of words given as second parameter(wordList)
function checkAnagrams(inputStr: string, wordList: string[]): string[] {
  if (!inputStr.length || !wordList) {
    return [];
  }

  const result: string[] = [];
  const inputWordFrequencyArray = buildWordCharFrequency(inputStr);

  for (const word of wordList) {
    if (!word.length) {
      continue;
    }

    if (checkAnagramValidity(word, inputWordFrequencyArray)) {
      result.push(word);
    }
  }
  return result;
}

// returns the char frequency record of the word provided
function buildWordCharFrequency(word: string): Record<string, number> {
  let wordCharFreq: Record<string, number> = {};

  for (let i = 0; i < word.length; i++) {
    if (wordCharFreq[word[i]]) {
      wordCharFreq[word[i]] += 1;
    } else {
      wordCharFreq[word[i]] = 1;
    }
  }
  return wordCharFreq;
}

// check if the given word is a valid anagram of the Input string (inputWordFrequencyArray)
function checkAnagramValidity(word: string, inputWordFrequencyArray: Record<string, number>): boolean {
  const wordCharFreq = buildWordCharFrequency(word);

  for (const char in wordCharFreq) {
    // if char is missing in the input string or count of char freq is less in input string,
    // given word is not a valid anagram
    if (!inputWordFrequencyArray[char] || inputWordFrequencyArray[char] < wordCharFreq[char]) {
      return false;
    }
  }
  return true;
}

// Test cases
console.log(checkAnagrams('', ['hello', 'am', 'aaaa', '']));
console.log(checkAnagrams('a', ['aaaa', '', 'a', 'aa']));
console.log(checkAnagrams('ate', ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
console.log(checkAnagrams("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
console.log(filterValidWords("silent", ["listen", "tinsel", "enlist", "inlets", "slit", "silent"]));

