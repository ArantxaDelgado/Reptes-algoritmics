/**
 * 
 * The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

*/
function checkExam(array1, array2) {
    //start with a score of 0
    var totalScore = 0;
      //loop through the array of correct answer
      for(var i = 0; i < array1.length; i++) { 
          //if the answer matches the students answer add 4 to the score
          if(array1[i] === array2[i]){
          totalScore += 4;
          }
          //if the student has an empty string for an answer, add nothing to the score
          else if(array2[i] === ""){
          totalScore -= 0;
          }
          //if the student has an answer that is not correct and not an empty string, deduct 1 point from their score
          else {
          totalScore -= 1
          }
      }
      //if the score is a negative number (below 0), just return 0 as the score
      if(totalScore < 0){
      totalScore = 0;
      };
      return totalScore;
    };

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]), 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0);