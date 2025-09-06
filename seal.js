//seal: only modify the object property .

const employee = {
  name: "Somaya Binta",
  designation: "Dev",
  salary: 20000,
  experience: 2,
};

Object.seal(employee);

delete employee.experience;

employee.salary = employee.salary + 3000;

employee.location = "Chittagong";
console.log(employee);

//output

// {
//   name: 'Somaya Binta',
//   designation: 'Dev',
//   salary: 23000,
//   experience: 2
// }
