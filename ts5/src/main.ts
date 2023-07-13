// run in live server : http://localhost:5500/ts3/build/
// type assertions : sometimes you will have information about the type of a value that ts can not know about.

type One = string
type Two = string | number
type Three = 'hallu...'

// convert to more or less specific
let a: One = 'hallu...'
let b = a as Two // less specific type
let c = a as Three // more specific type

// this can not be used on react
let d  = <One>'world'
let e  = <string | number>'world'

const addOrConcat = (a: number, b:number, c:'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2,2,'concat') as string

// be carefull TS sees no prob - but a string is returned
let nextVal: number = addOrConcat(2,2,'concat') as number

// Conversion of type 'number' to type 'string' may be a mistake because 
// neither type sufficiently overlaps with the other. If this was intentional, 
// convert the expression to 'unknown' first.ts(2352)
// 10 as string
(10 as unknown) as string

// The DOM 
const img = document.querySelector('img') as HTMLImageElement
// const img = document.querySelector('#myId')
const img2 = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement
// nextImg can not work on react
const nextImg = <HTMLImageElement>document.getElementById('#img')

// 'image' is possibly 'null'.ts(18047)
img.src
img2.src
myImg.src
