const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// THIS FUNCTION TITLE CAPS A STRING
function characterCaps(str){
  let newString = str
  for (let i = 0; i < str.length; i++) { // caps first letter
    newString = newString.substring(0,1).toUpperCase() + newString.substring(1) 

    if (str.charAt(i) === " "){ // checks for space and caps right after
      newString = newString.substring(0,i+1) + newString.substring(i+1,i+2).toUpperCase() + newString.substring(i+2)
      } 
  }

  return newString;    
}


//titleCased(): Maps the Array and Returns a New Array Where Function has Completed A Task 

function titleCased(){
const titleCased = tutorials.map(characterCaps)
return titleCased;
}





/*
FUNCTIONS I WROTE AS PART OF TESTING MAIN FUNCTION THAT I WOULD LIKE TO KEEP FOR FUTURE REFERENCE: 

// TEST: CAPS ONLY FIRST LETTER OF SENTENCE - this works!
function capsTest(str) {
  return str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase();
}

// TEST: CAPS SECOND CHARACTER AND RETURNS NEW STRING - this works! 
function capsSecondCharacter(str) {
  let newString= str.substring(0,1) + str.substring(1,2).toUpperCase() + str.substring(2).toLowerCase();
  return newString
}

// TEST: CAPS THE CHARACTER AFTER A SPACE -- this works only for the first space. 
  function capsAfterSpace (str){
  newString = str.toLowerCase() 
  let i = 0 
  while (i < str.length+1){
    if (newString.charAt(i) === " "){
      newString = newString.substring(0,i+1) + newString.substring(i+1,i+2).toUpperCase() + newString.substring(i+2)
    return newString
    }
    else {
      i++
    }
  }    
}


*/