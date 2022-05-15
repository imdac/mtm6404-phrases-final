const phrase = 'The man we saw saw a saw'

// truncate
// Return a shortened phrase based on the limit
// Adds ... at the end of the string
// limit is max number of characters
// don't end in the middle of a word
function truncate (phrase, limit) {
  // indexOf returns index of the next space
  // after limit
  const end = phrase.indexOf(' ', limit)
  return phrase.substring(0, end) + '...'
}

console.log(truncate(phrase, 15))

// uniqueWords
// Return an array of unique words in a phrase
function uniqueWords (phrase) {
  const uniqueWords = []
  const words = phrase.split(' ')

  for (const word of words) {
    // if the words is not in uniqueWords
    if (uniqueWords.includes(word) === false) {
      uniqueWords.push(word)
    }
  }

  return uniqueWords
}

console.log(uniqueWords(phrase))
