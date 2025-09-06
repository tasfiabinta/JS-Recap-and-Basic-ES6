const employee = {
  name: "Somaya Binta",
  designation: "Dev",
  salary: 20000,
  experience: 2,
};

//object looping : for in

for (const keys in employee) {
  const values = employee[keys]; // to add values as well
  //console.log(keys, ":", values);
}

//output

// name : Somaya Binta
// designation : Dev
// salary : 20000
// experience : 2

//applying loop on array to get object properties

const keys = Object.keys(employee);

for (const key of keys) {
  const value = employee[key];
  console.log(key, ":", value);
}

//output

// name : Somaya Binta
// designation : Dev
// salary : 20000
// experience : 2
