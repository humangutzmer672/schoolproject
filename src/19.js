// This is an example of a simple student registration system.
// You can modify it to add features such as adding new students, updating existing students,
// removing students, and more.

function registerStudent(name) {
  console.log(`Registered a new student: ${name}`);
}

registerStudent("John Doe"); // Example usage

function displayStudents() {
  const students = [
    { name: "Alice", age: 18 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 19 }
  ];

  students.forEach(student => {
    console.log(`Student: ${student.name}, Age: ${student.age}`);
  });
}

displayStudents();
