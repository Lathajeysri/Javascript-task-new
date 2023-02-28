function countWords(str) {
    let words = str.toLowerCase().split(/[\s,]+/);  //splittig by space as well as commas 
    
 console.log(words);   //here the output will be in [far, far, away,behind]
    let wordCounts = {};            // new object is created;
  
    for (let i = 0; i < words.length; i++) {
      let  word = words[i];             // here the first value in array will get stored in word i.e far
     
      if (wordCounts[word]) {            //wordcount is the object  wordcounts={  } it will check that word 'far' is already stored in wordcounts just like student[name]  student object having the key property as name
        wordCounts[word]++;                //if yes it will increment the value 
      } else {
        wordCounts[word] = 1;              //it will create new key and value  in this case wordcout will create wordCounts{far:1} 
      }

    }                                         //it will loop till the words length
   
    for (let word in wordCounts) {                     //key in object
    let  count = wordCounts[word];                     //object[key] will return the value foreg 'far' value will be 3 
    let frequency = Math.round((count / words.length) * 100);             //count/total*100 will give u the percentage
    wordCounts[word] = { count, frequency };              //here the object 'wordcounts' key is count and frequency 
  }
  return wordCounts;
  }
  
  // Example usage:
  var wordCounts = countWords('Far far away,behind the word mountains,far from the countries Vokalia and Consonantia,there live the blind texts.separated they live in Bookmarksgrove right at the coast of the Semantics,a large language ocean.');
  console.log(wordCounts);



  /*Copy code
function countLetters(str) {
  let counts = {};

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Ignore non-alphabetic characters
    if (!/[a-zA-Z]/.test(char)) {
      continue;
    }

    // If the character hasn't been counted yet, initialize its count to 1
    if (!(char in counts)) {
      counts[char] = 1;
    }
    // Otherwise, increment its count by 1
    else {
      counts[char]++;
    }
  }

  let maxCount = 0;
  let minCount = Infinity;
  let mostCommon = "";
  let leastCommon = "";

  // Loop through each key in the counts object
  for (let char in counts) {
    let count = counts[char];

    // Update maxCount and mostCommon if necessary
    if (count > maxCount) {
      maxCount = count;
      mostCommon = char;
    }

    // Update minCount and leastCommon if necessary
    if (count < minCount) {
      minCount = count;
      leastCommon = char;
    }
  }

  return {
    counts: counts,
    mostCommon: mostCommon,
    leastCommon: leastCommon
  };
}

// Example usage:
let result = countLetters("Hello, world!");
console.log(result.counts);
console.log("Most common letter: " + result.mostCommon);
console.log("Least common letter: " + result.leastCommon);
*/