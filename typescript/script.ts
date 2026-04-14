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


               // TYPE NARROWING
let value: unknown = "Hello";

// check type
if (typeof value === "string") {
    console.log("It is a string");
}

if (typeof value === "number") {
    console.log("It is a number");
}