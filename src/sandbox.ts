const chartactor = "kasun";
const inputs = document.querySelectorAll("input");
console.log(inputs);

inputs.forEach((inputs) => {
    console.log(inputs);
});


// let arr : string[]  = []
// let mixed: (string | number | boolean)[] = []

// let x : (string|number);
// let y : { x: number; y: number}
// let yx : { x: any; y: object};

// let greet: Function;
type StringOrNumber = string | number;

const add = (a: number, b: number, c?: (number| string)) : void => {
    console.log(a+b)
}
const addAgain = (a: number, b: number, c?: StringOrNumber) : void => {
    console.log(a+b)
}

add(12,34)


// function signatures
let greet: (x: string, greeting: string) => void;

greet = (name: string, greeting: string) : void => {
    console.log(`greet ${name}`);
}

//dom and type casting
