const apples: number = 5;
let str: string = 'adsasd';

let nothing: null = null;

let date: Date = new Date();

//Array
let colors: string[] = ['red', 'green'];
let nums: number[] = [1, 3, 5];

//classes
class Car {

}
let car: Car = new Car();


//Object literal
let point: { x: number; y: number; } = {
  x: 10,
  y: 20
}


//function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

//when to use annotations
//when variable initation returns any type  
const json: number = JSON.parse('4');

//when we declare var in one line and initialize in another

let foundWord: boolean;
foundWord = true;

// variable whose type cannot be inferred correctly

let number = null
number = 1;

