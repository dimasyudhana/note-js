// run in live server : http://localhost:5500/ts3/build/
// class

// class Coder {
//     // Property 'name' has no initializer and is not definitely assigned in the constructor.ts(2564)
//     name: string
//     music: string
//     age: number
//     lang: string

//     // Redundan, walaupun redundan its actually what we need => add modifier
//     // as param
//     constructor(
//         name: string,
//         music: string,
//         age: number,
//         lang: string,
//     ) {
//         this.name = name
//         this.age = age
//         this.music = music
//         this.lang = lang
//     }
// }

class Coder {

    secondLang!: string

    // Redundan, walaupun redundan its actually what we need => add modifier, little more dry
    // as param
    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'TypeScript'
    ) {
        this.name = name
        this.age = age
        this.music = music
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }
}

const Dave = new Coder('Dave', 'Rock', 42)
console.log(Dave.getAge())
// console.log(Dave.age)
// console.log(Dave.lang)

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25)
console.log(Sara.getLang())
// console.log(Sara.age)
// console.log(Sara.lang)

// Implementing interface to a class
interface Musician {
    name: string,
    instrument: string,
    play(action: string): string,
}

class Guitarist implements Musician {
    name: string
    instrument: string
    constructor(name: string, instrument:string){
        this.name = name
        this.instrument = instrument
    }
    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'))

class Peeps {
    static count: number = 0
    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Steve.id)
console.log(Peeps.count)

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(element => typeof element === 'string')) {
            this.dataState = value
            return
        }else throw new Error('Param is not an array of strings')
    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young','Led Zep']
console.log(MyBands.data)
MyBands.data = [...MyBands.data, 'ZZTop']
console.log(MyBands.data)
MyBands.data = ['Van Hallen']