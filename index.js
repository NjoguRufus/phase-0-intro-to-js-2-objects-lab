// Write your solution in this file!

// Start employee object
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
  };
  
  // Function that updates employee with key-value (non-destructive)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }
  
  // Function to update employee with key-value (destructive)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function that deletes property from employee (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    const { [key]: deletedKey, ...rest } = employee;
    return rest;
  }
  
  // Function that deletes property from employee (destructive)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // eg
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "city", "New York");
  console.log(updatedEmployee); // { name: "Sam", streetAddress: "11 Broadway", city: "New York" } (non-destructive)
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "phone", "123-456-7890");
  console.log(employee); // { name: "Sam", streetAddress: "11 Broadway", phone: "123-456-7890" } (destructive)
  
  const employeeWithoutCity = deleteFromEmployeeByKey(employee, "city");
  console.log(employeeWithoutCity); // { name: "Sam", streetAddress: "11 Broadway" } (non-destructive)
  
  destructivelyDeleteFromEmployeeByKey(employee, "phone");
  console.log(employee); // { name: "Sam", streetAddress: "11 Broadway" } (destructive)
  
