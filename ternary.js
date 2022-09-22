// This is a simple program that prints the grade of strudents

// Using ternary operator

let marks = 94

let grade = 

marks > 90 ? "AA" 
: marks > 80 && marks <= 90 ? "AB"
: marks > 70 && marks <= 80 ? "BB"
: marks > 60 && marks <= 70 ? "BC" 
: marks > 50 && marks <= 60 ? "CC"
: marks > 40 && marks <= 50 ? "CD"
: marks > 30 && marks <= 40 ? "DD"
: "FF"

console.log(grade);