// // number type
// let a: number;
// a = 10;
// // a = true;


// // string type
// let username: string;
// username = "Pritish";
// // name = 20; 


// // boolean type
// let isLogin: boolean;
// isLogin = true;
// // isLogin = "yes;


//                // TYPE NARROWING
// let value: unknown = "Hello";

// // check type
// if (typeof value === "string") {
//     console.log("It is a string");
// }

// if (typeof value === "number") {
//     console.log("It is a number");
// }



// // function with parameter annotation

// function add(a: number, b: number): number {
//     return a + b;
// }

// let result = add(5, 10);
// console.log(result);


// function with optional parameter

// function demo (a: number, b?:string, c?:boolean){
//     console.log("hello");
//     console.log(a);
//     console.log(b);
//     console.log(c);
    
// }



//Homogenous Array



// Number Array
// let numbers: number[] = [1, 2, 3];
// numbers.push(4);

// // String Array
// let names: string[] = ["Pritish", "Rahul"];
// names.push("Aman");

// // Boolean Array
// let flags: boolean[] = [true, false];
// flags.push(true);

// // Array using Array<Type>
// let marks: Array<number> = [10, 20, 30];
// marks.push(40);

// // One console (all outputs together)
// console.log(numbers, names, flags, marks);




// //Union with Union Parameter


// function show(value: string | number | boolean): void {
//     console.log(value);
// }

// show("Hi");
// show(20);
// show(true);