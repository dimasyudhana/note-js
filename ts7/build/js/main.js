"use strict";
// run in live server : http://localhost:5500/ts3/build/
// Index Signatures
// Property 'Job' is missing in type '{ Pizza: number; Books: number; }' but required in type 'TransactionObj'.ts(2741)
// main.ts(12, 5): 'Job' is declared here.
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    // Job: 50,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// Index signature in type 'TransactionObj' only permits reading.ts(2542)
// todaysTransactions.Pizza = 40
console.log(todaysTransactions['Dave']); // undefined
const student = {
    name: 'Goug',
    GPA: 3.5,
    classes: [100, 200]
};
// Property 'test' does not exist on type 'Student'.ts(2339)
// console.log(student.test) // undefined
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 200,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
