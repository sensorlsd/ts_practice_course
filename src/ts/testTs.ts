// @ts-ignore
import { suite, test, slow, timeout } from "@types/mocha";
import * as assert from "assert";

function hey_there() {
    console.log("Type Script ");
}



hey_there();


// Variables in TS

const MAX_VALUE: number =  555555555;
const MIN_VALUE: number = -555555555;

let _messages: boolean;

// String Interpolation in TypeScript

let msg: string = "Jordan";
console.log("A long value has valid for client system. " + msg + " Long system was normal.");
console.log(`A long value has valid for client system. ${msg} Long system was normal.`);

if(!(MIN_VALUE == 55555555)){
    console.log(`error`)
}

type ageList = Array<string> | string;

let names:ageList = [
    'Sensor',
    'Jax',
    'Sector',
    'Jade'];

console.log(names);
console.log(names[0]);

let name1: ageList = 'Bubles';
console.log(name1);

// Math part

let mathResult: number = .3652;
let taxValue: number = 20;
let salaryValue: number = 1600;
let currencyExchange: number = 28.9;

function exchange(salary: number, tax: number, exchangeValue: number): void{
    let result: number;
    let taxSalary: number;
    let message: string;
    result = salary * exchangeValue;
    taxSalary =  (result * tax) / 100;
    message = `You god salary at the rate of ${result} UAH and tax on your salary equal ${taxSalary}`;
    console.log(message)
}

exchange(salaryValue, taxValue, currencyExchange);

let arrList: number[] = [2,3,4,5,6,7,8,6,5,4,3,4,5,6,7];

for (let list in arrList) {
    console.log(list)
}

for (let list of arrList) {
    console.log(list)
}
let names1: string[] = ["Jax","Jase","Jade","Tady"];
let counter: number = 0;
(function (){
    for (let name in names1) {
        counter++;
    }
});
console.log(counter);

