// Variable with a numeric grade
let numericGrade = 85;

// Function to convert numeric grade to letter grade
function convertNumericGradeToLetterGrade(numericGrade) {
 if (numericGrade >= 90) {
    return 'A';
 } else if (numericGrade >= 80) {
    return 'B';
 } else if (numericGrade >= 70) {
    return 'C';
 } else if (numericGrade >= 60) {
    return 'D';
 } else {
    return 'F';
 }
}

// Output the corresponding letter grade
let letterGrade = convertNumericGradeToLetterGrade(numericGrade);
console.log(`The letter grade for a numeric grade of ${numericGrade} is ${letterGrade}.`);
