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