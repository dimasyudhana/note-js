// run in live server : http://localhost:5500/ts3/build/
// Index Signatures

// interface TransactionObj {
//     readonly [index: string]: number 
// }

interface TransactionObj {
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number,
}

// Property 'Job' is missing in type '{ Pizza: number; Books: number; }' but required in type 'TransactionObj'.ts(2741)
// main.ts(12, 5): 'Job' is declared here.
const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    // Job: 50,
    Job: 50,
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransactions))

// Index signature in type 'TransactionObj' only permits reading.ts(2542)
// todaysTransactions.Pizza = 40
console.log(todaysTransactions['Dave']) // undefined


interface Student {
    // [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: 'Goug',
    GPA: 3.5,
    classes: [100,200]
}

// Property 'test' does not exist on type 'Student'.ts(2339)
// console.log(student.test) // undefined

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'GPA')
logStudentKey(student, 'name')

// interface Incomes {
//     [key: string | number]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 200,
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}