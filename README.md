# word-anagram-finder

## Objective

Implement a function named `checkWord` that accepts an input string and a word list. The function returns an array of words from the word list that can be formed by rearranging some or all of the letters in the input string. Each letter in the input string may be used up to once per word.

## Approach

* The solution uses a function to build a character array representing the frequency of each character in the input string.
* It then iterates through the word list, builds charecter frequency array for each word and checks its anagram validity by comparing the frequency of characters in each word with the frequency of characters in the input string.
* If a word can be formed, it is added to the result array.

## Test Cases

- Test Case 1:
  - Input: `inputStr = ""`, `wordList = ["hello", "am", "aaaa", ""]`
  - Expected Output: `[]`
  - 
- Test Case 2:
  - Input: `inputStr = "a"`, `wordList = ['aaaa', '', 'a', 'aa']`
  - Expected Output: `["a"]`
  
- Test Case 3:
  - Input: `inputStr = "ate"`, `wordList = ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]`
  - Expected Output: `["ate", "eat", "tea"] `
  
- Test Case 4:
  - Input: `inputStr = "oogd"`, `wordList = ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]`
  - Expected Output: `["dog", "do", "god", "goo", "go", "good"]`
  - 
- Test Case 5:
  - Input: `inputStr = "silent"`, `wordList = ["listen", "tinsel", "enlist", "inlets", "slit", "silent"]`
  - Expected Output: `["listen", "tinsel", "enlist", "inlets", "slit", "silent"]`

## Additional Tests
- If there is chance of very long input string, we can try adding test cases with larger input strings and word lists to ensure scalability.
