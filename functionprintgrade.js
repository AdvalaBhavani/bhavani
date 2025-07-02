function printGrade(marks) {
  if (marks > 90 && marks <= 100) {
    console.log('A');
  } else if (marks > 75 && marks <= 89) {
    console.log('B');
  } else if (marks > 60 && marks <= 74) {
    console.log('C');
  } else if (marks < 60) {
    console.log('F');
  } else {
    console.log('valid marks');
  }
}
const marks = present(prompt("Enter marks: "));
printGrade(marks);
