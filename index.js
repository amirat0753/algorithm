function countCharacters(sentence) {
    // Initialize counters
    let charCount = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Define vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        // Increment character count
        charCount++;

        // If the character is alphabetic
        if (/[a-zA-Z]/.test(sentence[i])) {
            // If it follows a space or is the first character, increment word count
            if (i === 0 || sentence[i - 1] === ' ') {
                wordCount++;
            }

            // If the character is a vowel, increment vowel count
            if (vowels.has(sentence[i].toLowerCase())) {
                vowelCount++;
            }
        }
    }

    // Output results
    console.log("Length of the sentence:", charCount);
    console.log("Number of words in the sentence:", wordCount);
    console.log("Number of vowels in the sentence:", vowelCount);
}

// Test the function with a sample sentence
const sentence = "The quick brown fox jumps over the lazy dog.";
countCharacters(sentence);
