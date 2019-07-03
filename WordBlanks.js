/* In this challenge, we provide you with a noun, a verb, an adjective and an adverb. 
You need to form a complete sentence using words of your choice, along with the words we provide.
You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb. 
You will then assign the formed string to the result variable.
You will also need to account for spaces in your string,
so that the final sentence has spaces between all the words. The result should be a complete sentence.*/
//START
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = "";
  result = "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";
    // Your code above this line
    return result;
  }
  
  // Change the words here to test your function
  wordBlanks("dog", "big", "ran", "quickly");
  wordBlanks("cat", "little", "hit", "slowly")