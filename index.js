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

const titleCased = () => {
  return tutorials
}


/* breaking down what the lab asks us to do:

goes through line by line of array and returns the string - using .map()
goes into returned string and runs function - the function looks for a space, when it finds a space, it turns the index+1 character into uppercase and proceeds to next character

*/

function characterChecker(){
   for (int i = 0; i < str.length(); i++) {
      if (str.charAt(i) === " "){
        str.charAt(i+1).toUpperCase()
      }
  }
}

function titleCased(){
  
}

