// define interface for Student object
/* Your code here */
interface Student {
  name: string;
  score: number;
}
// assign interface/type to the function definition properly
function findTopNames(students:Student[]) {
  /* Your code here */
  const pass = students.filter(students => students.score > 8).map(students => students.name);
  return pass;
}

// assign interface/type to the student1 object properly
const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;

//660610789 รัชชานนท์ ไชยวงค์