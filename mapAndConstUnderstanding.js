var employeeData = [
    { name: 'paul', manager: 'nisha' },
    { name: 'akhil', manager: 'rahul' },
    { name: 'nitu', manager: 'rahul' },
    { name: 'bijay', manager: 'kiran' },
    { name: 'joy', manager: 'kiran' },
    { name: 'arjun', manager: 'nikita' },
    { name: 'ram', manager: 'nisha' },
    { name: 'hasim', manager: 'kiran' }
];

console.log(employeeData);

employeeData.map((emp) => {
emp.department = "Technology";
});

console.log(employeeData);


//CONST doesn't creates immutable variables instead it creates immutable binding.
//So, const creates a binding to that particular object. const assures that variable emp won't have any other object's Binding.

const emp = { name: 'paul', manager: 'nisha' };

Object.freeze(emp);

emp['age'] = 23;

emp['name'] = 'Rahul';

console.log(emp);