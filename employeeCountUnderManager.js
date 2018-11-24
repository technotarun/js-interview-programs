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

var managerObj = {};

//Comparator function to sort the employee object based on manager name
var comparatorFunction = function (emp1, emp2) {
    if (emp1.manager < emp2.manager) {
        return -1;
    }

    if (emp1.manager > emp2.manager) {
        return 1;
    }

    return 0;
};

employeeData = employeeData.sort(comparatorFunction);

var tempManager = employeeData[0].manager;
var reporteeCount = 1;

for (var i = 1; i < employeeData.length; i++) {
    if (tempManager === employeeData[i].manager) {
        reporteeCount++;
        managerObj[employeeData[i].manager] = reporteeCount;
    } else {
        reporteeCount = 1;
        managerObj[employeeData[i].manager] = reporteeCount;
        tempManager = employeeData[i].manager;
    }
}

console.log(managerObj);
