//freeze : can't change anything to object (modify,add,delete)

const employee = {
  name: "Somaya Binta",
  designation: "Dev",
  salary: 20000,
  experience: 2,
};
Object.freeze(employee);

delete employee.experience;

employee.salary = employee.salary + 3000;

employee.location = "Chittagong";
console.log(employee);
