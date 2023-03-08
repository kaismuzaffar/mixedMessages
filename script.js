// Define arrays of possible messages
const greetings = ["Hello", "Marhaba", "As salaamu alaykum "];
const adjectives = ["awesome", "beloved", "respected", "wonderful", "incredible"];
const nouns = ["person", "human", "muslim", "brother", "sister" ];

// Generate a random index for each array
const greetingIndex = Math.floor(Math.random() * greetings.length);
const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
const nounIndex = Math.floor(Math.random() * nouns.length);

// Construct the message by concatenating the random words
const message = `${greetings[greetingIndex]} ${adjectives[adjectiveIndex]} ${nouns[nounIndex]}!`;

// Output the message to the console
console.log(message);
