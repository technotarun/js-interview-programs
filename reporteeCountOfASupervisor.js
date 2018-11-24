//JSON data is structured as {reportee: manager}

let data = [{ John: "Dexter" },
            { Dexter: "Kennedy" },
            { Kennedy: "Luis" },
            { Sumuel: "John" },
            { Farguson: "Dexter" },
            { Harris: "John" },
            { Kouron: "John" }];

let employees = [];
let empMap = new Map();

data.forEach(emp => {
    employees.push(...Object.values(emp));
});

employees.forEach(emp => {
    let count = employees.reduce(function (accumulator, currentValue) {
        return accumulator + (currentValue === emp);
    }, 0);
    empMap.set(emp, count);
});

for (var [supervisor, reporteeCount] of empMap) {
    console.log(supervisor + ' => ' + reporteeCount);
}